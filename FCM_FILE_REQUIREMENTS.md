# FCM 파일 요구사항 정리

## 서버(백엔드)에서 필요한 파일

### ✅ 필수: Firebase 서비스 계정 키 JSON 파일

**파일명:** `config/firebase-service-account.json`

**용도:**
- 서버에서 푸시 알림을 **전송**하기 위해 필요
- Firebase Admin SDK 초기화에 사용
- **없으면 푸시 알림을 보낼 수 없습니다**

**다운로드 위치:**
1. [Firebase Console](https://console.firebase.google.com/)
2. 프로젝트 설정 > 서비스 계정 탭
3. "새 비공개 키 생성" 클릭
4. JSON 파일 다운로드

**파일 내용 예시:**
```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "xxxxx",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com",
  ...
}
```

**보안:**
- ⚠️ 절대 Git에 커밋하지 마세요
- `.gitignore`에 포함되어 있습니다
- 파일 권한을 400 또는 600으로 설정 권장

---

## 클라이언트(앱)에서 필요한 파일

### ✅ 필수: google-services.json (Android)

**파일명:** `google-services.json`

**용도:**
- Android 앱에서 FCM 토큰을 받기 위해 필요
- 앱의 `app/` 디렉토리에 배치
- **없으면 앱에서 FCM 토큰을 받을 수 없습니다**

**다운로드 위치:**
1. Firebase Console > 프로젝트 설정
2. "내 앱" 섹션에서 Android 앱 선택
3. `google-services.json` 다운로드

### ✅ 필수: GoogleService-Info.plist (iOS)

**파일명:** `GoogleService-Info.plist`

**용도:**
- iOS 앱에서 FCM 토큰을 받기 위해 필요
- Xcode 프로젝트에 추가
- **없으면 iOS 앱에서 FCM 토큰을 받을 수 없습니다**

**다운로드 위치:**
1. Firebase Console > 프로젝트 설정
2. "내 앱" 섹션에서 iOS 앱 선택
3. `GoogleService-Info.plist` 다운로드

---

## 현재 프로젝트에서 필요한 파일

### ✅ 서버 측 (이 프로젝트)

**필수 파일:**
- `config/firebase-service-account.json` ← **지금 필요한 파일**

**용도:**
- `/api/fcm/send` API에서 푸시 알림 전송
- `/admin/fcm` 페이지에서 테스트 전송

**없으면:**
- ❌ 푸시 알림 전송 불가
- ❌ "Firebase Admin SDK 설정이 완료되지 않았습니다" 에러 발생

---

## 요약

### 서버(이 Next.js 프로젝트)
- ✅ **필수:** `config/firebase-service-account.json`
- 용도: 푸시 알림 전송
- 없으면: 전송 불가

### 클라이언트(Flutter 앱)
- ✅ **필수:** `google-services.json` (Android)
- ✅ **필수:** `GoogleService-Info.plist` (iOS)
- 용도: FCM 토큰 받기
- 없으면: 토큰 받기 불가

---

## FAQ

### Q: 서비스 계정 키 파일 없이 사용할 수 있나요?
**A:** 아니요. 서버에서 푸시 알림을 보내려면 반드시 필요합니다.

### Q: 환경 변수로 대체할 수 있나요?
**A:** 가능하지만 JSON 파일이 더 간단하고 안전합니다. 환경 변수로 설정할 경우 Private Key 형식 오류가 발생할 수 있습니다.

### Q: 클라이언트 파일도 서버에 필요한가요?
**A:** 아니요. `google-services.json`과 `GoogleService-Info.plist`는 앱에만 필요합니다.

### Q: 보안이 걱정됩니다.
**A:** 
- 서비스 계정 키는 서버에만 보관
- Git에 커밋하지 않음 (`.gitignore`에 포함)
- 파일 권한 설정 (400 또는 600)
- 프로덕션 환경에서만 사용

---

## 다음 단계

1. ✅ Firebase Console에서 서비스 계정 키 다운로드
2. ✅ `config/firebase-service-account.json`으로 저장
3. ✅ Docker 컨테이너 재시작
4. ✅ 푸시 알림 테스트

