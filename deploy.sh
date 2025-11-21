#!/bin/bash

# Docker 배포 스크립트

echo "🚀 Docker 배포 시작..."

# 기존 컨테이너 중지 및 제거
echo "📦 기존 컨테이너 중지 중..."
docker compose down

# 새 이미지 빌드 및 실행
echo "🔨 이미지 빌드 중..."
docker compose up -d --build

# 로그 확인
echo "📋 컨테이너 상태 확인..."
docker compose ps

echo ""
echo "✅ 배포 완료!"
echo "📊 로그 확인: docker compose logs -f app"
echo "🌐 접속: http://localhost:3000"

