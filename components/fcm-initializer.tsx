'use client'

import { useEffect } from 'react'

export function FCMInitializer() {
  useEffect(() => {
    // FCM 클라이언트 초기화
    import('@/lib/fcm-client')
  }, [])

  return null
}

