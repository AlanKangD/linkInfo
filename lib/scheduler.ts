import cron from 'node-cron'
import { checkAndNotifyNewJobs } from './job-notification'

let schedulerStarted = false

/**
 * 신규 공고 알림 스케줄러 시작
 * 
 * 실행 주기: 5분마다 (환경 변수로 변경 가능)
 * CRON 형식: 매 5분마다 실행 (환경 변수 JOB_NOTIFICATION_CRON으로 변경 가능)
 */
export function startJobNotificationScheduler(): void {
  if (schedulerStarted) {
    console.log('[Scheduler] 스케줄러가 이미 실행 중입니다.')
    return
  }

  // 환경 변수에서 주기 가져오기 (기본값: 5분)
  const cronSchedule = process.env.JOB_NOTIFICATION_CRON || '*/5 * * * *'
  
  console.log(`[Scheduler] 신규 공고 알림 스케줄러 시작 (주기: ${cronSchedule})`)

  // 스케줄 등록
  cron.schedule(cronSchedule, async () => {
    try {
      await checkAndNotifyNewJobs()
    } catch (error) {
      console.error('[Scheduler] 스케줄 실행 오류:', error)
    }
  })

  schedulerStarted = true
  
  // 서버 시작 시 즉시 한 번 실행 (선택사항)
  if (process.env.JOB_NOTIFICATION_RUN_ON_START === 'true') {
    console.log('[Scheduler] 서버 시작 시 즉시 실행')
    setTimeout(async () => {
      try {
        await checkAndNotifyNewJobs()
      } catch (error) {
        console.error('[Scheduler] 초기 실행 오류:', error)
      }
    }, 10000) // 10초 후 실행 (서버 완전 시작 대기)
  }
}

/**
 * 스케줄러 중지
 */
export function stopJobNotificationScheduler(): void {
  // node-cron은 중지 기능이 제한적이므로, 
  // 프로세스 종료 시 자동으로 중지됩니다.
  schedulerStarted = false
  console.log('[Scheduler] 스케줄러 중지 요청 (프로세스 종료 시 완전 중지)')
}

