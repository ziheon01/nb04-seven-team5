import { PrismaClient } from '@prisma/client';
import { fakerKO as faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 시딩을 시작합니다...');

  const salt = await bcrypt.genSalt(10);
  const commonPassword = await bcrypt.hash('password123', salt);

  // 운동 종류
  const exerciseTypes = ['run', 'swim', 'bike'];

  // ★ 진짜 같은 한국 모임 제목 리스트
  const realGroupNames = [
    '한강 나이트 러닝 크루 🏃',
    '아침 6시 미라클 모닝 수영 🏊‍♂️',
    '강남역 직장인 헬스 모임 💪',
    '주말 관악산 등산 동호회 ⛰️',
    '따릉이 타고 한강 치맥 라이딩 🚴',
    '매일 1만보 걷기 챌린지 👣',
    '퇴근 후 배드민턴 한 판 🏸',
    '초보 환영! 5km 마라톤 준비반',
    '여의도 점심시간 틈새 운동',
    '방구석 홈트레이닝 인증방 🏠'
  ];

  const descriptions = [
    '혼자 하면 힘들지만 같이 하면 할 수 있습니다! 매일 인증샷 필수.',
    '초보자 환영합니다. 서로 응원하면서 운동해요.',
    '빡세게 운동하고 시원하게 음료수 한잔 하실 분!',
    '꾸준함이 답이다. 하루 30분 투자로 건강 챙기세요.',
    '비매너 사절, 눈팅 사절. 열정 있는 분들만 오세요!'
  ];

  // 1. 그룹 검사 및 생성
  for (let i = 0; i < realGroupNames.length; i++) {
    const groupName = realGroupNames[i];
    
    // ★ 멱등성 보장: 이미 그룹이 존재하는지 검사
    const existingGroup = await prisma.group.findUnique({
      where: { groupName: groupName }
    });

    if (existingGroup) {
      console.log(`⏩ 기존 데이터 유지 (생성 스킵): ${groupName}`);
      continue; // 이미 존재하면 하위 데이터(참가자, 기록) 생성 생략
    }
    
    const ownerName = faker.person.lastName() + faker.person.firstName(); 

    const group = await prisma.group.create({
      data: {
        groupName, 
        description: descriptions[i % descriptions.length],
        photoUrl: `https://picsum.photos/seed/${faker.string.uuid()}/800/600`,
        goalRep: faker.number.int({ min: 10, max: 100 }),
        likeCount: faker.number.int({ min: 10, max: 300 }),
        discordWebhookUrl: faker.internet.url(),
        discordInviteUrl: `https://discord.gg/${faker.string.alphanumeric(8)}`,
        
        ownerNickname: `${ownerName}_리더`,
        ownerPassword: commonPassword,
        
        tag: {
          create: [
            { tagName: faker.helpers.arrayElement(['오운완', '러닝', '헬스', '다이어트']) },
            { tagName: faker.helpers.arrayElement(['서울', '강남', '초보환영', '직장인']) }
          ]
        },
        groupBadge: {
          create: {
            participantsOver10: faker.datatype.boolean(),
            recordsOver100: true,
            recommandationsOver100: faker.datatype.boolean(),
          }
        }
      }
    });

    console.log(`✅ 그룹 생성: ${group.groupName}`);

    // 2. 그룹별 참가자 생성
    const participantCount = faker.number.int({ min: 5, max: 10 });

    for (let j = 0; j < participantCount; j++) {
      const pName = faker.person.lastName() + faker.person.firstName();
      
      const participant = await prisma.participant.create({
        data: {
          groupId: group.id,
          nickname: `${pName}${faker.number.int({min:1, max:99})}`,
          password: commonPassword,
        }
      });

      // 3. 운동 기록 생성
      const recordCount = faker.number.int({ min: 2, max: 5 });
      let totalTime = 0;

      for (let k = 0; k < recordCount; k++) {
        const time = faker.number.int({ min: 1800, max: 5400 });
        totalTime += time;

        await prisma.exerciseRecord.create({
          data: {
            groupId: group.id,
            participantId: participant.id,
            exerciseType: faker.helpers.arrayElement(exerciseTypes),
            description: faker.helpers.arrayElement(['오늘도 완료!', '힘들었다...', '상쾌하네요']),
            time: time,
            distance: faker.number.int({ min: 1000, max: 10000 }),
            participantPhoto: {
              create: [
                { photoUrl: `https://picsum.photos/seed/${faker.string.uuid()}/400/400` }
              ]
            }
          }
        });
      }

      await prisma.participant.update({
        where: { id: participant.id },
        data: { recordCount, recordTime: totalTime }
      });
    }
  }

  console.log('✨ 시딩 완료! 화면을 새로고침 하세요.');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });