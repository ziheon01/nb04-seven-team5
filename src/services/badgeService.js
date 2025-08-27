import { PrismaClient } from '../../generated/prisma/index.js'; // 올바른 Prisma Client 임포트 경로
import { badgeTypes, minimumNumber } from '../const/badge_const.js'
const prisma = new PrismaClient();

class BadgeService {
  // 배지 기준 조건에 따른 상태 반환
  computeBadgeStatuses = async (groupId) => {
    const totalParticipant = await prisma.participant.count({ where: { groupId } });
    const totalExerciseRecord = await prisma.exerciseRecord.count({ where: { groupId } });
    const totalLike = await prisma.like.count({
      where: { participant: { groupId } },
    });

    return {
      [badgeTypes.participantsOver10]: totalParticipant >= minimumNumber.participantsOver10MinimumPoint,
      [badgeTypes.recordsOver100]: totalExerciseRecord >= minimumNumber.recordsOver100MinimumPoint,
      [badgeTypes.recommandationsOver100]: totalLike >= minimumNumber.recommandationsOver100MinimumuPoint,
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
