// src/services/groupService.ts
import { PrismaClient, Prisma } from '@prisma/client';
import BadgeService from './badgeService.js';
import { CreateGroupDto, GroupQueryDto, UpdateGroupDto } from '../middlewares/validation/groupValidator.js';

const prisma = new PrismaClient();

export type GroupWithRelations = Prisma.GroupGetPayload<{
  include: {
    participant: true;
    tag: true;
    groupBadge: true;
    _count: { select: { exerciseRecord: true } };
  };
}>;

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
          _count: { select: { exerciseRecord: true } }
        }
      });
      return newGroup;
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

    const where: Prisma.GroupWhereInput = {};
    if (search) {
      where.groupName = {
        contains: search,
        mode: 'insensitive',
      };
    }

    const orderByClause: Prisma.GroupOrderByWithRelationInput = {};
    if (orderBy === 'createdAt') {
      orderByClause.createdAt = order as Prisma.SortOrder;
    } else if (orderBy === 'participantCount') {
      orderByClause.participant = { _count: order as Prisma.SortOrder };
    } else if (orderBy === 'likeCount') {
      orderByClause.likeCount = order as Prisma.SortOrder;
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
          participant: true,
          tag: true,
          groupBadge: true,
          _count: { select: { exerciseRecord: true } },
        },
      });

      const total = await prisma.group.count({ where });

      return { groups, total };
    } catch (error) {
      console.error('그룹을 가져오는 중 오류발생:', error);
      throw error;
    }
  }

  getGroupDetail = async (groupId: number): Promise<GroupWithRelations | null> => {
    try {
      const group = await prisma.group.findUnique({
        where: { id: groupId },
        include: {
          participant: true,
          tag: true,
          groupBadge: true,
          _count: { select: { exerciseRecord: true } }
        },
      });
      
      return group;
    } catch (error) {
      console.error('그룹 상세 조회 중 오류발생:', error);
      throw error;
    }
  }

  updateGroup = async (groupId: number, updateData: UpdateGroupDto, ownerPassword: string): Promise<GroupWithRelations> => {
    try {
      const group = await prisma.group.findUnique({ where: { id: groupId } });
      if (!group) throw new Error('Group not found.');
      if (group.ownerPassword !== ownerPassword) throw new Error('Invalid owner password.');

      const { name, tags, ...rest } = updateData;

      const prismaUpdateData: Prisma.GroupUpdateInput = {
        ...rest,
        groupName: name,
      };

      if (tags) {
        prismaUpdateData.tag = {
          deleteMany: {},
          create: tags.map((tagStr: string) => ({ tagName: tagStr }))
        };
      }

      const updatedGroup = await prisma.group.update({
        where: { id: groupId },
        data: prismaUpdateData,
        include: { 
            participant: true,
            tag: true,
            groupBadge: true,
            _count: { select: { exerciseRecord: true } }
        }
      });

      return updatedGroup;
    } catch (error) {
      console.error('그룹 업데이트 중 오류 발생:', error);
      throw error;
    }
  }

  deleteGroup = async (groupId: number, ownerPassword: string): Promise<void> => {
    try {
      const group = await prisma.group.findUnique({ where: { id: groupId } });
      if (!group) throw new Error("Group not found.");
      if (group.ownerPassword !== ownerPassword) throw new Error("Invalid owner password.");
      
      await prisma.group.delete({ where: { id: groupId } });
      return;
    } catch (error) {
      console.error("삭제 중 에러 발생: ", error);
      throw error;
    }
  }

  likeGroup = async (groupId: number): Promise<GroupWithRelations | null> => { 
    try {
      await prisma.group.update({
        where: { id: groupId },
        data: { likeCount: { increment: 1 } },
      });

      await this.badgeService.autoUpdateBadges(groupId);

      return prisma.group.findUnique({
          where: { id: groupId },
          include: { 
              groupBadge: true,
              tag: true,
              participant: true,
              _count: { select: { exerciseRecord: true } }
            }
      });

    } catch (error) {
      console.error('그룹 추천 중 오류 발생:', error);
      throw error;
    }
  }

  unlikeGroup = async (groupId: number): Promise<GroupWithRelations | null> => { 
    try {
      await prisma.group.update({
        where: { id: groupId },
        data: { likeCount: { decrement: 1 } },
      });

      await this.badgeService.autoUpdateBadges(groupId);

      return prisma.group.findUnique({
        where: { id: groupId },
        include: { 
            groupBadge: true,
            tag: true,
            participant: true,
            _count: { select: { exerciseRecord: true } }
          }
    });

    } catch (error) {
      console.error('그룹 추천 취소 중 오류 발생:', error);
      throw error;
    }
  }
}

export default GroupService;