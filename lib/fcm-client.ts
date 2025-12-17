/**
 * FCM 클라이언트 사이드 유틸리티
 * Flutter WebView에서 호출하는 전역 함수들을 정의합니다.
 */

import { handleNotificationNavigation } from './notification-navigation'

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
  ;(window as any).onFCMTokenReceived = function (token: string, platform?: 'android' | 'ios' | 'web') {
    console.log('FCM Token Received:', token, 'Platform:', platform)

    // 플랫폼 자동 감지 (Flutter에서 전달하지 않은 경우)
    let detectedPlatform: 'android' | 'ios' | 'web' = platform || 'android'
    if (!platform) {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
      if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        detectedPlatform = 'ios'
      } else if (/android/i.test(userAgent)) {
        detectedPlatform = 'android'
      } else {
        detectedPlatform = 'web'
      }
    }

    // 서버로 토큰 전송
    sendTokenToServer(token, detectedPlatform).catch((error) => {
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
        const notification = new Notification(message.title, {
          body: message.body,
          icon: '/icon.svg',
          tag: message.messageId,
          data: message.data,
        })

        // 브라우저 알림 클릭 이벤트 처리
        notification.onclick = () => {
          console.log('Browser notification clicked:', message)
          handleNotificationNavigation(message)
          notification.close()
        }
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted' && message.title && message.body) {
            const notification = new Notification(message.title, {
              body: message.body,
              icon: '/icon.svg',
              tag: message.messageId,
              data: message.data,
            })

            // 브라우저 알림 클릭 이벤트 처리
            notification.onclick = () => {
              console.log('Browser notification clicked:', message)
              handleNotificationNavigation(message)
              notification.close()
            }
          }
        })
      }
    }

    // 포그라운드 상태에서도 네비게이션 처리 (선택사항)
    // 앱이 실행 중일 때도 알림 클릭처럼 동작하게 하려면 주석 해제
    // handleNotificationNavigation(message)
  }

  /**
   * FCM 알림 클릭 핸들러
   * Flutter에서 iOS 알림 클릭 시 window.onFCMNotificationClick(payload) 형태로 호출됩니다.
   * 백그라운드/종료 상태에서 알림을 클릭했을 때 호출됩니다.
   */
  ;(window as any).onFCMNotificationClick = function (payload: {
    messageId?: string
    title?: string
    body?: string
    data?: Record<string, any>
  }) {
    console.log('FCM Notification Clicked (from Flutter):', payload)
    handleNotificationNavigation(payload)
  }

  // 페이지 로드 시 알림 권한 요청
  if (typeof window !== 'undefined' && 'Notification' in window) {
    if (Notification.permission === 'default') {
      // 사용자 상호작용 후 권한 요청하는 것이 좋지만, 여기서는 자동 요청
      // Notification.requestPermission()
    }
  }

  /**
   * 개발용: 브라우저에서 알림 클릭 테스트 함수
   * 콘솔에서 testNotificationClick() 호출하여 테스트 가능
   */
  if (process.env.NODE_ENV === 'development') {
    ;(window as any).testNotificationClick = function (options?: {
      jobId?: number | string
      dataSid?: string
      type?: string
      url?: string
    }) {
      const testPayload = {
        messageId: 'test-' + Date.now(),
        title: '테스트 알림',
        body: '이것은 테스트 알림입니다.',
        data: {
          type: options?.type || 'new_job',
          job_id: options?.jobId,
          data_sid: options?.dataSid,
          url: options?.url,
        },
      }

      console.log('🧪 테스트 알림 클릭:', testPayload)
      handleNotificationNavigation(testPayload)
    }

    console.log(
      '%c🧪 개발 모드: 알림 클릭 테스트',
      'color: #10b981; font-weight: bold; font-size: 14px;'
    )
    console.log(
      '콘솔에서 다음 명령어로 테스트하세요:',
      'color: #6b7280;'
    )
    console.log('  testNotificationClick({ jobId: 1 })')
    console.log('  testNotificationClick({ dataSid: "12345" })')
    console.log('  testNotificationClick({ type: "new_job" })')
    console.log('  testNotificationClick({ url: "https://example.com" })')
  }
}

export { sendTokenToServer }

