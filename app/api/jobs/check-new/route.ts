import { checkAndNotifyNewJobs } from '@/lib/job-notification'
import { NextRequest, NextResponse } from 'next/server'

/**
 * 신규 공고 확인 및 알림 전송 API
 * 수동 실행 또는 외부 Cron 서비스에서 호출 가능
 */
export async function GET(request: NextRequest) {
  try {
    // 간단한 인증 (선택사항)
    const authToken = process.env.JOB_NOTIFICATION_AUTH_TOKEN
    if (authToken) {
      const requestToken = request.headers.get('authorization')?.replace('Bearer ', '')
      if (requestToken !== authToken) {
        return NextResponse.json(
          { success: false, error: 'Unauthorized' },
          { status: 401 }
        )
      }
    }

    const result = await checkAndNotifyNewJobs()

    return NextResponse.json({
      success: true,
      message: `확인: ${result.checked}건, 알림 전송: ${result.notified}건`,
      data: result,
    })
  } catch (error) {
    console.error('신규 공고 확인 오류:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : '알 수 없는 오류',
      },
      { status: 500 }
    )
  }
}

/**
 * POST 요청도 지원 (외부 서비스 호출용)
 */
export async function POST(request: NextRequest) {
  return GET(request)
}

