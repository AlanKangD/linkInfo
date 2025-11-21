import { initializeApp, getApps, cert, App } from 'firebase-admin/app'
import { getMessaging, Messaging } from 'firebase-admin/messaging'

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
    const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH
      ? require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH)
      : {
          projectId: process.env.FIREBASE_PROJECT_ID,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        }

    if (!serviceAccount.projectId || !serviceAccount.privateKey || !serviceAccount.clientEmail) {
      throw new Error('Firebase Admin SDK 설정이 완료되지 않았습니다. 환경 변수를 확인하세요.')
    }

    app = initializeApp({
      credential: cert(serviceAccount),
    })
  }

  messaging = getMessaging(app)
  return messaging
}

