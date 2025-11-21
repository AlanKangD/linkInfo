# 신규 공고 알림 자동 전송 설계

## 1. 신규 공고 감지 방법

### 방법 1: Polling (주기적 조회) ⭐ 권장
**장점:**
- 구현 간단
- 외부 시스템 의존 없음
- 안정적

**단점:**
- 실시간성 낮음 (지연 발생)
- DB 부하 (주기적 쿼리)

**구현:**
- Cron Job 또는 Next.js API Route + setInterval
- 주기: 5분 ~ 15분 간격
- 마지막 확인 시간 이후 생성된 공고 조회

### 방법 2: DB Trigger + Webhook
**장점:**
- 실시간 감지
- DB 레벨에서 처리

**단점:**
- MySQL Trigger에서 HTTP 호출 복잡
- 외부 서비스 필요 (예: Zapier, n8n)

**구현:**
- MySQL Trigger → 외부 Webhook 서비스 → API 호출

### 방법 3: 애플리케이션 레벨 (INSERT 후 처리)
**장점:**
- 즉시 처리
- 구현 간단

**단점:**
- 공고 등록 로직이 이 애플리케이션에 있어야 함
- 외부에서 직접 DB에 INSERT하면 감지 불가

**구현:**
- 공고 등록 API에서 INSERT 후 알림 전송

### 방법 4: Database Change Stream (MySQL 8.0+)
**장점:**
- 실시간 감지
- 효율적

**단점:**
- MySQL 8.0 이상 필요
- 복잡한 설정

## 2. 권장 설계: Polling 방식

### 아키텍처

```
[Cron Job / Scheduled Task]
    ↓ (주기적 실행, 예: 5분마다)
[신규 공고 조회 API]
    ↓ (마지막 확인 시간 이후 공고)
[신규 공고 감지]
    ↓
[활성 FCM 토큰 조회]
    ↓
[배치 알림 전송]
    ↓
[전송 이력 저장]
```

### 데이터베이스 설계

#### 2.1 알림 전송 이력 테이블 (선택사항)

```sql
CREATE TABLE `job_notification_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_id` int(11) NOT NULL COMMENT 'teacher_jobs 테이블의 id',
  `data_sid` varchar(20) NOT NULL COMMENT '공고 고유 ID',
  `notification_sent_at` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '알림 전송 시간',
  `total_tokens` int(11) DEFAULT 0 COMMENT '전송 대상 토큰 수',
  `success_count` int(11) DEFAULT 0 COMMENT '성공 건수',
  `fail_count` int(11) DEFAULT 0 COMMENT '실패 건수',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_job_notification` (`job_id`, `data_sid`),
  KEY `idx_notification_sent_at` (`notification_sent_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

**용도:**
- 중복 알림 방지
- 전송 이력 추적
- 통계 수집

#### 2.2 마지막 확인 시간 저장

**옵션 1: 환경 변수 / 설정 파일**
- 간단하지만 서버 재시작 시 초기화

**옵션 2: DB 테이블**
```sql
CREATE TABLE `notification_checkpoints` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `last_check_time` datetime NOT NULL COMMENT '마지막 확인 시간',
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 초기값 설정
INSERT INTO notification_checkpoints (last_check_time) VALUES (NOW() - INTERVAL 1 DAY);
```

**옵션 3: Redis / 캐시**
- 빠르지만 영구 저장 안됨

## 3. 구현 설계

### 3.1 API 엔드포인트: `/api/jobs/check-new`

```typescript
// GET /api/jobs/check-new
// 마지막 확인 시간 이후 신규 공고 조회

// POST /api/jobs/notify-new
// 신규 공고 알림 전송 (내부 호출용)
```

### 3.2 Cron Job / Scheduled Task

**옵션 1: Next.js API Route + 외부 Cron 서비스**
- Vercel Cron Jobs
- GitHub Actions (Scheduled)
- 외부 Cron 서비스 (cron-job.org 등)

**옵션 2: 서버 내부 Cron**
- Linux crontab
- node-cron 패키지

**옵션 3: 별도 Worker 서비스**
- 독립적인 Node.js 서비스
- Docker 컨테이너로 실행

### 3.3 알림 전송 로직

```typescript
// 의사코드
1. 마지막 확인 시간 조회
2. 해당 시간 이후 생성된 공고 조회
   SELECT * FROM teacher_jobs 
   WHERE created_at > last_check_time
   ORDER BY created_at DESC

3. 각 신규 공고에 대해:
   - 이미 알림을 보냈는지 확인 (job_notification_logs)
   - 보내지 않았다면:
     a. 활성 FCM 토큰 조회
     b. 알림 메시지 생성
     c. 배치 전송 (100개씩)
     d. 전송 이력 저장

4. 마지막 확인 시간 업데이트
```

## 4. 알림 메시지 설계

### 4.1 메시지 형식

```json
{
  "title": "새로운 채용 공고",
  "body": "[초등학교명] 교사 채용 공고가 등록되었습니다",
  "data": {
    "type": "new_job",
    "job_id": "123",
    "data_sid": "20240101001",
    "url": "/jobs",
    "school": "서울초등학교",
    "title": "초등학교 교사 채용"
  }
}
```

### 4.2 메시지 템플릿

**단일 공고:**
```
제목: 새로운 채용 공고
내용: [학교명] 교사 채용 공고가 등록되었습니다
```

**다중 공고 (한 번에 여러 개):**
```
제목: 새로운 채용 공고 3건
내용: 오늘 3개의 새로운 채용 공고가 등록되었습니다
```

## 5. 성능 최적화

### 5.1 배치 전송
- FCM은 한 번에 최대 500개 토큰 전송 가능
- 100개씩 나누어 전송 권장
- 실패 시 재시도 로직

### 5.2 비동기 처리
- 알림 전송은 비동기로 처리
- 큐 시스템 사용 (선택사항)
  - Bull (Redis 기반)
  - RabbitMQ
  - AWS SQS

### 5.3 토큰 필터링
- 활성 토큰만 조회 (`is_active = 1`)
- 최근 사용한 토큰 우선
- 플랫폼별 필터링 (선택사항)

## 6. 에러 처리 및 재시도

### 6.1 실패한 토큰 처리
- 만료된 토큰 자동 비활성화
- 실패 이력 저장
- 재시도 로직 (최대 3회)

### 6.2 알림 전송 실패 시
- 로그 기록
- 관리자 알림 (선택사항)
- 다음 주기에서 재시도

## 7. 중복 방지 전략

### 7.1 공고별 알림 이력
- `job_notification_logs` 테이블로 중복 방지
- `job_id` 또는 `data_sid` 기준으로 UNIQUE 제약

### 7.2 시간 기반 필터
- 같은 공고에 대해 일정 시간 내 중복 전송 방지
- 예: 24시간 내 동일 공고 알림 금지

## 8. 모니터링 및 통계

### 8.1 전송 통계
- 일일 전송 건수
- 성공/실패율
- 토큰별 전송 이력

### 8.2 알림 로그
- 전송 시간
- 공고 정보
- 전송 결과

## 9. 구현 우선순위

### Phase 1: 기본 기능
1. ✅ 마지막 확인 시간 저장 (DB 테이블)
2. ✅ 신규 공고 조회 API
3. ✅ 알림 전송 로직
4. ✅ 중복 방지 (job_notification_logs)

### Phase 2: 최적화
1. 배치 전송
2. 비동기 처리
3. 에러 처리 개선

### Phase 3: 고급 기능
1. 사용자별 알림 설정 (구독/해제)
2. 공고 카테고리별 필터링
3. 통계 대시보드

## 10. 보안 고려사항

1. **API 인증**
   - Cron Job 호출 시 인증 토큰 사용
   - 내부 API는 외부 접근 차단

2. **Rate Limiting**
   - 알림 전송 빈도 제한
   - 일일 전송 한도 설정

3. **스팸 방지**
   - 사용자별 알림 빈도 제한
   - 중복 알림 방지

## 11. 테스트 전략

1. **단위 테스트**
   - 신규 공고 감지 로직
   - 알림 메시지 생성

2. **통합 테스트**
   - 전체 플로우 테스트
   - 실패 케이스 처리

3. **부하 테스트**
   - 대량 토큰 전송 테스트
   - 성능 측정

