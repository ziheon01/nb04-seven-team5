// src/utils/responseMapper.js

/**
 * [User/Participant 매퍼]
 */
export const toUserResponse = (user) => {
  if (!user) return null;
  return {
    id: user.id,
    nickname: user.nickname,
    profileUrl: user.profileUrl || "", 
  };
};

/**
 * [Group 매퍼]
 */
export const toGroupResponse = (group) => {
  if (!group) return null;

  const recordCount = group._count ? group._count.exerciseRecord : (group.recordCount || 0);

  const badges = [];
  if (group.groupBadge) {
    if (group.groupBadge.participantsOver10) badges.push("participantsOver10");
    if (group.groupBadge.recordsOver100) badges.push("recordsOver100");
    if (group.groupBadge.recommandationsOver100) badges.push("recommandationsOver100");
  }

  return {
    id: group.id,
    name: group.groupName || group.name, 
    description: group.description,
    photoUrl: group.photoUrl,
    goalRep: group.goalRep,
    likeCount: group.likeCount || 0,
    recordCount: recordCount, 
    tags: group.tag ? group.tag.map(t => t.tagName) : [],
    badges: badges, 
    owner: {
      id: 0, 
      nickname: group.ownerNickname, // DB에 있는 닉네임 문자열을 바로 꽂아줌
      profileUrl: "", 
    },

    participants: group.participant ? group.participant.map(p => toUserResponse(p)) : [],
    discordWebhookUrl: group.discordWebhookUrl,
    discordInviteUrl: group.discordInviteUrl,
  };
};

/**
 * [Record 매퍼]
 */
export const toRecordResponse = (record) => {
  if (!record) return null;

  return {
    id: record.id,
    exerciseType: record.exerciseType,
    description: record.description,
    time: record.time,
    distance: record.distance,
    createdAt: record.createdAt,
    author: record.participant ? toUserResponse(record.participant) : null,
    photos: record.participantPhoto ? record.participantPhoto.map(p => p.photoUrl) : [],
  };
};

/**
 * [Rank 매퍼]
 */
export const toRankResponse = (rank) => {
  if (!rank) return null;
  
  return {
    participantId: rank.id, 
    nickname: rank.nickname,
    recordCount: Number(rank.recordCount), 
    recordTime: Number(rank.recordTime),
  };
};