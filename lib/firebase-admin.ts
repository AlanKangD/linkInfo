import { initializeApp, getApps, cert, App } from 'firebase-admin/app'
import { getMessaging, Messaging } from 'firebase-admin/messaging'
import { readFileSync } from 'fs'

let messaging: Messaging | null = null

export function getFirebaseMessaging(): Messaging {
  if (messaging) {
    return messaging
  }

  // 이미 초기화된 앱이 있으면 사용
  let app: App
  const apps = getApps()
  
  if (apps.length > 0) {
    app = apps[0]
  } else {
    // 환경 변수에서 Firebase 설정 가져오기
    let serviceAccount: any

    // 방법 1: 서비스 계정 키 파일 경로 사용
    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH) {
      try {
        // Next.js 빌드 시 동적 require()가 작동하지 않으므로 fs.readFileSync 사용
        const filePath = process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH
        const fileContent = readFileSync(filePath, 'utf8')
        serviceAccount = JSON.parse(fileContent)
      } catch (error) {
        console.error('Firebase 서비스 계정 키 파일을 읽을 수 없습니다:', error)
        throw new Error(
          'Firebase 서비스 계정 키 파일을 찾을 수 없습니다. ' +
          'FIREBASE_SERVICE_ACCOUNT_KEY_PATH 환경 변수를 확인하세요.'
        )
      }
    } else {
      // 방법 2: 환경 변수로 직접 설정
      const projectId = process.env.FIREBASE_PROJECT_ID
      const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
      const clientEmail = process.env.FIREBASE_CLIENT_EMAIL

      if (!projectId || !privateKey || !clientEmail) {
        throw new Error(
          'Firebase Admin SDK 설정이 완료되지 않았습니다.\n' +
          '다음 중 하나의 방법으로 설정해주세요:\n' +
          '1. FIREBASE_SERVICE_ACCOUNT_KEY_PATH 환경 변수에 서비스 계정 키 파일 경로 설정\n' +
          '2. FIREBASE_PROJECT_ID, FIREBASE_PRIVATE_KEY, FIREBASE_CLIENT_EMAIL 환경 변수 설정\n' +
          '자세한 내용은 FCM_SETUP_GUIDE.md를 참고하세요.'
        )
      }

      serviceAccount = {
        projectId,
        privateKey,
        clientEmail,
      }
    }

    try {
      app = initializeApp({
        credential: cert(serviceAccount),
      })
    } catch (error) {
      console.error('Firebase 초기화 실패:', error)
      throw new Error(
        'Firebase Admin SDK 초기화에 실패했습니다. ' +
        '서비스 계정 키가 유효한지 확인하세요.'
      )
    }
  }

  messaging = getMessaging(app)
  return messaging
}

