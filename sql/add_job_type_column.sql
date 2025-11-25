-- teacher_jobs 테이블에 job_type 컬럼 추가
-- 공고 타입: 'g' (정부 지원금 공고), 't' (교사 채용 공고)

-- 1. job_type 컬럼 추가
ALTER TABLE `teacher_jobs` 
ADD COLUMN `job_type` ENUM('g', 't') DEFAULT 't' 
AFTER `school`;

-- 2. 인덱스 추가 (필터링 성능 향상)
ALTER TABLE `teacher_jobs` 
ADD INDEX `idx_job_type` (`job_type`);

-- 3. 기존 데이터 마이그레이션 (선택사항)
-- 기존 데이터는 기본값 't'로 설정됨
-- 필요시 수동으로 업데이트:
-- UPDATE `teacher_jobs` SET `job_type` = 'g' WHERE [조건];

-- 4. 컬럼 설명 추가
ALTER TABLE `teacher_jobs` 
MODIFY COLUMN `job_type` ENUM('g', 't') 
DEFAULT 't' 
COMMENT '공고 타입: g(정부 지원금 공고), t(교사 채용 공고)';

