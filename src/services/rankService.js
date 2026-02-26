// src/services/rankService.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class RankService {
  /**
   * 공통 랭킹 집계 로직 (Step A, B, C 적용)
   * @param {number} groupId 그룹 ID
   * @param {object} filter dateFilter 미들웨어에서 생성된 Prisma 필터 객체
   * @param {'count' | 'time'} rankingType 정렬 기준
   * @param {number} skip 페이지네이션 시작점
   * @param {number} take 가져올 개수
   */
  async _getRankings(groupId, filter, rankingType, skip = 0, take = 10) {
    // filter 객체에서 startDate 추출 (예: { createdAt: { gte: Date } })
    const startDate = filter?.createdAt?.gte;

    // [Step A] Participant를 조회하되, include 안에서 해당 기간의 exerciseRecords만 필터링해서 가져옴
    const participants = await prisma.participant.findMany({
      where: {
        groupId: Number(groupId),
      },
      include: {
        exerciseRecords: {
          where: startDate ? { createdAt: { gte: startDate } } : {},
          select: { time: true } // 계산에 필요한 time 컬럼만 선택
        },
      },
    });

    // [Step B] JS의 map/reduce를 사용해 각 참여자별 기간 내 합계 계산
    // Participant 테이블의 누적 컬럼(recordCount, recordTime)을 사용하지 않음
    const calculatedRanks = participants.map((p) => {
      const totalTime = p.exerciseRecords.reduce((sum, record) => sum + record.time, 0);
      const totalCount = p.exerciseRecords.length;

      return {
        id: p.id,
        nickname: p.nickname,
        recordTime: totalTime,
        recordCount: totalCount,
      };
    });

    // [Step C] 정렬 및 페이지네이션 적용
    if (rankingType === 'time') {
      // 시간 내림차순 (동일 시간일 경우 횟수 내림차순)
      calculatedRanks.sort((a, b) => b.recordTime - a.recordTime || b.recordCount - a.recordCount);
    } else {
      // 횟수 내림차순 (동일 횟수일 경우 시간 내림차순)
      calculatedRanks.sort((a, b) => b.recordCount - a.recordCount || b.recordTime - a.recordTime);
    }

    // 메모리상에서 skip, take 적용
    return calculatedRanks.slice(skip, skip + take);
  }

  // 기존 Controller 인터페이스 유지
  getRankingsByCount = async (groupId, dateFilter, skip = 0, take = 10) => {
    return this._getRankings(groupId, dateFilter, 'count', skip, take);
  }

  getRankingsByTime = async (groupId, dateFilter, skip = 0, take = 10) => {
    return this._getRankings(groupId, dateFilter, 'time', skip, take);
  }
}

export default RankService;
