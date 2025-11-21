export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // 서버 사이드에서만 실행
    const { startJobNotificationScheduler } = await import('@/lib/scheduler')
    
    // 스케줄러 시작
    startJobNotificationScheduler()
    
    console.log('[Instrumentation] 신규 공고 알림 스케줄러 등록 완료')
  }
}

