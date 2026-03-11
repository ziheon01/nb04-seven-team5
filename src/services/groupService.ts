// src/services/groupService.ts
import { PrismaClient, Group, Participant, Tag, GroupBadge } from '@prisma/client';
import BadgeService from './badgeService.js';
import { CreateGroupDto, GroupQueryDto, UpdateGroupDto } from '../middlewares/validation/groupValidator.js';

const prisma = new PrismaClient();

export type GroupWithRelations = Group & {
  participant?: Participant[];
  tag?: Tag[];
  groupBadge?: GroupBadge | null;
  _count?: {
    exerciseRecord: number;
    participant?: number;
  };
};

class GroupService {
  private badgeService: BadgeService;

  constructor() {
    this.badgeService = new BadgeService();
  }

  createGroup = async (groupData: CreateGroupDto): Promise<GroupWithRelations> => {
    const { 
      name, description, photoUrl, goalRep, 
      discordWebhookUrl, discordInviteUrl, tags, 
      ownerNickname, ownerPassword 
    } = groupData;

    try {
      const newGroup = await prisma.group.create({
        data: {
          groupName: name,
          description,
          photoUrl,
          goalRep,
          discordWebhookUrl,
          discordInviteUrl,
          ownerNickname,
          ownerPassword,
          
          participant: {
            create: [
              {
                nickname: ownerNickname,
                password: ownerPassword,
              },
            ],
          },
          tag: {
            create: (tags || []).map(tagName => ({ tagName }))
          },
          groupBadge: {
            create: {
              participantsOver10: false,
              recordsOver100: false,
              recommandationsOver100: false
            }
          }
        },
        include: {
          participant: true,
          tag: true,
          groupBadge: true,
        }
      });
      return newGroup as GroupWithRelations;
    } catch (error) {
      console.error('그룹 생성 중 오류발생:', error);
      throw error;
    }
  }

  getGroups = async (options: GroupQueryDto): Promise<{ groups: GroupWithRelations[], total: number }> => {
    const { page, limit, order, orderBy, search } = options;
    const numericPage = Number(page);
    const numericLimit = Number(limit);

    const skip = (numericPage - 1) * numericLimit;
    const take = numericLimit;

    const where: any = {};
    if (search) {
      where.groupName = {
        contains: search,
        mode: 'insensitive',
      };
    }

    const orderByClause: any = {};
    if (orderBy === 'createdAt') {
      orderByClause.createdAt = order;
    } else if (orderBy === 'participantCount') {
      orderByClause.participant = { _count: order };
    } else if (orderBy === 'likeCount') {
      orderByClause.likeCount = order;
    } else {
        orderByClause.createdAt = 'desc';
    }

    try {
      const groups = await prisma.group.findMany({
        skip,
        take,
        where,
        orderBy: orderByClause,
        include: {
          _count: { select: { exerciseRecord: true } },
          participant: true,
          tag: true,
          groupBadge: true,
        },
      }) as GroupWithRelations[];

      const total = await prisma.group.count({ where });

      return { groups, total };
    } catch (error) {
      console.error('그룹을 가져오는 중 오류발생:', error);
      throw error;
    }
  }

  getGroupDetail = async (groupId: string | number): Promise<GroupWithRelations | null> => {
    try {
      const group = await prisma.group.findUnique({
        where: { id: Number(groupId) },
        include: {
          participant: true,
          tag: true,
          groupBadge: true,
          _count: { select: { exerciseRecord: true } }
        },
      });
      
      return group as GroupWithRelations | null;
    } catch (error) {
      console.error('그룹 상세 조회 중 오류발생:', error);
      throw error;
    }
  }

  updateGroup = async (groupId: string | number, updateData: UpdateGroupDto, ownerPassword: string): Promise<GroupWithRelations> => {
    try {
      const numericGroupId = Number(groupId);
      
      const group = await prisma.group.findUnique({ where: { id: numericGroupId } });
      if (!group) throw new Error('Group not found.');
      if (group.ownerPassword !== ownerPassword) throw new Error('Invalid owner password.');

      const prismaUpdateData: any = { ...updateData };
      if (prismaUpdateData.name) {
        prismaUpdateData.groupName = prismaUpdateData.name;
        delete prismaUpdateData.name; 
      }

      if (prismaUpdateData.tags) {
        const tagsArray = prismaUpdateData.tags;
        delete prismaUpdateData.tags;

        prismaUpdateData.tag = {
          deleteMany: {},
          create: tagsArray.map((tagStr: string) => ({ tagName: tagStr }))
        };
      }

      const updatedGroup = await prisma.group.update({
        where: { id: numericGroupId },
        data: prismaUpdateData,
        include: { 
            participant: true,
            tag: true,
            groupBadge: true,
        }
      });

      return updatedGroup as GroupWithRelations;
    } catch (error) {
      console.error('그룹 업데이트 중 오류 발생:', error);
      throw error;
    }
  }

  deleteGroup = async (groupId: string | number, ownerPassword: string): Promise<void> => {
    try {
      const numericGroupId = Number(groupId);

      const group = await prisma.group.findUnique({ where: { id: numericGroupId } });
      if (!group) throw new Error("Group not found.");
      if (group.ownerPassword !== ownerPassword) throw new Error("Invalid owner password.");
      
      await prisma.group.delete({ where: { id: numericGroupId } });
      return;
    } catch (error) {
      console.error("삭제 중 에러 발생: ", error);
      throw error;
    }
  }

  likeGroup = async (groupId: string | number): Promise<GroupWithRelations | null> => { 
    try {
      const numericGroupId = Number(groupId);
      
      await prisma.group.update({
        where: { id: numericGroupId },
        data: { likeCount: { increment: 1 } },
      });

      await this.badgeService.autoUpdateBadges(numericGroupId);

      return prisma.group.findUnique({
          where: { id: numericGroupId },
          include: { 
              groupBadge: true,
              tag: true,
              participant: true 
            }
      }) as Promise<GroupWithRelations | null>;

    } catch (error) {
      console.error('그룹 추천 중 오류 발생:', error);
      throw error;
    }
  }

  unlikeGroup = async (groupId: string | number): Promise<GroupWithRelations | null> => { 
    try {
      const numericGroupId = Number(groupId);

      await prisma.group.update({
        where: { id: numericGroupId },
        data: { likeCount: { decrement: 1 } },
      });

      await this.badgeService.autoUpdateBadges(numericGroupId);

      return prisma.group.findUnique({
        where: { id: numericGroupId },
        include: { 
            groupBadge: true,
            tag: true,
            participant: true 
          }
    }) as Promise<GroupWithRelations | null>;

    } catch (error) {
      console.error('그룹 추천 취소 중 오류 발생:', error);
      throw error;
    }
  }
}

export default GroupService;