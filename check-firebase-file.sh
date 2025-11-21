#!/bin/bash

echo "🔍 Firebase 서비스 계정 키 파일 확인"
echo ""

echo "=== 로컬 파일 확인 ==="
if [ -f "config/firebase-service-account.json" ]; then
  echo "✅ 로컬 파일 존재: config/firebase-service-account.json"
  ls -lh config/firebase-service-account.json
else
  echo "❌ 로컬 파일 없음: config/firebase-service-account.json"
fi

echo ""
echo "=== Docker 컨테이너 내부 확인 ==="
if docker compose ps | grep -q "Up"; then
  echo "컨테이너 내부 파일 확인:"
  docker compose exec app ls -la /app/config/ 2>/dev/null || echo "❌ /app/config/ 디렉토리 없음"
  
  echo ""
  echo "환경 변수 확인:"
  docker compose exec app env | grep FIREBASE || echo "❌ FIREBASE 환경 변수 없음"
  
  echo ""
  echo "파일 내용 확인 (처음 3줄):"
  docker compose exec app head -3 /app/config/firebase-service-account.json 2>/dev/null || echo "❌ 파일 읽기 실패"
else
  echo "❌ 컨테이너가 실행 중이지 않습니다"
fi

echo ""
echo "=== docker-compose.yml 볼륨 설정 확인 ==="
docker compose config | grep -A 2 "volumes:" || echo "볼륨 설정 없음"

