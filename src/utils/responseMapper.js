// src/utils/responseMapper.js

/**
 * [User/Participant 매퍼]
 * - DB의 snake_case나 불필요한 정보를 정리하여 프론트엔드 규격(Participant)으로 변환
 */
export const toUserResponse = (user) => {
  if (!user) return null;
  return {
    id: user.id,
    nickname: user.nickname,
    profileUrl: user.profileUrl || "", // 없으면 빈 문자열
    // 비밀번호 등 민감 정보는 절대 보내지 않음
  };
};

/**
 * [Group 매퍼]
 * - groupName -> name
 * - 태그 객체 배열 -> 문자열 배열
 * - _count -> recordCount 평탄화
 */
export const toGroupResponse = (group) => {
  if (!group) return null;

  // Prisma에서 _count로 가져온 경우 처리
  const recordCount = group._count ? group._count.exerciseRecord : (group.recordCount || 0);

  return {
    id: group.id,
    name: group.groupName || group.name, // 핵심: 변수명 변환
    description: group.description,
    photoUrl: group.photoUrl,
    goalRep: group.goalRep,
    likeCount: group.likeCount || 0,
    recordCount: recordCount, 
    // tags: [{tagName: "A"}] -> ["A"] 로 변환
    tags: group.tag ? group.tag.map(t => t.tagName) : [],
    owner: toUserResponse(group.owner),
    // 참여자 목록이 있는 경우에만 변환
    participants: group.participant ? group.participant.map(p => toUserResponse(p)) : [],
    
    // 상세 조회 시 필요한 추가 정보들
    discordWebhookUrl: group.discordWebhookUrl,
    discordInviteUrl: group.discordInviteUrl,
  };
};

/**
 * [Record 매퍼]
 * - participant -> author
 * - participantPhoto 객체 배열 -> photos 문자열 배열 (가장 중요!)
 */
export const toRecordResponse = (record) => {
  if (!record) return null;

  return {
    id: record.id,
    exerciseType: record.exerciseType, // 달리기, 수영 등
    description: record.description,
    time: record.time,
    distance: record.distance,
    createdAt: record.createdAt,
    
    // 핵심 1: 작성자 정보 매핑
    author: toUserResponse(record.participant),

    // 핵심 2: 사진 배열 변환 ([{photoUrl: 'a'}] -> ['a'])
    photos: record.participantPhoto 
      ? record.participantPhoto.map(p => p.photoUrl) 
      : [],
  };
};

/**
 * [Rank 매퍼]
 * - id -> participantId
 */
export const toRankResponse = (rank) => {
  if (!rank) return null;
  
  return {
    participantId: rank.id, // 프론트는 participantId를 원함
    nickname: rank.nickname,
    recordCount: Number(rank.recordCount), // BigInt일 경우 숫자 변환
    recordTime: Number(rank.recordTime),
  };
};