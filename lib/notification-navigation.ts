/**
 * 알림 클릭 시 네비게이션 처리 유틸리티
 */

export interface NotificationData {
  type?: string
  job_id?: string | number
  url?: string
  data_sid?: string
  school?: string
  title?: string
  [key: string]: any
}

export interface NotificationClickPayload {
  messageId?: string
  title?: string
  body?: string
  data?: NotificationData
}

/**
 * 알림 타입별 화면 전환 처리
 */
export function handleNotificationNavigation(payload: NotificationClickPayload) {
  const { data } = payload

  if (!data) {
    console.warn('알림 데이터가 없습니다.')
    return
  }

  // 커스텀 이벤트 발생하여 HomeScreen에서 처리하도록 함
  const event = new CustomEvent('notificationClick', {
    detail: {
      type: data.type || 'unknown',
      job_id: data.job_id,
      url: data.url,
      data_sid: data.data_sid,
      school: data.school,
      title: data.title,
      fullData: data,
    },
  })

  window.dispatchEvent(event)
}

/**
 * 알림 타입에 따른 네비게이션 액션 결정
 */
export function getNavigationAction(data: NotificationData): {
  tab: 'jobs' | 'products' | 'favorites' | 'notifications'
  action?: 'scrollToJob' | 'openExternal' | 'showNotification'
  params?: Record<string, any>
} {
  // job_id가 있으면 공고 화면으로 이동
  if (data.job_id || data.data_sid) {
    return {
      tab: 'jobs',
      action: 'scrollToJob',
      params: {
        jobId: data.job_id,
        dataSid: data.data_sid,
      },
    }
  }

  // url이 있으면 외부 링크
  if (data.url) {
    return {
      tab: 'jobs', // 기본 탭
      action: 'openExternal',
      params: {
        url: data.url,
      },
    }
  }

  // type에 따른 처리
  switch (data.type) {
    case 'new_job':
      return {
        tab: 'jobs',
        action: 'showNotification',
      }
    case 'product':
      return {
        tab: 'products',
      }
    case 'system':
    default:
      return {
        tab: 'notifications',
      }
  }
}

