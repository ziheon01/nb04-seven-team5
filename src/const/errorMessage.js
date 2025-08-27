export const ERROR = {
  INVALID_INPUT: '유효하지 않은 입력입니다.', 
  WRONG_PASSWORD: '비밀번호가 틀립니다.',
  OWNER_WRONG_PASSWORD: '그룹 소유주의 비밀번호가 틀립니다.',
  ALREADY_LIKED: '이미 추천했습니다.',
  ALREADY_USED_NICKNAME: '이미 사용 중인 닉네임입니다.',
  ALL_FILEDS_ARE_REQUIRED: '모든 필수 항목을 입력해주세요.',
  SERVER_ERROR: '서버 오류로 실패했습니다.',
  INVALID_TYPE: (fieldName) => ` ${fieldName}의 타입이 유효하지 않습니다.`,
  NOT_FOUND: (fieldName) => `${fieldName}을 찾을 수 없습니다.`,
  CREATION_FAILED: (fieldName) => `${fieldName} 생성에 실패했습니다.`,
  MUST_BE_INT: (fieldName) => `${fieldName}은 정수여야 합니다.`,
  FETCH_FAILED: (fieldName) => `${fieldName}을 가져오는데 실패했습니다.`,
  DELETION_FAILED: (fieldName) => `${fieldName}을 취소하는데 실패했습니다.`,
  UPDATE_FAILED: (fieldName) => `${fieldName}을 수정하는데 실패했습니다.`,

}

// GroupController.js 47-55, 오류 메세지..
// rankCOntroller.js  32

//페이지네이션 관련.. 