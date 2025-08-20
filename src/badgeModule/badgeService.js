import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient()

// 예시: GroupParticipant 모델 활용
const hasParticipationBadge = (participant) => {
  return participant.participationCount >= 10;
}

// 예시: ExerciseRecord 활용
const hasExerciseBadge = (user) => {
  return user.exerciseRecords.length >= 100;
}

// 예시: Like 또는 Group의 추천수 활용
const hasRecommendationBadge = (userOrGroup) => {
  return userOrGroup.recommendCount >= 10;
}

// 우선 각 기준들을 비교할 테이블 값을 상수로 정의하는 게 우선

//전체 참가자 수
const totalParticiapnt = await prisma.participant.count({
    where: {
        groupId
    }, 
});
//전체 운동기록 수
const totalExcerciseRecord = await prisma.exerciserecord.count({
    where: {
        grouId
    },
})
//전체 추천 수
const totlaLike = await prisma.like.count({
    where: {
        grouId,
    },
}); 
