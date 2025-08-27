import { PrismaClient } from '../../generated/prisma/index.js'; // 올바른 Prisma Client 임포트 경로

const prisma = new PrismaClient();

class RankService {
  getRankingsByCount= async (groupId, dateFilter, skip = 0, take = 10) => {
    return prisma.participant.findMany({
      select: {
        id: true,
        nickname: true,
        recordTime: true,
        recordCount: true,
      },
      where: {
        groupId,
        ...dateFilter,
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
        participantId: true,
        nickname: true,
        recordTime: true,
        recordCount: true,
      },
      where: {
        groupId,
        ...dateFilter,
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