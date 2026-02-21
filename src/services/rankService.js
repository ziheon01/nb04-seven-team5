// src/services/rankService.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class RankService {
  getRankingsByCount = async (groupId, dateFilter, skip = 0, take = 10) => {
    return prisma.participant.findMany({
      select: {
        id: true, // id로 가져와야 함
        nickname: true,
        recordTime: true,
        recordCount: true,
      },
      where: {
        groupId: Number(groupId), // 안전하게 숫자 변환
        // ...dateFilter, // dateFilter 구현 여부에 따라 주석 해제
      },
      orderBy: {
        recordCount: 'desc',
      },
      skip,
      take,
    });
  }

  getRankingsByTime = async (groupId, dateFilter, skip = 0, take = 10) => {
    return prisma.participant.findMany({
      select: {
        id: true, // 중요: participantId -> id 로 수정
        nickname: true,
        recordTime: true,
        recordCount: true,
      },
      where: {
        groupId: Number(groupId),
        // ...dateFilter,
      },
      orderBy: {
        recordTime: 'desc',
      },
      skip,
      take,
    });
  }
}

export default RankService;