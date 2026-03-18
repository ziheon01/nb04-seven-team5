import { Group, Participant, Tag, GroupBadge, ExerciseRecord, ParticipantPhoto } from '@prisma/client';
import { 
  UserResponseDto, 
  GroupResponseDto, 
  RecordResponseDto, 
  RankResponseDto 
} from '../types/dto.js';

/**
 * [User/Participant 매퍼]
 */
export const toUserResponse = (user: Participant | null): UserResponseDto | null => {
  if (!user) return null;
  return {
    id: user.id,
    nickname: user.nickname,
    profileUrl: (user as unknown as { profileUrl?: string }).profileUrl || null, // Participant 모델에 profileUrl이 없으므로 일단 타입 확장을 통해 처리
  };
};

type GroupWithRelations = Group & {
  tag?: Tag[];
  groupBadge?: GroupBadge | null;
  participant?: Participant[];
  _count?: {
    exerciseRecord: number;
  };
};

/**
 * [Group 매퍼]
 */
export const toGroupResponse = (group: GroupWithRelations | null): GroupResponseDto | null => {
  if (!group) return null;

  const recordCount = group._count ? group._count.exerciseRecord : 0;

  const badges: string[] = [];
  if (group.groupBadge) {
    if (group.groupBadge.participantsOver10) badges.push("PARTICIPATION_10");
    if (group.groupBadge.recordsOver100) badges.push("RECORD_100");
    if (group.groupBadge.recommandationsOver100) badges.push("LIKE_100");
  }

  return {
    id: group.id,
    name: group.groupName,
    description: group.description,
    photoUrl: group.photoUrl,
    goalRep: group.goalRep,
    likeCount: group.likeCount,
    recordCount: recordCount,
    tags: group.tag ? group.tag.map((t) => t.tagName) : [],
    badges: badges,
    owner: {
      id: 0,
      nickname: group.ownerNickname,
      profileUrl: null,
    },
    participants: group.participant ? group.participant.map((p) => toUserResponse(p)!).filter(Boolean) : [],
    discordWebhookUrl: group.discordWebhookUrl,
    discordInviteUrl: group.discordInviteUrl,
  };
};

type ExerciseRecordWithRelations = ExerciseRecord & {
  participant?: Participant | null;
  participantPhoto?: ParticipantPhoto[];
};

/**
 * [Record 매퍼]
 */
export const toRecordResponse = (record: ExerciseRecordWithRelations | null): RecordResponseDto | null => {
  if (!record) return null;

  return {
    id: record.id,
    exerciseType: record.exerciseType,
    description: record.description,
    time: record.time,
    distance: record.distance,
    createdAt: record.createdAt,
    author: record.participant ? toUserResponse(record.participant) : null,
    photos: record.participantPhoto ? record.participantPhoto.map((p) => p.photoUrl) : [],
  };
};

interface RankInput {
  id: number;
  nickname: string;
  recordCount: number;
  recordTime: number;
}

/**
 * [Rank 매퍼]
 */
export const toRankResponse = (rank: RankInput | null): RankResponseDto | null => {
  if (!rank) return null;
  
  return {
    participantId: rank.id,
    nickname: rank.nickname,
    recordCount: Number(rank.recordCount),
    recordTime: Number(rank.recordTime),
  };
};
