// src/services/badgeService.ts

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const badgeTypes = {
  participantsOver10: 'participantsOver10',
  recordsOver100: 'recordsOver100',
  recommandationsOver100: 'recommandationsOver100',
} as const;

export type BadgeStatuses = {
  participantsOver10: boolean;
  recordsOver100: boolean;
  recommandationsOver100: boolean;
};

class BadgeService {
  // 배지 기준 조건에 따른 상태 반환
  computeBadgeStatuses = async (groupId: string | number): Promise<BadgeStatuses> => {
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
      participantsOver10: totalParticipant >= 10,
      recordsOver100: totalExerciseRecord >= 100,
      recommandationsOver100: totalLike >= 100,
    };
  }

  // 실제 DB에 상태 저장
  updateBadgeStatus = async (groupId: string | number, badgeStatusObj: BadgeStatuses): Promise<void> => {
    // groupId를 숫자로 변환
    const numericGroupId = Number(groupId);

    await prisma.groupBadge.upsert({
      where: { groupId: numericGroupId },
      update: badgeStatusObj,
      create: { groupId: numericGroupId, ...badgeStatusObj },
    });
  }

  // 뱃지 상태를 자동 갱신(유틸 메서드)
  autoUpdateBadges = async (groupId: string | number): Promise<BadgeStatuses | null> => {
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