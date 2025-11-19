# Docker 실행 가이드

## 사전 요구사항

- Docker 설치
- Docker Compose 설치

## 환경 변수 설정

`.env` 파일을 생성하고 다음 내용을 추가하세요:

```env
DB_HOST=125.241.251.235
DB_PORT=3306
DB_NAME=private
DB_USER=root
DB_PASSWORD=rootpassword
```

또는 `.env.example` 파일을 복사하여 사용할 수 있습니다:

```bash
cp .env.example .env
```

## Docker Compose를 사용한 실행 (권장)

```bash
# 이미지 빌드 및 컨테이너 실행
docker-compose up -d

# 로그 확인
docker-compose logs -f

# 컨테이너 중지
docker-compose down
```

## Docker 명령어로 직접 실행

### 1. 이미지 빌드

```bash
docker build -t app-and-web-ui-ux .
```

### 2. 컨테이너 실행

```bash
docker run -d \
  -p 3000:3000 \
  -e DB_HOST=125.241.251.235 \
  -e DB_PORT=3306 \
  -e DB_NAME=private \
  -e DB_USER=root \
  -e DB_PASSWORD=rootpassword \
  --name app-and-web-ui-ux \
  app-and-web-ui-ux
```

### 3. 환경 변수 파일 사용

```bash
docker run -d \
  -p 3000:3000 \
  --env-file .env \
  --name app-and-web-ui-ux \
  app-and-web-ui-ux
```

## 접속

애플리케이션은 `http://localhost:3000`에서 실행됩니다.

## 유용한 명령어

```bash
# 실행 중인 컨테이너 확인
docker ps

# 컨테이너 로그 확인
docker logs app-and-web-ui-ux

# 컨테이너 중지
docker stop app-and-web-ui-ux

# 컨테이너 제거
docker rm app-and-web-ui-ux

# 이미지 제거
docker rmi app-and-web-ui-ux
```

