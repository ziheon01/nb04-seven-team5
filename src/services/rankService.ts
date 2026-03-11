// src/services/rankService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface CalculatedRank {
  id: number;
  nickname: string;
  recordTime: number;
  recordCount: number;
}

class RankService {
  /**
   * 공통 랭킹 집계 로직
   */
  async _getRankings(groupId: string | number, filter: any, rankingType: 'count' | 'time', skip = 0, take = 10): Promise<CalculatedRank[]> {
    const startDate = filter?.createdAt?.gte;

    const participants = await prisma.participant.findMany({
      where: {
        groupId: Number(groupId),
      },
      include: {
        exerciseRecords: {
          where: startDate ? { createdAt: { gte: startDate } } : {},
          select: { time: true }
        },
      },
    });

    const calculatedRanks: CalculatedRank[] = participants.map((p) => {
      const totalTime = p.exerciseRecords.reduce((sum, record) => sum + record.time, 0);
      const totalCount = p.exerciseRecords.length;

      return {
        id: p.id,
        nickname: p.nickname,
        recordTime: totalTime,
        recordCount: totalCount,
      };
    });

    if (rankingType === 'time') {
      calculatedRanks.sort((a, b) => b.recordTime - a.recordTime || b.recordCount - a.recordCount);
    } else {
      calculatedRanks.sort((a, b) => b.recordCount - a.recordCount || b.recordTime - a.recordTime);
    }

    return calculatedRanks.slice(skip, skip + take);
  }

  getRankingsByCount = async (groupId: string | number, dateFilter: any, skip = 0, take = 10): Promise<CalculatedRank[]> => {
    return this._getRankings(groupId, dateFilter, 'count', skip, take);
  }

  getRankingsByTime = async (groupId: string | number, dateFilter: any, skip = 0, take = 10): Promise<CalculatedRank[]> => {
    return this._getRankings(groupId, dateFilter, 'time', skip, take);
  }
}

export default RankService;