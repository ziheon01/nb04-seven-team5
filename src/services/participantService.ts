import { PrismaClient, Participant, Group } from '@prisma/client';
import BadgeService from './badgeService.js';
import { ParticipantBodyDto } from '../middlewares/validation/participantValidator.js';

const prisma = new PrismaClient();

class ParticipantService {
  private badgeService: BadgeService;

  constructor() {
    this.badgeService = new BadgeService();
  }

  joinGroup = async (groupId: string | number, participantData: ParticipantBodyDto): Promise<any> => {
    const numericGroupId = Number(groupId);
    const { nickname, password } = participantData;

    const existingGroup = await prisma.group.findUnique({
      where: { id: numericGroupId },
    });
    if (!existingGroup) {
      throw new Error('Group not found')
    }

    const existingParticipant = await prisma.participant.findFirst({
      where: {
        groupId: numericGroupId,
        nickname,
      }
    });
    if (existingParticipant) {
      throw new Error("Nickname already exists in this group")
    }
    
    await prisma.participant.create({
      data: {
        groupId: numericGroupId,
        nickname,
        password,
      }
    });

    await this.badgeService.autoUpdateBadges(numericGroupId);

    const updatedGroup = await prisma.group.findUnique({
      where: { id: numericGroupId },
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

    return updatedGroup;
  }

  leaveGroup = async (groupId: string | number, participantData: ParticipantBodyDto): Promise<Participant> => {
    const numericGroupId = Number(groupId);
    const { nickname, password } = participantData;

    const existingGroup = await prisma.group.findUnique({
      where: { id: numericGroupId }
    })
    if (!existingGroup) {
      throw new Error('Group not found');
    }

    const existingParticipant = await prisma.participant.findFirst({
      where: {
        groupId: numericGroupId,
        nickname,
        password,
      },
    });

    if (!existingParticipant) {
      throw new Error('Participant not found');
    }

    const deletedParticipant = await prisma.participant.delete({
      where: {
        id: existingParticipant.id
      }
    });

    await this.badgeService.autoUpdateBadges(numericGroupId);

    return deletedParticipant;
  }
}

export default ParticipantService;