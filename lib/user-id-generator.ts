/**
 * 테스트용 user_id 생성기
 * 형식: kno + 5자리 숫자 (예: kno12350)
 */
export function generateUserId(): string {
  // 10000 ~ 99999 사이의 랜덤 숫자 생성
  const randomNum = Math.floor(Math.random() * 90000) + 10000
  return `kno${randomNum}`
}

/**
 * 기존 user_id가 있으면 반환, 없으면 새로 생성
 */
export function getOrGenerateUserId(existingUserId?: string | null): string {
  if (existingUserId) {
    return existingUserId
  }
  return generateUserId()
}

