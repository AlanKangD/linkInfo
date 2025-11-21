# FCM 기능 설정 가이드

## 1. Firebase 프로젝트 설정

### 1.1 Firebase 콘솔에서 서비스 계정 키 다운로드

1. [Firebase Console](https://console.firebase.google.com/) 접속
2. 프로젝트 선택
3. 프로젝트 설정 > 서비스 계정 탭
4. "새 비공개 키 생성" 클릭
5. JSON 파일 다운로드

### 1.2 서비스 계정 키 파일 배치

프로젝트 루트에 `config` 디렉토리를 생성하고 파일을 저장:

```bash
mkdir -p config
# 다운로드한 JSON 파일을 config/firebase-service-account.json으로 복사
```

**⚠️ 중요:** `config/firebase-service-account.json` 파일은 절대 Git에 커밋하지 마세요!

`.gitignore`에 추가되어 있는지 확인:
```
config/firebase-service-account.json
```

### 1.3 환경 변수 설정

`.env.local` 파일에 다음 중 하나를 추가:

**방법 1: 파일 경로 사용 (권장)**
```env
FIREBASE_SERVICE_ACCOUNT_KEY_PATH=./config/firebase-service-account.json
```

**방법 2: 환경 변수로 직접 설정**
```env
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
```

## 2. 데이터베이스 테이블 생성

이미 테이블이 생성되어 있다고 하셨지만, 참고용으로 SQL을 제공합니다:

```sql
-- fcm_tokens 테이블
CREATE TABLE IF NOT EXISTS `fcm_tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL COMMENT 'FCM 토큰',
  `platform` enum('android','ios','web') NOT NULL DEFAULT 'android' COMMENT '플랫폼',
  `device_id` varchar(255) DEFAULT NULL COMMENT '디바이스 고유 ID',
  `user_id` varchar(100) DEFAULT NULL COMMENT '사용자 ID (테스트용: kno12350 형식)',
  `is_active` tinyint(1) NOT NULL DEFAULT 1 COMMENT '활성 상태',
  `last_used_at` datetime DEFAULT NULL COMMENT '마지막 사용 시간',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_token` (`token`),
  KEY `idx_platform` (`platform`),
  KEY `idx_user_id` (`user_id`),
  KEY `idx_is_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- push_notifications 테이블 (선택사항)
CREATE TABLE IF NOT EXISTS `push_notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token_id` int(11) NOT NULL COMMENT 'fcm_tokens 테이블의 id',
  `title` varchar(255) NOT NULL COMMENT '알림 제목',
  `body` text NOT NULL COMMENT '알림 내용',
  `data` json DEFAULT NULL COMMENT '커스텀 데이터',
  `status` enum('pending','sent','failed') NOT NULL DEFAULT 'pending' COMMENT '전송 상태',
  `fcm_message_id` varchar(255) DEFAULT NULL COMMENT 'FCM 메시지 ID',
  `error_message` text DEFAULT NULL COMMENT '에러 메시지',
  `sent_at` datetime DEFAULT NULL COMMENT '전송 시간',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_token_id` (`token_id`),
  KEY `idx_status` (`status`),
  KEY `idx_created_at` (`created_at`),
  FOREIGN KEY (`token_id`) REFERENCES `fcm_tokens`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
```

## 3. API 엔드포인트 사용법

### 3.1 FCM 토큰 저장

```bash
curl -X POST http://localhost:3000/api/fcm/token \
  -H "Content-Type: application/json" \
  -d '{
    "token": "FCM_TOKEN_HERE",
    "platform": "android"
  }'
```

**응답:**
```json
{
  "success": true,
  "message": "토큰이 저장되었습니다.",
  "data": {
    "id": 1,
    "token": "FCM_TOKEN_HERE",
    "platform": "android",
    "user_id": "kno12350",
    "is_active": 1,
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}
```

### 3.2 FCM 토큰 목록 조회

```bash
# 전체 조회
curl http://localhost:3000/api/fcm/tokens

# 플랫폼별 필터
curl http://localhost:3000/api/fcm/tokens?platform=android

# 활성 토큰만 조회
curl http://localhost:3000/api/fcm/tokens?is_active=1
```

### 3.3 푸시 알림 전송

```bash
curl -X POST http://localhost:3000/api/fcm/send \
  -H "Content-Type: application/json" \
  -d '{
    "token": "FCM_TOKEN_HERE",
    "title": "새로운 채용 공고",
    "body": "초등학교 교사 채용 공고가 등록되었습니다.",
    "data": {
      "url": "/jobs",
      "job_id": "123"
    }
  }'
```

**여러 토큰에 동시 전송:**
```json
{
  "token": ["TOKEN1", "TOKEN2", "TOKEN3"],
  "title": "공지사항",
  "body": "새로운 공지사항이 있습니다."
}
```

### 3.4 FCM 토큰 삭제

```bash
curl -X DELETE http://localhost:3000/api/fcm/token/1
```

## 4. 클라이언트 사이드 사용

웹 페이지가 로드되면 자동으로 FCM 함수들이 등록됩니다:

```javascript
// Flutter에서 호출
window.onFCMTokenReceived('FCM_TOKEN_HERE')
window.onFCMMessageReceived({
  title: '알림 제목',
  body: '알림 내용',
  data: { url: '/jobs/123' }
})
```

## 5. 테스트 방법

### 5.1 토큰 저장 테스트

브라우저 콘솔에서:
```javascript
// 테스트용 토큰 저장
fetch('/api/fcm/token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    token: 'test_token_' + Date.now(),
    platform: 'android'
  })
})
.then(r => r.json())
.then(console.log)
```

### 5.2 푸시 알림 전송 테스트

```javascript
// 저장된 토큰으로 테스트 전송
fetch('/api/fcm/send', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    token: 'YOUR_FCM_TOKEN',
    title: '테스트 알림',
    body: '이것은 테스트 메시지입니다.',
    data: { url: '/jobs' }
  })
})
.then(r => r.json())
.then(console.log)
```

## 6. user_id 자동 생성

현재 구현에서는 `user_id`가 제공되지 않으면 자동으로 `kno` + 5자리 숫자 형식으로 생성됩니다:
- 예: `kno12350`, `kno45678`, `kno99999`

이 기능은 `lib/user-id-generator.ts`에서 구현되어 있습니다.

## 7. 주의사항

1. **Firebase 서비스 계정 키**: 절대 Git에 커밋하지 마세요
2. **환경 변수**: 프로덕션에서는 환경 변수로 관리하세요
3. **토큰 보안**: FCM 토큰은 민감한 정보이므로 HTTPS를 사용하세요
4. **에러 처리**: 만료된 토큰은 자동으로 비활성화됩니다

