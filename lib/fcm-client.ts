/**
 * FCM 클라이언트 사이드 유틸리티
 * Flutter WebView에서 호출하는 전역 함수들을 정의합니다.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://125.241.251.235:3000'

/**
 * FCM 토큰을 서버로 전송
 */
async function sendTokenToServer(token: string, platform: 'android' | 'ios' | 'web' = 'android') {
  try {
    const response = await fetch(`${API_BASE_URL}/api/fcm/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
        platform,
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log('FCM 토큰 저장 완료:', data)
    return data
  } catch (error) {
    console.error('FCM 토큰 저장 실패:', error)
    throw error
  }
}

/**
 * FCM 토큰 수신 핸들러
 * Flutter에서 window.onFCMTokenReceived(token) 형태로 호출됩니다.
 */
if (typeof window !== 'undefined') {
  ;(window as any).onFCMTokenReceived = function (token: string) {
    console.log('FCM Token Received:', token)

    // 서버로 토큰 전송
    sendTokenToServer(token, 'android').catch((error) => {
      console.error('토큰 전송 실패:', error)
    })
  }

  /**
   * FCM 메시지 수신 핸들러
   * Flutter에서 window.onFCMMessageReceived(message) 형태로 호출됩니다.
   */
  ;(window as any).onFCMMessageReceived = function (message: {
    messageId?: string
    title?: string
    body?: string
    data?: Record<string, any>
  }) {
    console.log('FCM Message Received:', message)

    // 알림 표시 (브라우저 알림 API 사용)
    if (message.title && message.body && 'Notification' in window) {
      if (Notification.permission === 'granted') {
        new Notification(message.title, {
          body: message.body,
          icon: '/icon.svg',
          tag: message.messageId,
        })
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted' && message.title && message.body) {
            new Notification(message.title, {
              body: message.body,
              icon: '/icon.svg',
              tag: message.messageId,
            })
          }
        })
      }
    }

    // 커스텀 데이터 처리
    if (message.data) {
      // URL이 있으면 해당 페이지로 이동
      if (message.data.url) {
        window.location.href = message.data.url
      }

      // job_id가 있으면 해당 채용 공고 페이지로 이동
      if (message.data.job_id) {
        // 필요시 채용 공고 상세 페이지로 이동하는 로직 추가
        console.log('Job ID:', message.data.job_id)
      }
    }
  }

  // 페이지 로드 시 알림 권한 요청
  if (typeof window !== 'undefined' && 'Notification' in window) {
    if (Notification.permission === 'default') {
      // 사용자 상호작용 후 권한 요청하는 것이 좋지만, 여기서는 자동 요청
      // Notification.requestPermission()
    }
  }
}

export { sendTokenToServer }

