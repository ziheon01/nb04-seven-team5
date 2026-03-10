// src/services/exerciseRecordService.js

import { PrismaClient } from '@prisma/client';
import BadgeService from './badgeService.js';

const prisma = new PrismaClient();

class ExerciseRecordService {
  constructor() {
    this.badgeService = new BadgeService();
  }

  getGroupWebhookUrl = async (groupId) => {
    const group = await prisma.group.findUnique({
      where: { id: Number(groupId) },
      select: { discordWebhookUrl: true },
    });
    return group?.discordWebhookUrl || null; 
  };

  createRecord = async (groupId, recordData) => {
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
    });

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

  getRecords = async (groupId, options) => {
    const numericGroupId = Number(groupId);
    const { page, limit, order, orderBy, search } = options;
    const skip = (page - 1) * limit;

    const whereCondition = {
      groupId: numericGroupId,
      ...(search ? {
        participant: {
          nickname: { contains: search, mode: "insensitive" }
        }
      } : {})
    };

    const orderByClause = {};
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
    });

    const total = await prisma.exerciseRecord.count({ where: whereCondition });

    return { datas: records, total }; 
  }

  getRecordDetail = async (groupId, recordId) => {
    const record = await prisma.exerciseRecord.findUnique({
      where: {
        id: Number(recordId),
      },
      include: {
        participant: true,
        participantPhoto: true,
      },
    });

    if (!record || record.groupId !== Number(groupId)) {
      const error = new Error("존재하지 않는 운동 기록입니다.");
      error.statusCode = 404;
      throw error;
    }

    return record;
  };
}

export default ExerciseRecordService;