import pool from '@/lib/db'
import { getFirebaseMessaging } from '@/lib/firebase-admin'
import { ResultSetHeader, RowDataPacket } from 'mysql2'

interface NewJob {
  id: number
  data_sid: string
  title: string
  school: string
  regdate: string | Date | null
  duedate: string | null
  link: string | null
}

interface NotificationResult {
  jobId: number
  dataSid: string
  success: boolean
  totalTokens: number
  successCount: number
  failCount: number
  error?: string
}

/**
 * 마지막 확인 시간 이후 신규 공고 조회
 */
export async function getNewJobs(lastCheckTime: Date): Promise<NewJob[]> {
  const connection = await pool.getConnection()
  
  try {
    const [rows] = await connection.query<RowDataPacket[]>(
      `SELECT id, data_sid, title, school, regdate, duedate, link
       FROM teacher_jobs
       WHERE created_at > ?
       ORDER BY created_at DESC`,
      [lastCheckTime]
    )
    
    return rows.map((row) => ({
      id: row.id,
      data_sid: row.data_sid,
      title: row.title || '제목 없음',
      school: row.school || '학교명 없음',
      regdate: row.regdate,
      duedate: row.duedate,
      link: row.link,
    }))
  } finally {
    connection.release()
  }
}

/**
 * 이미 알림을 보낸 공고인지 확인
 */
export async function isNotificationSent(jobId: number, dataSid: string): Promise<boolean> {
  const connection = await pool.getConnection()
  
  try {
    const [rows] = await connection.query<RowDataPacket[]>(
      `SELECT id FROM job_notification_logs 
       WHERE job_id = ? OR data_sid = ? 
       LIMIT 1`,
      [jobId, dataSid]
    )
    
    return rows.length > 0
  } finally {
    connection.release()
  }
}

/**
 * 활성 FCM 토큰 조회
 */
export async function getActiveTokens(): Promise<string[]> {
  const connection = await pool.getConnection()
  
  try {
    const [rows] = await connection.query<RowDataPacket[]>(
      `SELECT token FROM fcm_tokens 
       WHERE is_active = 1 
       ORDER BY last_used_at DESC, created_at DESC`
    )
    
    return rows.map((row) => row.token)
  } finally {
    connection.release()
  }
}

/**
 * 신규 공고 알림 전송
 */
export async function sendNewJobNotification(
  job: NewJob,
  tokens: string[]
): Promise<NotificationResult> {
  const connection = await pool.getConnection()
  const messaging = getFirebaseMessaging()
  
  let successCount = 0
  let failCount = 0
  
  try {
    // 알림 메시지 생성
    const title = '새로운 채용 공고'
    const body = `[${job.school}] ${job.title}`
    
    const data: Record<string, string> = {
      type: 'new_job',
      job_id: String(job.id),
      data_sid: job.data_sid,
      url: job.link || '/jobs',
      school: job.school,
      title: job.title,
    }
    
    // 배치 전송 (100개씩)
    const batchSize = 100
    for (let i = 0; i < tokens.length; i += batchSize) {
      const batch = tokens.slice(i, i + batchSize)
      
      for (const token of batch) {
        try {
          const message = {
            notification: { title, body },
            data: Object.fromEntries(
              Object.entries(data).map(([key, value]) => [key, String(value)])
            ),
            token,
          }
          
          await messaging.send(message)
          successCount++
        } catch (error: any) {
          failCount++
          
          // 만료된 토큰 비활성화
          if (
            error?.code === 'messaging/invalid-registration-token' ||
            error?.code === 'messaging/registration-token-not-registered'
          ) {
            await connection.query(
              'UPDATE fcm_tokens SET is_active = 0 WHERE token = ?',
              [token]
            )
          }
        }
      }
    }
    
    // 전송 이력 저장
    try {
      await connection.query<ResultSetHeader>(
        `INSERT INTO job_notification_logs 
         (job_id, data_sid, total_tokens, success_count, fail_count)
         VALUES (?, ?, ?, ?, ?)`,
        [job.id, job.data_sid, tokens.length, successCount, failCount]
      )
    } catch (historyError) {
      // 테이블이 없어도 계속 진행
      console.warn('알림 이력 저장 실패:', historyError)
    }
    
    return {
      jobId: job.id,
      dataSid: job.data_sid,
      success: true,
      totalTokens: tokens.length,
      successCount,
      failCount,
    }
  } catch (error: any) {
    return {
      jobId: job.id,
      dataSid: job.data_sid,
      success: false,
      totalTokens: tokens.length,
      successCount,
      failCount,
      error: error?.message || '알림 전송 실패',
    }
  } finally {
    connection.release()
  }
}

/**
 * 마지막 확인 시간 조회
 */
export async function getLastCheckTime(): Promise<Date> {
  const connection = await pool.getConnection()
  
  try {
    const [rows] = await connection.query<RowDataPacket[]>(
      'SELECT last_check_time FROM notification_checkpoints ORDER BY id DESC LIMIT 1'
    )
    
    if (rows.length > 0 && rows[0].last_check_time) {
      return new Date(rows[0].last_check_time)
    }
    
    // 기본값: 24시간 전
    const defaultTime = new Date()
    defaultTime.setHours(defaultTime.getHours() - 24)
    return defaultTime
  } finally {
    connection.release()
  }
}

/**
 * 마지막 확인 시간 업데이트
 */
export async function updateLastCheckTime(): Promise<void> {
  const connection = await pool.getConnection()
  
  try {
    // 기존 레코드가 있으면 업데이트, 없으면 생성
    const [existing] = await connection.query<RowDataPacket[]>(
      'SELECT id FROM notification_checkpoints ORDER BY id DESC LIMIT 1'
    )
    
    if (existing.length > 0) {
      await connection.query(
        'UPDATE notification_checkpoints SET last_check_time = NOW() WHERE id = ?',
        [existing[0].id]
      )
    } else {
      await connection.query(
        'INSERT INTO notification_checkpoints (last_check_time) VALUES (NOW())'
      )
    }
  } finally {
    connection.release()
  }
}

/**
 * 신규 공고 확인 및 알림 전송 (메인 함수)
 */
export async function checkAndNotifyNewJobs(): Promise<{
  checked: number
  notified: number
  results: NotificationResult[]
}> {
  try {
    console.log('[Job Notification] 신규 공고 확인 시작...')
    
    // 마지막 확인 시간 조회
    const lastCheckTime = await getLastCheckTime()
    console.log(`[Job Notification] 마지막 확인 시간: ${lastCheckTime.toISOString()}`)
    
    // 신규 공고 조회
    const newJobs = await getNewJobs(lastCheckTime)
    console.log(`[Job Notification] 신규 공고 ${newJobs.length}건 발견`)
    
    if (newJobs.length === 0) {
      // 확인 시간만 업데이트
      await updateLastCheckTime()
      return { checked: 0, notified: 0, results: [] }
    }
    
    // 활성 토큰 조회
    const tokens = await getActiveTokens()
    console.log(`[Job Notification] 활성 토큰 ${tokens.length}개`)
    
    if (tokens.length === 0) {
      console.log('[Job Notification] 전송할 토큰이 없습니다.')
      await updateLastCheckTime()
      return { checked: newJobs.length, notified: 0, results: [] }
    }
    
    // 각 공고에 대해 알림 전송
    const results: NotificationResult[] = []
    let notifiedCount = 0
    
    for (const job of newJobs) {
      // 이미 알림을 보냈는지 확인
      const alreadySent = await isNotificationSent(job.id, job.data_sid)
      
      if (alreadySent) {
        console.log(`[Job Notification] 공고 ${job.data_sid}는 이미 알림을 보냈습니다.`)
        continue
      }
      
      // 알림 전송
      const result = await sendNewJobNotification(job, tokens)
      results.push(result)
      
      if (result.success) {
        notifiedCount++
        console.log(
          `[Job Notification] 공고 ${job.data_sid} 알림 전송 완료: ` +
          `성공 ${result.successCount}건, 실패 ${result.failCount}건`
        )
      } else {
        console.error(
          `[Job Notification] 공고 ${job.data_sid} 알림 전송 실패: ${result.error}`
        )
      }
    }
    
    // 마지막 확인 시간 업데이트
    await updateLastCheckTime()
    
    console.log(
      `[Job Notification] 완료: 확인 ${newJobs.length}건, 알림 전송 ${notifiedCount}건`
    )
    
    return {
      checked: newJobs.length,
      notified: notifiedCount,
      results,
    }
  } catch (error) {
    console.error('[Job Notification] 오류:', error)
    throw error
  }
}

