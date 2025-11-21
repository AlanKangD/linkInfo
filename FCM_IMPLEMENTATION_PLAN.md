# FCM 기능 구현 계획서

## 1. 데이터베이스 테이블 설계

### 1.1 fcm_tokens 테이블
FCM 토큰을 저장하는 메인 테이블입니다.

```sql
CREATE TABLE `fcm_tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL COMMENT 'FCM 토큰',
  `platform` enum('android','ios','web') NOT NULL DEFAULT 'android' COMMENT '플랫폼',
  `device_id` varchar(255) DEFAULT NULL COMMENT '디바이스 고유 ID (선택사항)',
  `user_id` varchar(100) DEFAULT NULL COMMENT '사용자 ID (선택사항)',
  `is_active` tinyint(1) NOT NULL DEFAULT 1 COMMENT '활성 상태 (1:활성, 0:비활성)',
  `last_used_at` datetime DEFAULT NULL COMMENT '마지막 사용 시간',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_token` (`token`),
  KEY `idx_platform` (`platform`),
  KEY `idx_user_id` (`user_id`),
  KEY `idx_is_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
```

**설계 고려사항:**
- `token`은 UNIQUE 제약조건으로 중복 저장 방지
- `platform`으로 안드로이드/iOS/웹 구분
- `is_active`로 토큰 활성화 상태 관리
- `last_used_at`로 최근 사용 토큰 추적

### 1.2 push_notifications 테이블 (선택사항)
푸시 알림 전송 이력을 저장하는 테이블입니다.

```sql
CREATE TABLE `push_notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token_id` int(11) NOT NULL COMMENT 'fcm_tokens 테이블의 id',
  `title` varchar(255) NOT NULL COMMENT '알림 제목',
  `body` text NOT NULL COMMENT '알림 내용',
  `data` json DEFAULT NULL COMMENT '커스텀 데이터 (JSON)',
  `status` enum('pending','sent','failed') NOT NULL DEFAULT 'pending' COMMENT '전송 상태',
  `fcm_message_id` varchar(255) DEFAULT NULL COMMENT 'FCM에서 반환한 메시지 ID',
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

**설계 고려사항:**
- 전송 이력 추적 및 재전송 기능
- 에러 로깅
- JSON 타입으로 커스텀 데이터 저장

## 2. API 엔드포인트 설계

### 2.1 POST /api/fcm/token
FCM 토큰을 저장하거나 업데이트합니다.

**Request Body:**
```json
{
  "token": "FCM_TOKEN_STRING",
  "platform": "android" | "ios" | "web",
  "device_id": "DEVICE_ID (선택사항)",
  "user_id": "USER_ID (선택사항)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Token saved successfully",
  "data": {
    "id": 1,
    "token": "FCM_TOKEN_STRING",
    "platform": "android",
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}
```

### 2.2 GET /api/fcm/tokens
저장된 FCM 토큰 목록을 조회합니다.

**Query Parameters:**
- `platform`: 플랫폼 필터 (android, ios, web)
- `is_active`: 활성 상태 필터 (1, 0)
- `limit`: 페이지당 개수 (기본값: 100)
- `offset`: 오프셋 (기본값: 0)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "token": "FCM_TOKEN_STRING",
      "platform": "android",
      "is_active": 1,
      "last_used_at": "2024-01-01T00:00:00.000Z",
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  ],
  "total": 100
}
```

### 2.3 POST /api/fcm/send
푸시 알림을 전송합니다.

**Request Body:**
```json
{
  "token": "FCM_TOKEN_STRING" | ["TOKEN1", "TOKEN2"],  // 단일 또는 배열
  "title": "알림 제목",
  "body": "알림 내용",
  "data": {
    "url": "/jobs/123",
    "job_id": 123,
    "custom_key": "custom_value"
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Notification sent successfully",
  "data": {
    "message_id": "FCM_MESSAGE_ID",
    "sent_count": 1
  }
}
```

### 2.4 DELETE /api/fcm/token/:id
FCM 토큰을 삭제합니다.

**Response:**
```json
{
  "success": true,
  "message": "Token deleted successfully"
}
```

## 3. 구현 순서

### Phase 1: 데이터베이스 설정
1. ✅ 테이블 생성 SQL 작성
2. ✅ 테이블 생성 및 인덱스 확인

### Phase 2: Firebase Admin SDK 설정
1. Firebase 프로젝트에서 서비스 계정 키 다운로드
2. `firebase-admin` 패키지 설치
3. Firebase 초기화 유틸리티 생성

### Phase 3: API 엔드포인트 구현
1. POST /api/fcm/token 구현
2. GET /api/fcm/tokens 구현
3. POST /api/fcm/send 구현
4. DELETE /api/fcm/token/:id 구현

### Phase 4: 클라이언트 사이드 구현
1. `window.onFCMTokenReceived` 함수 구현
2. `window.onFCMMessageReceived` 함수 구현
3. 토큰 자동 전송 로직 구현

### Phase 5: 테스트 및 최적화
1. 단위 테스트
2. 통합 테스트
3. 에러 처리 개선
4. 성능 최적화

## 4. 필요한 패키지

```json
{
  "firebase-admin": "^12.0.0"
}
```

## 5. 환경 변수 설정

`.env.local` 파일에 추가:
```env
# Firebase Admin SDK
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
```

또는 서비스 계정 키 파일 경로:
```env
FIREBASE_SERVICE_ACCOUNT_KEY_PATH=./config/firebase-service-account.json
```

## 6. 보안 고려사항

1. **토큰 검증**: 토큰 형식 검증
2. **Rate Limiting**: API 호출 제한
3. **인증**: 필요시 JWT 토큰 검증 추가
4. **서비스 계정 키**: 절대 Git에 커밋하지 않기
5. **HTTPS**: 프로덕션에서는 HTTPS 필수

## 7. 에러 처리

- 토큰 형식 오류
- Firebase 연결 실패
- 데이터베이스 연결 실패
- 중복 토큰 처리
- 만료된 토큰 처리

## 8. 성능 최적화

1. **토큰 캐싱**: 자주 사용하는 토큰 메모리 캐싱
2. **배치 전송**: 여러 토큰을 한 번에 전송
3. **비동기 처리**: 푸시 알림 전송을 큐로 처리
4. **인덱스 최적화**: 데이터베이스 쿼리 성능 향상

