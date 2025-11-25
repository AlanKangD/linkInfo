# 공고 타입 필드 추가 마이그레이션 가이드

## 개요
`teacher_jobs` 테이블에 `job_type` 필드를 추가하여 "정부 지원금 공고"와 "교사 채용 공고"를 구분할 수 있도록 합니다.

## 1. 데이터베이스 마이그레이션

### SQL 스크립트 실행
```bash
mysql -u [사용자명] -p [데이터베이스명] < sql/add_job_type_column.sql
```

또는 MySQL 클라이언트에서 직접 실행:
```sql
-- sql/add_job_type_column.sql 파일의 내용 실행
```

### 마이그레이션 내용
- `job_type` ENUM 컬럼 추가
  - `g`: 정부 지원금 공고
  - `t`: 교사 채용 공고 (기본값)
- 인덱스 추가 (`idx_job_type`)
- 기존 데이터는 기본값 `t`로 설정됨

### 기존 데이터 업데이트 (선택사항)
기존 데이터를 특정 타입으로 변경하려면:
```sql
-- 예시: 특정 조건의 공고를 정부 지원금 공고로 변경
UPDATE `teacher_jobs` 
SET `job_type` = 'g' 
WHERE [조건];
```

### 기존 값이 있는 경우 마이그레이션
이미 `government_support`, `teacher_recruitment` 값이 있는 경우:
```bash
mysql -u [사용자명] -p [데이터베이스명] < sql/update_job_type_values.sql
```

## 2. 코드 변경 사항

### 2.1 TypeScript 타입 정의
- `components/job-card.tsx`: `TeacherJob` 인터페이스에 `job_type` 필드 추가
- `JobType` 타입 정의: `'g' | 't'`

### 2.2 API 라우트
- `app/api/jobs/route.ts`: 
  - `job_type` 필드 SELECT 추가
  - 쿼리 파라미터로 `job_type` 필터링 지원
  - 예: `/api/jobs?job_type=g` (정부 지원금 공고)
  - 예: `/api/jobs?job_type=t` (교사 채용 공고)

### 2.3 프론트엔드
- `components/jobs-screen.tsx`:
  - 카테고리 선택 시 API에 `job_type` 파라미터 전달
  - "전체" → 필터 없음
  - "정부 지원금 공고" → `job_type=g`
  - "교사 채용 공고" → `job_type=t`

## 3. 배포 순서

### 개발 환경
1. SQL 마이그레이션 실행
2. 코드 배포
3. 테스트

### 운영 환경
1. **백업**: 데이터베이스 백업 필수
2. SQL 마이그레이션 실행
3. 코드 배포
4. 기존 데이터 확인 및 필요시 업데이트

## 4. 검증

### 데이터베이스 확인
```sql
-- 컬럼 확인
DESCRIBE teacher_jobs;

-- 데이터 확인
SELECT job_type, COUNT(*) as count 
FROM teacher_jobs 
GROUP BY job_type;
```

### API 테스트
```bash
# 전체 공고
curl http://localhost:3000/api/jobs

# 정부 지원금 공고만
curl http://localhost:3000/api/jobs?job_type=g

# 교사 채용 공고만
curl http://localhost:3000/api/jobs?job_type=t
```

### 프론트엔드 테스트
1. 홈 화면에서 카테고리 필터 클릭
2. "정부 지원금 공고" 선택 시 해당 타입만 표시되는지 확인
3. "교사 채용 공고" 선택 시 해당 타입만 표시되는지 확인
4. "전체" 선택 시 모든 공고가 표시되는지 확인

## 5. 롤백 계획

문제 발생 시 롤백:
```sql
-- 컬럼 제거
ALTER TABLE `teacher_jobs` DROP COLUMN `job_type`;
ALTER TABLE `teacher_jobs` DROP INDEX `idx_job_type`;
```

그 후 이전 버전의 코드로 배포.

## 6. 주의사항

1. **기존 데이터**: 모든 기존 데이터는 `t`로 설정됩니다. 필요시 수동으로 업데이트해야 합니다.
2. **NULL 값**: `job_type`은 NOT NULL이므로 항상 값이 있어야 합니다.
3. **인덱스**: 필터링 성능 향상을 위해 인덱스를 추가했습니다.
4. **API 호환성**: 기존 API 호출은 계속 작동하지만, `job_type` 필드가 포함됩니다.
5. **값 변경**: `job_type` 값은 짧은 형식(`g`, `t`)을 사용합니다.

## 7. 향후 확장

추가 공고 타입이 필요한 경우:
1. ENUM 값 추가: `ALTER TABLE teacher_jobs MODIFY COLUMN job_type ENUM('g', 't', 'n')`
2. TypeScript 타입 업데이트: `export type JobType = 'g' | 't' | 'n'`
3. 프론트엔드 카테고리 추가

