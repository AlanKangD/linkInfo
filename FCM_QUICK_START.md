# FCM 빠른 시작 가이드

## ✅ 완료된 작업

1. ✅ Firebase 서비스 계정 키 파일 다운로드 완료
2. ✅ `config/firebase-service-account.json`으로 배치 완료
3. ✅ `docker-compose.yml` 설정 완료

## 🚀 다음 단계: Docker 컨테이너 재시작

### 운영 서버에서 실행:

```bash
# 컨테이너 재시작
docker compose down
docker compose up -d

# 로그 확인
docker compose logs -f app
```

### 로컬에서 테스트:

```bash
# 개발 서버 실행
npm run dev

# 또는 Docker로 실행
docker compose up -d
```

## ✅ 확인 방법

### 1. 파일 확인

```bash
# 파일이 올바른 위치에 있는지 확인
ls -la config/firebase-service-account.json

# 컨테이너 내부에서 확인
docker compose exec app ls -la /app/config/firebase-service-account.json
```

### 2. 환경 변수 확인

```bash
docker compose exec app env | grep FIREBASE
```

예상 출력:
```
FIREBASE_SERVICE_ACCOUNT_KEY_PATH=/app/config/firebase-service-account.json
```

### 3. 푸시 알림 테스트

1. 브라우저에서 `/admin/fcm` 페이지 접속
2. 저장된 토큰 선택
3. 제목과 내용 입력
4. "푸시 알림 전송" 버튼 클릭
5. 성공 메시지 확인

## 📝 참고사항

### Java 코드는 이 프로젝트와 무관합니다

보여주신 Java 코드:
```java
FileInputStream serviceAccount = new FileInputStream("path/to/serviceAccountKey.json");
FirebaseOptions options = new FirebaseOptions.Builder()
  .setCredentials(GoogleCredentials.fromStream(serviceAccount))
  .build();
FirebaseApp.initializeApp(options);
```

이것은 **Java/Android** 프로젝트용 코드입니다.

**이 Next.js 프로젝트에서는:**
- Node.js 환경에서 자동으로 파일을 읽습니다
- `lib/firebase-admin.ts`에서 처리합니다
- 추가 코드 작성 불필요합니다

### 파일 구조

```
프로젝트루트/
  ├── config/
  │   └── firebase-service-account.json  ← 여기에 배치됨
  ├── docker-compose.yml                 ← 볼륨 마운트 설정됨
  └── lib/
      └── firebase-admin.ts              ← 자동으로 파일 읽음
```

## 🔧 문제 해결

### 문제: "파일을 찾을 수 없습니다"

**해결:**
```bash
# 파일 경로 확인
ls -la config/firebase-service-account.json

# Docker 볼륨 마운트 확인
docker compose config | grep volumes
```

### 문제: "Firebase 초기화 실패"

**해결:**
1. 파일이 올바른 형식인지 확인
2. 파일 권한 확인: `chmod 644 config/firebase-service-account.json`
3. 컨테이너 재시작: `docker compose restart app`

### 문제: 환경 변수가 적용되지 않음

**해결:**
```bash
# 완전히 재빌드
docker compose down
docker compose up -d --build
```

## ✨ 완료!

이제 푸시 알림을 보낼 수 있습니다! 🎉

