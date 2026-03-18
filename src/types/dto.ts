import { ExerciseType } from '@prisma/client';

export interface UserResponseDto {
  id: number;
  nickname: string;
  profileUrl: string | null;
}

export interface GroupResponseDto {
  id: number;
  name: string;
  description: string | null;
  photoUrl: string | null;
  goalRep: number;
  likeCount: number;
  recordCount: number;
  tags: string[];
  badges: string[];
  owner: UserResponseDto;
  participants: UserResponseDto[];
  discordWebhookUrl: string;
  discordInviteUrl: string;
}

export interface RecordResponseDto {
  id: number;
  exerciseType: ExerciseType;
  description: string;
  time: number;
  distance: number;
  createdAt: Date;
  author: UserResponseDto | null;
  photos: string[];
}

export interface RankResponseDto {
  participantId: number;
  nickname: string;
  recordCount: number;
  recordTime: number;
}
