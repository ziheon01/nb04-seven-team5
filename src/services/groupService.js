// src/services/groupService.js
import { PrismaClient } from '@prisma/client';
import BadgeService from './badgeService.js';

const prisma = new PrismaClient();

class GroupService {
  constructor() {
    this.badgeService = new BadgeService();
  }

  createGroup = async (groupData) => {
    const { 
      name, description, photoUrl, goalRep, 
      discordWebhookUrl, discordInviteUrl, tags, 
      ownerNickname, ownerPassword 
    } = groupData;

    try {
      const newGroup = await prisma.group.create({
        data: {
          groupName: name, // DB 컬럼명에 맞춤
          description,
          photoUrl,
          goalRep,
          discordWebhookUrl,
          discordInviteUrl,
          ownerNickname,
          ownerPassword,
          
          // 1. 소유자를 첫 번째 참여자로 등록
          participant: {
            create: [
              {
                nickname: ownerNickname,
                password: ownerPassword,
              },
            ],
          },
          // 2. 태그 생성
          tag: {
            create: tags.map(tagName => ({ tagName }))
          },
          // 3. 배지 테이블 초기화 (필수! 안 하면 나중에 null 에러 남)
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
          groupBadge: true, // 배지 정보 포함
        }
      });
      return newGroup;
    } catch (error) {
      console.error('그룹 생성 중 오류발생:', error);
      throw error;
    }
  }

  getGroups = async (options) => {
    const { page, limit, order, orderBy, search } = options;
    const skip = (page - 1) * limit;
    const take = limit;

    const where = {};
    if (search) {
      where.groupName = {
        contains: search,
        mode: 'insensitive',
      };
    }

    const orderByClause = {};
    if (orderBy === 'createdAt') {
      orderByClause.createdAt = order;
    } else if (orderBy === 'participantCount') {
      orderByClause.participant = { _count: order };
    } else if (orderBy === 'likeCount') {
      orderByClause.likeCount = order;
    } else {
        // 기본 정렬
        orderByClause.createdAt = 'desc';
    }

    try {
      const groups = await prisma.group.findMany({
        skip,
        take,
        where,
        orderBy: orderByClause,
        include: {
          _count: { select: { exerciseRecord: true } }, // 기록 수 계산용
          participant: true, // 참여자 수 계산 및 목록용
          tag: true,
          groupBadge: true, // 배지 정보
        },
      });

      const total = await prisma.group.count({ where });

      // ★ 가공 없이 원본 그대로 리턴 (매퍼가 처리함)
      return { groups, total };
    } catch (error) {
      console.error('그룹을 가져오는 중 오류발생:', error);
      throw error;
    }
  }

  getGroupDetail = async (groupId) => {
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
      
      // ★ 가공 없이 원본 그대로 리턴
      return group;
    } catch (error) {
      console.error('그룹 상세 조회 중 오류발생:', error);
      throw error;
    }
  }

  updateGroup = async (groupId, updateData, ownerPassword) => {
    try {
      const numericGroupId = Number(groupId);
      
      // 권한 확인을 위해 먼저 조회
      const group = await prisma.group.findUnique({ where: { id: numericGroupId } });
      if (!group) throw new Error('Group not found.');
      if (group.ownerPassword !== ownerPassword) throw new Error('Invalid owner password.');

      // 태그 등 복잡한 업데이트 로직이 있다면 여기서 처리
      // (단순 필드 업데이트만 가정)
      
      const updatedGroup = await prisma.group.update({
        where: { id: numericGroupId },
        data: updateData,
        include: { // 업데이트 후 최신 정보 반환을 위해 include
            participant: true,
            tag: true,
            groupBadge: true,
        }
      });

      return updatedGroup;
    } catch (error) {
      console.error('그룹 업데이트 중 오류 발생:', error);
      throw error;
    }
  }

  deleteGroup = async (groupId, ownerPassword) => {
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

  likeGroup = async (groupId) => { 
    try {
      const numericGroupId = Number(groupId);
      
      const updatedGroup = await prisma.group.update({
        where: { id: numericGroupId },
        data: { likeCount: { increment: 1 } },
        include: { groupBadge: true } // 배지 갱신 확인용
      });

      // 배지 갱신
      await this.badgeService.autoUpdateBadges(numericGroupId);

      // 갱신된 정보 다시 조회 (배지가 바뀌었을 수 있으므로)
      return prisma.group.findUnique({
          where: { id: numericGroupId },
          include: { 
              groupBadge: true,
              tag: true,
              participant: true 
            }
      });

    } catch (error) {
      console.error('그룹 추천 중 오류 발생:', error);
      throw error;
    }
  }

  unlikeGroup = async (groupId) => { 
    try {
      const numericGroupId = Number(groupId);

      const updatedGroup = await prisma.group.update({
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
    });

    } catch (error) {
      console.error('그룹 추천 취소 중 오류 발생:', error);
      throw error;
    }
  }
}

export default GroupService;