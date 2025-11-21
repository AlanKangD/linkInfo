#!/bin/bash

echo "🔍 환경 변수 확인 중..."
echo ""

echo "=== Docker Compose 환경 변수 ==="
docker compose config | grep -A 20 "environment:"

echo ""
echo "=== 실행 중인 컨테이너 환경 변수 ==="
docker compose exec app env | grep -E "(FIREBASE|DB_)" || echo "컨테이너가 실행 중이지 않습니다."

echo ""
echo "=== .env 파일 확인 ==="
if [ -f .env ]; then
  echo ".env 파일이 존재합니다."
  echo "Firebase 관련 설정:"
  grep -E "FIREBASE" .env || echo "Firebase 설정이 없습니다."
else
  echo ".env 파일이 없습니다."
fi

