import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'
import { RowDataPacket, ResultSetHeader } from 'mysql2'
import { getFirebaseMessaging } from '@/lib/firebase-admin'

interface SendRequest {
  token: string | string[]
  title: string
  body: string
  data?: Record<string, string>
}

export async function POST(request: NextRequest) {
  try {
    const body: SendRequest = await request.json()
    const { token, title, body, data = {} } = body

    // 입력 검증
    if (!token || (!Array.isArray(token) && typeof token !== 'string')) {
      return NextResponse.json(
        { success: false, error: '토큰이 필요합니다.' },
        { status: 400 }
      )
    }

    if (!title || !body) {
      return NextResponse.json(
        { success: false, error: '제목과 내용이 필요합니다.' },
        { status: 400 }
      )
    }

    const tokens = Array.isArray(token) ? token : [token]
    const connection = await pool.getConnection()

    try {
      const messaging = getFirebaseMessaging()
      const results = []
      let successCount = 0
      let failCount = 0

      for (const fcmToken of tokens) {
        try {
          // DB에서 토큰 정보 조회
          const [tokenRows] = await connection.query<RowDataPacket[]>(
            'SELECT id FROM fcm_tokens WHERE token = ? AND is_active = 1',
            [fcmToken]
          )

          if (tokenRows.length === 0) {
            results.push({
              token: fcmToken,
              success: false,
              error: '토큰을 찾을 수 없거나 비활성화되었습니다.',
            })
            failCount++
            continue
          }

          const tokenId = tokenRows[0].id

          // FCM 메시지 전송
          const message = {
            notification: {
              title,
              body,
            },
            data: {
              ...Object.fromEntries(
                Object.entries(data).map(([key, value]) => [key, String(value)])
              ),
            },
            token: fcmToken,
          }

          const messageId = await messaging.send(message)

          // 전송 이력 저장 (push_notifications 테이블이 있는 경우)
          try {
            await connection.query<ResultSetHeader>(
              `INSERT INTO push_notifications 
               (token_id, title, body, data, status, fcm_message_id, sent_at)
               VALUES (?, ?, ?, ?, 'sent', ?, NOW())`,
              [tokenId, title, body, JSON.stringify(data), messageId]
            )
          } catch (historyError) {
            // push_notifications 테이블이 없어도 계속 진행
            console.warn('전송 이력 저장 실패 (테이블이 없을 수 있음):', historyError)
          }

          // 토큰의 last_used_at 업데이트
          await connection.query(
            'UPDATE fcm_tokens SET last_used_at = NOW() WHERE id = ?',
            [tokenId]
          )

          results.push({
            token: fcmToken,
            success: true,
            message_id: messageId,
          })
          successCount++
        } catch (error: any) {
          const errorMessage = error?.message || '알 수 없는 오류'
          
          // 전송 실패 이력 저장
          try {
            const [tokenRows] = await connection.query<RowDataPacket[]>(
              'SELECT id FROM fcm_tokens WHERE token = ?',
              [fcmToken]
            )
            
            if (tokenRows.length > 0) {
              await connection.query<ResultSetHeader>(
                `INSERT INTO push_notifications 
                 (token_id, title, body, data, status, error_message, created_at)
                 VALUES (?, ?, ?, ?, 'failed', ?, NOW())`,
                [tokenRows[0].id, title, body, JSON.stringify(data), errorMessage]
              )
            }
          } catch (historyError) {
            console.warn('실패 이력 저장 실패:', historyError)
          }

          // FCM 토큰이 유효하지 않은 경우 비활성화
          if (error?.code === 'messaging/invalid-registration-token' || 
              error?.code === 'messaging/registration-token-not-registered') {
            await connection.query(
              'UPDATE fcm_tokens SET is_active = 0 WHERE token = ?',
              [fcmToken]
            )
          }

          results.push({
            token: fcmToken,
            success: false,
            error: errorMessage,
          })
          failCount++
        }
      }

      return NextResponse.json({
        success: true,
        message: `전송 완료: 성공 ${successCount}건, 실패 ${failCount}건`,
        data: {
          results,
          success_count: successCount,
          fail_count: failCount,
        },
      })
    } finally {
      connection.release()
    }
  } catch (error) {
    console.error('FCM 전송 오류:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : '푸시 알림 전송에 실패했습니다.',
      },
      { status: 500 }
    )
  }
}

