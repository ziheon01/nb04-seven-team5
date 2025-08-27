import { PrismaClient } from '../../generated/prisma/index.js'; // 올바른 Prisma Client 임포트 경로
const prisma = new PrismaClient();

// 기준에 따른 Badge 타입 키
export const badgeTypes = {
  participantsOver10: 'participantsOver10',
  recordsOver100: 'recordsOver100',
  recommandationsOver100: 'recommandationsOver100',
};

class BadgeService {
  // 배지 기준 조건에 따른 상태 반환
  computeBadgeStatuses = async (groupId) => {
    const totalParticipant = await prisma.participant.count({ where: { groupId } });
    const totalExerciseRecord = await prisma.exerciseRecord.count({ where: { groupId } });
    const totalLike = await prisma.like.count({
      where: { participant: { groupId } },
    });

    return {
      [badgeTypes.participantsOver10]: totalParticipant >= 10,
      [badgeTypes.recordsOver100]: totalExerciseRecord >= 100,
      [badgeTypes.recommandationsOver100]: totalLike >= 100,
    };
  }

  // 실제 DB에 상태 저장
  updateBadgeStatus = async (groupId, badgeStatusObj) => {
    for (const [badgeType, status] of Object.entries(badgeStatusObj)) {
      await prisma.groupBadge.upsert({
        where: { groupId },
        update: { [badgeType]: status },
        create: { groupId, [badgeType]: status },
      });
    }
  }

  // 뱃지 상태를 자동 갱신(유틸 메서드)
  autoUpdateBadges = async (groupId) => {
    try {
      // 1. 현재 뱃지 상태 계산
      const badgeStatuses = await this.computeBadgeStatuses(groupId);

      // 2. DB에 상태 업데이트
      await this.updateBadgeStatus(groupId, badgeStatuses);

      return badgeStatuses;
      // 메인 기능을 방해 하면 안되는 유틸 메서드기 때문에 자체적으로 try ~catch를 가짐
    } catch (error) {
      console.error(`뱃지 자동 갱신 실패: 그룹 ${groupId}`, error);
      // 뱃지 갱신 실패가 메인 기능을 방해하지 않도록 에러를 던지지 않음
      return null;
    }
  }
}




export default BadgeService;
