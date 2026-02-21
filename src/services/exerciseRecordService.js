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
    return group?.discordWebhookUrl || null; // 없으면 null 반환
  };

  createRecord = async (groupId, recordData) => {
    const numericGroupId = Number(groupId);
    const { exerciseType, description, time, distance, participantPhoto, participantNickname, participantPassword } = recordData;

    // 1. 닉네임과 비밀번호로 참여자 찾기
    const participant = await prisma.participant.findFirst({
      where: {
        nickname: participantNickname,
        // 실제로는 비밀번호 비교 로직이 필요하지만, 여기선 일단 그대로 둠 (해싱 등 고려)
        password: participantPassword, 
        groupId: numericGroupId // 해당 그룹의 참여자인지도 체크
      },
    });

    if (!participant) {
      throw new Error("Participant not found");
    }

    // 2. 기록 생성
    const newRecord = await prisma.exerciseRecord.create({
      data: {
        groupId: numericGroupId,
        exerciseType,
        description,
        time,
        distance,
        participantId: participant.id, // connect 대신 직접 ID 할당이 더 직관적일 때가 있음
        
        // 사진 저장 (문자열 배열 -> 객체 배열 변환)
        participantPhoto: {
          create: (participantPhoto || []).map(url => ({ photoUrl: url })),
        },
      },
      // 생성 후 리턴할 때 필요한 정보들 include
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

    // 검색 조건 구성
    const whereCondition = {
      groupId: numericGroupId,
      ...(search ? {
        participant: {
          nickname: { contains: search, mode: "insensitive" }
        }
      } : {})
    };

    // 정렬 조건 구성
    const orderByClause = {};
    if (orderBy === 'time') {
      orderByClause.time = order || 'desc';
    } else {
      orderByClause.createdAt = order || 'desc'; // 기본값
    }

    // DB 조회
    const records = await prisma.exerciseRecord.findMany({
      where: whereCondition,
      skip,
      take: limit,
      orderBy: orderByClause,
      include: {
        participant: true,       // 작성자 정보
        participantPhoto: true,  // 사진 정보
      },
    });

    const total = await prisma.exerciseRecord.count({ where: whereCondition });

    // 가공하지 않고 원본 그대로 리턴 (datas -> records 이름 변경)
    return { datas: records, total }; 
  }
}

export default ExerciseRecordService;