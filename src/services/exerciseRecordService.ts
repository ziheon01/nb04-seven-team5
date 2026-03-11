// src/services/exerciseRecordService.ts

import { PrismaClient, ExerciseRecord, Participant, ParticipantPhoto } from '@prisma/client';
import BadgeService from './badgeService.js';
import { CreateRecordDto } from '../middlewares/validation/exerciseRecordValidator.js';

const prisma = new PrismaClient();

// Prisma가 반환하는 복합 타입 정의 (include를 사용하는 경우)
export type ExerciseRecordWithRelations = ExerciseRecord & {
  participant: Participant;
  participantPhoto: ParticipantPhoto[];
};

class ExerciseRecordService {
  private badgeService: BadgeService;

  constructor() {
    this.badgeService = new BadgeService();
  }

  getGroupWebhookUrl = async (groupId: string | number): Promise<string | null> => {
    const group = await prisma.group.findUnique({
      where: { id: Number(groupId) },
      select: { discordWebhookUrl: true },
    });
    return group?.discordWebhookUrl || null; 
  };

  createRecord = async (groupId: string | number, recordData: CreateRecordDto): Promise<ExerciseRecordWithRelations> => {
    const numericGroupId = Number(groupId);
    const { 
      exerciseType, description, time, distance, 
      participantNickname, participantPassword, participantPhoto 
    } = recordData;

    // 1. 닉네임과 비밀번호로 참여자 찾기
    const participant = await prisma.participant.findFirst({
      where: {
        nickname: participantNickname,
        password: participantPassword, 
        groupId: numericGroupId 
      },
    });

    if (!participant) {
      throw new Error("해당 그룹에 일치하는 닉네임과 비밀번호를 가진 참여자가 없습니다.");
    }

    // 2. 기록 생성
    const newRecord = await prisma.exerciseRecord.create({
      data: {
        groupId: numericGroupId,
        exerciseType,
        description,
        time,
        distance,
        participantId: participant.id, 
        
        participantPhoto: {
          create: (participantPhoto || []).map(url => ({ photoUrl: url })),
        },
      },
      include: {
        participant: true,
        participantPhoto: true,
      },
    }) as ExerciseRecordWithRelations;

    // 3. 통계 업데이트
    await prisma.participant.update({
      where: { id: participant.id },
      data: {
        recordCount: { increment: 1 },
        recordTime: { increment: time },
      },
    });

    // 4. 배지 업데이트
    await this.badgeService.autoUpdateBadges(numericGroupId);

    return newRecord;
  }

  getRecords = async (groupId: string | number, options: any): Promise<{ datas: ExerciseRecordWithRelations[], total: number }> => {
    const numericGroupId = Number(groupId);
    const { page, limit, order, orderBy, search } = options;
    const skip = (page - 1) * limit;

    const whereCondition: any = {
      groupId: numericGroupId,
      ...(search ? {
        participant: {
          nickname: { contains: search, mode: "insensitive" }
        }
      } : {})
    };

    const orderByClause: any = {};
    if (orderBy === 'time') {
      orderByClause.time = order || 'desc';
    } else {
      orderByClause.createdAt = order || 'desc'; 
    }

    const records = await prisma.exerciseRecord.findMany({
      where: whereCondition,
      skip,
      take: limit,
      orderBy: orderByClause,
      include: {
        participant: true,       
        participantPhoto: true,  
      },
    }) as ExerciseRecordWithRelations[];

    const total = await prisma.exerciseRecord.count({ where: whereCondition });

    return { datas: records, total }; 
  }

  getRecordDetail = async (groupId: string | number, recordId: string | number): Promise<ExerciseRecordWithRelations> => {
    const record = await prisma.exerciseRecord.findUnique({
      where: {
        id: Number(recordId),
      },
      include: {
        participant: true,
        participantPhoto: true,
      },
    }) as ExerciseRecordWithRelations;

    if (!record || record.groupId !== Number(groupId)) {
      const error: any = new Error("존재하지 않는 운동 기록입니다.");
      error.statusCode = 404;
      throw error;
    }

    return record;
  };
}

export default ExerciseRecordService;