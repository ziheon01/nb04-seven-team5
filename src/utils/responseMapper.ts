// src/utils/responseMapper.ts

/**
 * [User/Participant 매퍼]
 */
export const toUserResponse = (user: any) => {
  if (!user) return null;
  return {
    id: user.id,
    nickname: user.nickname,
    profileUrl: user.profileUrl || null, 
  };
};

/**
 * [Group 매퍼]
 */
export const toGroupResponse = (group: any) => {
  if (!group) return null;

  const recordCount = group._count ? group._count.exerciseRecord : (group.recordCount || 0);

  const badges = [];
  if (group.groupBadge) {
    if (group.groupBadge.participantsOver10) badges.push("PARTICIPATION_10");
    if (group.groupBadge.recordsOver100) badges.push("RECORD_100");
    if (group.groupBadge.recommandationsOver100) badges.push("LIKE_100");
  }

  return {
    id: group.id,
    name: group.groupName || group.name, 
    description: group.description,
    photoUrl: group.photoUrl,
    goalRep: group.goalRep,
    likeCount: group.likeCount || 0,
    recordCount: recordCount, 
    tags: group.tag ? group.tag.map((t: any) => t.tagName) : [],
    badges: badges, 
    owner: {
      id: 0, 
      nickname: group.ownerNickname, 
      profileUrl: null, 
    },

    participants: group.participant ? group.participant.map((p: any) => toUserResponse(p)) : [],
    discordWebhookUrl: group.discordWebhookUrl,
    discordInviteUrl: group.discordInviteUrl,
  };
};

/**
 * [Record 매퍼]
 */
export const toRecordResponse = (record: any) => {
  if (!record) return null;

  return {
    id: record.id,
    exerciseType: record.exerciseType,
    description: record.description,
    time: record.time,
    distance: record.distance,
    createdAt: record.createdAt,
    author: record.participant ? toUserResponse(record.participant) : null,
    photos: record.participantPhoto ? record.participantPhoto.map((p: any) => p.photoUrl) : [],
  };
};

/**
 * [Rank 매퍼]
 */
export const toRankResponse = (rank: any) => {
  if (!rank) return null;
  
  return {
    participantId: rank.id, 
    nickname: rank.nickname,
    recordCount: Number(rank.recordCount), 
    recordTime: Number(rank.recordTime),
  };
};