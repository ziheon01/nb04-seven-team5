import { PrismaClient } from '../../generated/prisma/index.js'; // 올바른 Prisma Client 임포트 경로
import BadgeService from './badgeService.js'; //Note: 뱃지 갱신을 위해 추가

const prisma = new PrismaClient();

class ParticipantService {
  //Note: BadgeService 인스턴스 생성
  constructor() {
    this.badgeService = new BadgeService();
  }

  joinGroup = async (groupId, nickname, password) => {

    const existingGroup = await prisma.group.findUnique({
      where: { id: groupId },
    });
    if (!existingGroup) {
      throw new Error('Group not found')
    }

    const existingParticipant = await prisma.participant.findFirst({
      where: {
        groupId,
        nickname,
      }
    });
    if (existingParticipant) {
      throw new Error("Nickname already exists in this group")
    }
    //Note: 이 부분 이유가 있나요? console.log(groupId, nickname, password);
    const newParticipant = await prisma.participant.create({
      data: {
        groupId,
        nickname,
        password,
      }
    });
    console.log(newParticipant);

    // Note: 참가자 추가 후 뱃지 자동 갱신
    await this.badgeService.autoUpdateBadges(groupId);

    const updatedGroup = await prisma.group.findUnique({
      where: { id: groupId },
      include: {
        participant: {
          select: {
            id: true,
            nickname: true,
            createdAt: true,
            updatedAt: true
          },
        },
      }
    });

    console.log(`Joining group ${groupId} with ${nickname}`);
    return updatedGroup
  }

  leaveGroup = async (groupId, nickname, password) => {
    const existingGroup = await prisma.group.findUnique({
      where: { id: groupId }
    })
    if (!existingGroup) {
      throw new Error('Group not found');
    }

    // 해당 그룹에 속해 있으면서  일치하는 닉네임,비밀번호이 있는지 확인 
    const existingParticipant = await prisma.participant.findFirst({
      where: {
        groupId,
        nickname,
        password,
      },
    });

    if (!existingParticipant) {
      throw new Error('Participant not found');
    }

    const deleteParticipant = await prisma.participant.delete({
      where: {
        id: existingParticipant.id
      }
    });

    //  참가자 탈퇴 후 뱃지 자동 갱신
    await this.badgeService.autoUpdateBadges(groupId);

    console.log(`Leaving group ${groupId} with ${nickname}`);
    return deleteParticipant;
  }
}

export default ParticipantService;
