# Docker 환경에서 FCM 설정 가이드

## 문제 해결

현재 Firebase Admin SDK 설정이 완료되지 않아 푸시 알림 전송 시 에러가 발생합니다.

## 해결 방법

### 방법 1: 환경 변수로 설정 (권장 - Docker 환경)

`.env` 파일을 생성하거나 수정하여 Firebase 설정을 추가하세요:

```env
# Firebase Admin SDK 설정
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
```

**중요:** `FIREBASE_PRIVATE_KEY`는 여러 줄 문자열이므로 따옴표로 감싸고 `\n`을 사용해야 합니다.

### 방법 2: 서비스 계정 키 파일 사용

1. Firebase 콘솔에서 서비스 계정 키 JSON 파일 다운로드
2. 프로젝트 루트에 `config/firebase-service-account.json`으로 저장
3. `docker-compose.yml`에 볼륨 마운트 추가:

```yaml
services:
  app:
    # ... 기존 설정 ...
    volumes:
      - ./config/firebase-service-account.json:/app/config/firebase-service-account.json:ro
    environment:
      - FIREBASE_SERVICE_ACCOUNT_KEY_PATH=/app/config/firebase-service-account.json
```

## Firebase 서비스 계정 키 얻는 방법

1. [Firebase Console](https://console.firebase.google.com/) 접속
2. 프로젝트 선택
3. 프로젝트 설정 (⚙️ 아이콘) > 서비스 계정 탭
4. "새 비공개 키 생성" 클릭
5. JSON 파일 다운로드

## Docker Compose로 배포 시

### 1. .env 파일 생성

프로젝트 루트에 `.env` 파일 생성:

```env
# Database
DB_HOST=125.241.251.235
DB_PORT=3306
DB_NAME=private
DB_USER=root
DB_PASSWORD=rootpassword

# Firebase (필수)
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
```

### 2. 배포

```bash
docker compose down
docker compose up -d --build
```

### 3. 환경 변수 확인

```bash
# 컨테이너 내부에서 환경 변수 확인
docker compose exec app env | grep FIREBASE
```

## 주의사항

1. **보안**: `.env` 파일은 절대 Git에 커밋하지 마세요
2. **Private Key 형식**: 여러 줄 문자열이므로 따옴표와 `\n` 사용 필수
3. **Docker 빌드**: 환경 변수 변경 후 반드시 `--build` 옵션 사용

## 테스트

Firebase 설정이 완료되면:

1. `/admin/fcm` 페이지 접속
2. 저장된 토큰 선택
3. 제목과 내용 입력
4. 푸시 알림 전송 버튼 클릭
5. 성공 메시지 확인

## 문제 해결

### 에러: "Firebase Admin SDK 설정이 완료되지 않았습니다"

- `.env` 파일에 Firebase 환경 변수가 설정되어 있는지 확인
- `docker compose up -d --build`로 재빌드했는지 확인
- 환경 변수 값이 올바른지 확인 (특히 `FIREBASE_PRIVATE_KEY`의 `\n` 처리)

### 에러: "서비스 계정 키 파일을 찾을 수 없습니다"

- `FIREBASE_SERVICE_ACCOUNT_KEY_PATH` 경로가 올바른지 확인
- Docker 볼륨 마운트가 제대로 설정되었는지 확인

