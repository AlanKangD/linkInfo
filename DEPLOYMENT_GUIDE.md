# Docker 배포 가이드

## 배포 방법

### 1. 코드 변경 후 배포 (권장)

코드를 수정한 후에는 **반드시 이미지를 다시 빌드**해야 합니다:

```bash
# 방법 1: 한 번에 빌드 및 실행 (권장)
docker compose up -d --build

# 방법 2: 단계별 실행
docker compose down
docker compose build
docker compose up -d
```

### 2. 기존 컨테이너 재시작만 필요한 경우

코드 변경이 없고 환경 변수만 변경하거나 컨테이너만 재시작할 때:

```bash
docker compose down
docker compose up -d
```

## 배포 워크플로우

### 초기 배포
```bash
# 1. 이미지 빌드 및 컨테이너 실행
docker compose up -d --build

# 2. 로그 확인
docker compose logs -f
```

### 코드 변경 후 재배포
```bash
# 1. 기존 컨테이너 중지 및 제거
docker compose down

# 2. 새 이미지 빌드 및 실행
docker compose up -d --build

# 3. 로그 확인
docker compose logs -f app
```

### 빠른 재시작 (빌드 없이)
```bash
# 코드 변경이 없을 때만 사용
docker compose restart
```

## 유용한 명령어

### 로그 확인
```bash
# 실시간 로그 확인
docker compose logs -f app

# 최근 100줄만 확인
docker compose logs --tail=100 app
```

### 컨테이너 상태 확인
```bash
# 실행 중인 컨테이너 확인
docker compose ps

# 상세 정보
docker ps
```

### 컨테이너 내부 접속 (디버깅)
```bash
docker compose exec app sh
```

### 이미지 및 컨테이너 완전 제거
```bash
# 컨테이너, 네트워크, 볼륨 모두 제거
docker compose down -v

# 이미지도 함께 제거
docker compose down -v --rmi all
```

## 문제 해결

### 포트가 이미 사용 중인 경우
```bash
# 포트를 사용하는 프로세스 확인
lsof -i :3000

# docker-compose.yml에서 포트 변경
ports:
  - "3001:3000"  # 호스트 포트 변경
```

### 이미지가 업데이트되지 않는 경우
```bash
# 캐시 없이 강제 빌드
docker compose build --no-cache
docker compose up -d
```

### 데이터베이스 연결 오류
```bash
# 환경 변수 확인
docker compose exec app env | grep DB_

# 컨테이너 재시작
docker compose restart
```

## 배포 체크리스트

- [ ] 코드 변경사항 커밋
- [ ] `.env` 파일 확인 (필요시)
- [ ] `docker compose up -d --build` 실행
- [ ] 로그에서 에러 확인
- [ ] `http://localhost:3000` 접속 테스트
- [ ] API 엔드포인트 테스트

