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
}

export default BadgeService;
