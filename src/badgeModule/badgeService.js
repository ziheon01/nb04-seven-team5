import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 기준에 따른 Badge를 badgeTypes으로 정리
const badgeTypes = {
  participantsOver10: 'participantsOver10',
  recordsOver100: 'recordsOver100',
  recommandationsOver100: 'recommandationsOver100',
};

// badgeTypes의 결과를 객체로 리턴받는 함수
async function badgeTypesStatus(groupId) {
  // count를 이용해 기준 대상 테이블 총합 집계
  const totalParticipant = await prisma.participant.count({
    where: {
      groupId,
    },
  });

  const totalExerciseRecord = await prisma.exerciseRecord.count({
    where: {
      groupId,
    },
  });

  const totalLike = await prisma.like.count({
    where: {
      participant: {
        groupId,
      },
    },
  });

  return {
    [badgeTypes.participantsOver10]: totalParticipant >= 10,
    [badgeTypes.recordsOver100]: totalExerciseRecord >= 100,
    [badgeTypes.recommandationsOver100]: totalLike >= 100,
  };
}

export async function updateBadgeStatus(groupId, badgeTypesStatus) {
  // badgeTypes의 결과를 객체의 속성을 [key, value]에 순회하며 주입
  for (const [badgeType, status] of Object.entries(badgeTypesStatus)) {
    await prisma.groupBadge.upsert({
      where: {
        groupId,
      },
      update: {
        [badgeType]: status,
      },
      create: {
        groupId,
        [badgeType]: status,
      },
    });
  }
}

