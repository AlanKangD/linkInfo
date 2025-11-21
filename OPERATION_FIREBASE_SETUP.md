# 운영 서버 Firebase 설정 가이드

## 현재 문제

운영 서버에서 Firebase 환경 변수가 설정되지 않아 푸시 알림 전송이 실패하고 있습니다.

## 해결 방법

### 1단계: 환경 변수 확인

운영 서버에서 다음 명령어로 현재 환경 변수를 확인하세요:

```bash
# 컨테이너 내부 환경 변수 확인
docker compose exec app env | grep FIREBASE

# 또는
docker exec <container-name> env | grep FIREBASE
```

### 2단계: .env 파일 생성 또는 수정

운영 서버의 프로젝트 루트 디렉토리에 `.env` 파일을 생성하거나 수정하세요:

```bash
# .env 파일 생성
nano .env
# 또는
vi .env
```

다음 내용을 추가:

```env
# Firebase Admin SDK 설정
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
```

**중요:**
- `FIREBASE_PRIVATE_KEY`는 여러 줄이므로 반드시 따옴표로 감싸고 `\n`을 사용해야 합니다
- 실제 값은 Firebase 콘솔에서 서비스 계정 키를 다운로드하여 확인하세요

### 3단계: Firebase 서비스 계정 키 얻기

1. [Firebase Console](https://console.firebase.google.com/) 접속
2. 프로젝트 선택
3. 프로젝트 설정 (⚙️) > 서비스 계정 탭
4. "새 비공개 키 생성" 클릭
5. JSON 파일 다운로드

다운로드한 JSON 파일에서 다음 값들을 찾아 `.env` 파일에 입력:
- `project_id` → `FIREBASE_PROJECT_ID`
- `private_key` → `FIREBASE_PRIVATE_KEY` (전체 키를 `\n`으로 연결)
- `client_email` → `FIREBASE_CLIENT_EMAIL`

### 4단계: Docker 컨테이너 재시작

```bash
# 컨테이너 재시작 (환경 변수 적용)
docker compose down
docker compose up -d

# 또는 특정 서비스만 재시작
docker compose restart app
```

### 5단계: 환경 변수 확인

```bash
# 컨테이너 내부에서 확인
docker compose exec app env | grep FIREBASE

# 예상 출력:
# FIREBASE_PROJECT_ID=your-project-id
# FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\n...
# FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@...
```

### 6단계: 테스트

1. `/admin/fcm` 페이지 접속
2. 저장된 토큰 선택
3. 제목과 내용 입력
4. 푸시 알림 전송
5. 성공 메시지 확인

## 빠른 확인 스크립트

프로젝트 루트에서 실행:

```bash
./check-env.sh
```

## 문제 해결

### 문제: 환경 변수가 적용되지 않음

**해결:**
1. `.env` 파일이 프로젝트 루트에 있는지 확인
2. `docker compose down` 후 `docker compose up -d`로 재시작
3. 환경 변수 이름이 정확한지 확인 (대소문자 구분)

### 문제: FIREBASE_PRIVATE_KEY 형식 오류

**해결:**
- Private Key는 여러 줄이므로 반드시 따옴표로 감싸야 합니다
- 줄바꿈은 `\n`으로 표현해야 합니다
- 예시:
  ```env
  FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
  ```

### 문제: 컨테이너 재시작 후에도 적용 안 됨

**해결:**
```bash
# 완전히 재빌드
docker compose down
docker compose up -d --build
```

## 보안 주의사항

⚠️ **중요:**
- `.env` 파일은 절대 Git에 커밋하지 마세요
- `.gitignore`에 `.env`가 포함되어 있는지 확인
- Private Key는 외부에 노출되지 않도록 주의

## 대안: 서비스 계정 키 파일 사용

환경 변수 대신 파일을 사용할 수도 있습니다:

1. 서비스 계정 키 JSON 파일을 서버에 업로드
2. `docker-compose.yml`에 볼륨 마운트 추가:

```yaml
services:
  app:
    volumes:
      - ./config/firebase-service-account.json:/app/config/firebase-service-account.json:ro
    environment:
      - FIREBASE_SERVICE_ACCOUNT_KEY_PATH=/app/config/firebase-service-account.json
```

3. 컨테이너 재시작

