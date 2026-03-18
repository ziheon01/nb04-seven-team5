import { PrismaClient, Participant, Prisma } from '@prisma/client';
import BadgeService from './badgeService.js';
import { ParticipantBodyDto } from '../middlewares/validation/participantValidator.js';

const prisma = new PrismaClient();

export type JoinGroupResponse = Prisma.GroupGetPayload<{
  include: {
    participant: {
      select: {
        id: true;
        nickname: true;
        createdAt: true;
        updatedAt: true;
      };
    };
  };
}>;

class ParticipantService {
  private badgeService: BadgeService;

  constructor() {
    this.badgeService = new BadgeService();
  }

  joinGroup = async (groupId: number, participantData: ParticipantBodyDto): Promise<JoinGroupResponse | null> => {
    const { nickname, password } = participantData;

    const existingGroup = await prisma.group.findUnique({
      where: { id: groupId },
    });
    if (!existingGroup) {
      throw new Error('Group not found')
    }

    const existingParticipant = await prisma.participant.findFirst({
      where: {
        groupId: groupId,
        nickname,
      }
    });
    if (existingParticipant) {
      throw new Error("Nickname already exists in this group")
    }
    
    await prisma.participant.create({
      data: {
        groupId: groupId,
        nickname,
        password,
      }
    });

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

    return updatedGroup;
  }

  leaveGroup = async (groupId: number, participantData: ParticipantBodyDto): Promise<Participant> => {
    const { nickname, password } = participantData;

    const existingGroup = await prisma.group.findUnique({
      where: { id: groupId }
    })
    if (!existingGroup) {
      throw new Error('Group not found');
    }

    const existingParticipant = await prisma.participant.findFirst({
      where: {
        groupId: groupId,
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

    await this.badgeService.autoUpdateBadges(groupId);

    return deletedParticipant;
  }
}

export default ParticipantService;