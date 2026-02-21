// src/services/badgeService.js

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const badgeTypes = {
  participantsOver10: 'participantsOver10',
  recordsOver100: 'recordsOver100',
  recommandationsOver100: 'recommandationsOver100',
};

class BadgeService {
  // 배지 기준 조건에 따른 상태 반환
  computeBadgeStatuses = async (groupId) => {
    // groupId를 숫자로 변환
    const numericGroupId = Number(groupId);

    const totalParticipant = await prisma.participant.count({ where: { groupId: numericGroupId } });
    const totalExerciseRecord = await prisma.exerciseRecord.count({ where: { groupId: numericGroupId } });
    
    const group = await prisma.group.findUnique({
      where: { id: numericGroupId },
      select: { likeCount: true },
    });
    const totalLike = group ? group.likeCount : 0;

    return {
      [badgeTypes.participantsOver10]: totalParticipant >= 10,
      [badgeTypes.recordsOver100]: totalExerciseRecord >= 100,
      [badgeTypes.recommandationsOver100]: totalLike >= 100,
    };
  }

  // 실제 DB에 상태 저장
  updateBadgeStatus = async (groupId, badgeStatusObj) => {
    // groupId를 숫자로 변환
    const numericGroupId = Number(groupId);

    for (const [badgeType, status] of Object.entries(badgeStatusObj)) {
      await prisma.groupBadge.upsert({
        where: { groupId: numericGroupId },
        update: { [badgeType]: status },
        create: { groupId: numericGroupId, [badgeType]: status },
      });
    }
  }

  // 뱃지 상태를 자동 갱신(유틸 메서드)
  autoUpdateBadges = async (groupId) => {
    try {
      const badgeStatuses = await this.computeBadgeStatuses(groupId);
      await this.updateBadgeStatus(groupId, badgeStatuses);
      return badgeStatuses;
    } catch (error) {
      console.error(`뱃지 자동 갱신 실패: 그룹 ${groupId}`, error);
      return null;
    }
  }
}

export default BadgeService;