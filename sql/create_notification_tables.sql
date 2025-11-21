-- 신규 공고 알림을 위한 테이블 생성

-- 1. 마지막 확인 시간 저장 테이블
CREATE TABLE IF NOT EXISTS `notification_checkpoints` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `last_check_time` datetime NOT NULL COMMENT '마지막 확인 시간',
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 초기값 설정 (24시간 전)
INSERT INTO notification_checkpoints (last_check_time) 
VALUES (NOW() - INTERVAL 1 DAY)
ON DUPLICATE KEY UPDATE last_check_time = last_check_time;

-- 2. 알림 전송 이력 테이블
CREATE TABLE IF NOT EXISTS `job_notification_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_id` int(11) NOT NULL COMMENT 'teacher_jobs 테이블의 id',
  `data_sid` varchar(20) NOT NULL COMMENT '공고 고유 ID',
  `notification_sent_at` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '알림 전송 시간',
  `total_tokens` int(11) DEFAULT 0 COMMENT '전송 대상 토큰 수',
  `success_count` int(11) DEFAULT 0 COMMENT '성공 건수',
  `fail_count` int(11) DEFAULT 0 COMMENT '실패 건수',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_job_notification` (`job_id`, `data_sid`),
  KEY `idx_notification_sent_at` (`notification_sent_at`),
  KEY `idx_job_id` (`job_id`),
  KEY `idx_data_sid` (`data_sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

