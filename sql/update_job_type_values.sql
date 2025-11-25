-- 기존 job_type 값을 짧은 값으로 변경하는 마이그레이션 스크립트
-- 이미 'government_support', 'teacher_recruitment' 값이 있는 경우 사용

-- 1. ENUM 타입 변경
ALTER TABLE `teacher_jobs` 
MODIFY COLUMN `job_type` ENUM('g', 't') DEFAULT 't';

-- 2. 기존 데이터 값 변경
UPDATE `teacher_jobs` 
SET `job_type` = 'g' 
WHERE `job_type` = 'government_support';

UPDATE `teacher_jobs` 
SET `job_type` = 't' 
WHERE `job_type` = 'teacher_recruitment';

-- 3. 컬럼 설명 업데이트
ALTER TABLE `teacher_jobs` 
MODIFY COLUMN `job_type` ENUM('g', 't') 
DEFAULT 't' 
COMMENT '공고 타입: g(정부 지원금 공고), t(교사 채용 공고)';

