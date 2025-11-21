# FCM 파일 문제 해결 가이드

## 현재 문제

컨테이너 내부에서 `/app/config/firebase-service-account.json`이 디렉토리로 인식되고 있습니다.

## 원인

볼륨 마운트 시 소스 파일이 없으면 Docker가 디렉토리를 생성합니다.

## 해결 방법

### 1단계: 운영 서버에서 파일 확인

```bash
# 운영 서버의 프로젝트 디렉토리로 이동
cd /Users/alankang/Documents/project/linkInfo

# 파일 확인
ls -la config/firebase-service-account.json
```

### 2단계: 파일이 없으면 생성

```bash
# config 디렉토리 생성
mkdir -p config

# 원본 파일을 config 디렉토리로 복사
# (원본 파일 위치에 따라 경로 수정)
cp /path/to/webview-fcm-173b2-firebase-adminsdk-fbsvc-e8697cff6a.json \
   config/firebase-service-account.json

# 파일 확인
ls -lh config/firebase-service-account.json
```

### 3단계: 기존 디렉토리 제거 (필요시)

만약 컨테이너 내부에 디렉토리가 생성되어 있다면:

```bash
# 컨테이너 중지
docker compose down

# 로컬에 파일이 올바르게 있는지 확인
ls -la config/firebase-service-account.json

# 컨테이너 재시작
docker compose up -d
```

### 4단계: 확인

```bash
# 컨테이너 내부에서 파일 확인
docker compose exec app ls -la /app/config/firebase-service-account.json

# 파일 내용 확인 (처음 3줄)
docker compose exec app head -3 /app/config/firebase-service-account.json

# 파일 타입 확인 (파일이어야 함)
docker compose exec app file /app/config/firebase-service-account.json
```

## 예상 결과

### ✅ 정상적인 경우:
```
-rw-r--r-- 1 root root 2391 Nov 21 05:00 /app/config/firebase-service-account.json
{
  "type": "service_account",
  "project_id": "webview-fcm-173b2",
```

### ❌ 문제가 있는 경우:
```
drwxr-xr-x 2 nextjs nogroup 64 Nov 21 05:00 firebase-service-account.json
```

## 추가 확인사항

### docker-compose.yml 볼륨 경로 확인

```yaml
volumes:
  - ./config/firebase-service-account.json:/app/config/firebase-service-account.json:ro
```

이 경로는 **상대 경로**이므로, `docker compose`를 실행하는 디렉토리가 중요합니다.

### 올바른 실행 방법

```bash
# 프로젝트 루트에서 실행
cd /Users/alankang/Documents/project/linkInfo
docker compose up -d
```

## 빠른 해결 스크립트

```bash
#!/bin/bash
cd /Users/alankang/Documents/project/linkInfo

# 파일 확인 및 생성
if [ ! -f "config/firebase-service-account.json" ]; then
  echo "파일이 없습니다. 생성 중..."
  mkdir -p config
  # 원본 파일 경로를 여기에 입력
  cp /path/to/original-file.json config/firebase-service-account.json
  echo "✅ 파일 생성 완료"
else
  echo "✅ 파일 존재: config/firebase-service-account.json"
fi

# 컨테이너 재시작
docker compose down
docker compose up -d

# 확인
echo "파일 확인:"
docker compose exec app ls -lh /app/config/firebase-service-account.json
```

