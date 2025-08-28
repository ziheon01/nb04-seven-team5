// src/services/exerciseRecordService.js

import { PrismaClient } from '../../generated/prisma/index.js';
import BadgeService from './badgeService.js';

const prisma = new PrismaClient();
class ExerciseRecordService {
  constructor() {
    this.badgeService = new BadgeService();
  }

  getGroupWebhookUrl = async (groupId) => {
    const group = await prisma.group.findUnique({
      where: { id: Number(groupId) }, // <-- 숫자 변환 추가
      select: { discordWebhookUrl: true },
    });

    if (!group) {
      throw new Error('Group not found');
    }

    return group.discordWebhookUrl;
  };

  createRecord = async (groupId, recordData) => {
    const numericGroupId = Number(groupId); // <-- groupId를 숫자로 변환!
    const { exerciseType, description, time, distance, participantPhoto, participantNickname, participantPassword } = recordData;

    const participant = await prisma.participant.findFirst({
      where: {
        nickname: participantNickname,
        password: participantPassword,
      },
    });

    if (!participant) {
      throw new Error("Participant not found");
    }

    const newRecord = await prisma.exerciseRecord.create({
      data: {
        groupId: numericGroupId, // <-- 숫자 타입 ID 사용
        exerciseType,
        description,
        time,
        distance,
        participantPhoto: {
          create: participantPhoto?.map(url => ({ photoUrl: url })) || [],
        },
        participant: {
          connect: { id: participant.id },
        },
      },
      include: {
        participant: true,
        participantPhoto: true,
      },
    });

    await prisma.participant.update({
      where: { id: participant.id },
      data: {
        recordCount: { increment: 1, },
        recordTime: { increment: time, },
      },
    });

    await this.badgeService.autoUpdateBadges(numericGroupId); // <-- 숫자 타입 ID 사용
    return newRecord;
  }

  getRecords = async (groupId, options) => {
    const numericGroupId = Number(groupId); // <-- groupId를 숫자로 변환!
    const { page, limit, order, orderBy, search } = options;
    const skip = (page - 1) * limit;

    let whereCondition = {};
    if (search && search.length > 0) {
      whereCondition = {
        participant: {
          nickname: {
            contains: search,
            mode: "insensitive",
          },
        },
      };
    }

    const orderByClause = {};
    if (orderBy === 'createdAt') {
      orderByClause.createdAt = order;
    } else if (orderBy === 'time') {
      orderByClause.time = order;
    }

    const records = await prisma.exerciseRecord.findMany({
      where: { groupId: numericGroupId, ...whereCondition }, // <-- 숫자 타입 ID 사용
      skip,
      take: limit,
      orderBy: orderByClause,
      include: {
        participant: true,
        participantPhoto: true,
      },
    });

    const recordIds = records.map(record => record.id);

    const allPhotos = await prisma.participantPhoto.findMany({
      where: {
        exerciseRecordId: { in: recordIds }
      },
      select: {
        exerciseRecordId: true,
        photoUrl: true,
      },
    });

    const datas = records.map((record) => {
      const photosForRecord = allPhotos
        .filter(photo => photo.exerciseRecordId === record.id)
        .map(photo => ({ photoUrl: photo.photoUrl }));

      return {
        id: record.id,
        exerciseType: record.exerciseType,
        description: record.description,
        time: record.time,
        distance: record.distance,
        participantPhoto: photosForRecord,
        participant: {
          id: record.participant.id,
          nickname: record.participant.nickname,
        },
      };
    });

    const total = await prisma.exerciseRecord.count({ where: { groupId: numericGroupId, ...whereCondition } }); // <-- 숫자 타입 ID 사용
    return { datas, total }
  }
}

export default ExerciseRecordService;