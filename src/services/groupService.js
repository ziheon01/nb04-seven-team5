import { PrismaClient } from '../../generated/prisma/index.js';
import BadgeService from './badgeService.js'; //Note: 뱃지 상태 자동 갱신을 위해 추가
const prisma = new PrismaClient();

class GroupService {
  constructor() {
        this.badgeService = new BadgeService();
    }
  createGroup = async (groupData) => {
    const { name,
      description,
      photoUrl,
      goalRep,
      discordWebhookUrl,
      discordInviteUrl,
      tags, // tags 배열을 받음
      ownerNickname,
      ownerPassword
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

          // --- 핵심 수정 부분 ---
          // 1. 중첩된 쓰기를 사용해 그룹 생성과 동시에 참여자(소유주) 생성
          participant: {
            create: [
              {
                nickname: ownerNickname,
                password: ownerPassword,
              },
            ],
          },
          // 2. tags 배열을 순회하며 관련된 Tag 레코드들을 함께 생성
          tag: {
            create: tags.map(tagName => ({ tagName: tagName }))
          }
        },
        // 3. 응답에 방금 만든 참여자와 태그 정보도 포함시킴
        include: {
          participant: true,
          tag: true,
        }
      });
      return newGroup;
    } catch (error) {
      console.error('그룹 생성 중 오류발생:', error);
      throw error; // 컨트롤러로 에러 전달
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
        mode: 'insensitive', // 대소문자 구분 없이 검색
      };
    }

    const orderByClause = {};
    if (orderBy === 'createdAt') {
      orderByClause.createdAt = order;
    } else if (orderBy === 'participantCount') {
      // 'participant' 관계의 개수(_count)를 기준으로 정렬
      orderByClause.participant = {
        _count: order,
      };
    } else if (orderBy === 'likeCount') {
      // likeCount 필드를 기준으로 정렬하도록 수정
      orderByClause.likeCount = order;
    }

    try {
      const groups = await prisma.group.findMany({
        skip,
        take,
        where,
        orderBy: orderByClause,
        // 각 그룹의 참여자 수와, 태그 목록을 함께 가져옴
        include: {
          _count: {
            select: { participant: true },
          },
          tag: true,
        },
      });

      // 프론트엔드에서 사용하기 편하도록 데이터 구조를 가공
      const formattedGroups = groups.map(group => ({
        ...group,
        participantCount: group._count.participant, // 참여자 수를 participantCount 필드로 추가
        _count: undefined, // 기존 _count 필드는 제거
        owner: {
          nickname: group.ownerNickname,
        },
        participants: Array(group._count.participant).fill({}),
        tags: group.tag.map(t => t.tagName), // Map Tag objects to an array of tagNames
      }));

      const total = await prisma.group.count({ where });

      return { groups: formattedGroups, total };
    } catch (error) {
      console.error('그룹을 가져오는 중 오류발생:', error);
      throw error;
    }
  }

  getGroupDetail = async (groupId) => {
    try {
      const group = await prisma.group.findUnique({
        where: {
          id: groupId,
        },
        include: {
          participant: true,
          tag: true,
          groupBadge: true, // Include the groupBadge relation instead of badges
        },
      });

      // Map 'participant' (singular) from Prisma to 'participants' (plural) for frontend
      if (group) {
        group.participants = group.participant;
        delete group.participant; // Remove the singular 'participant' field
        group.tags = group.tag.map(t => t.tagName); // Map Tag objects to an array of tagNames
        delete group.tag; // Remove the singular 'tag' field
        group.owner = { // Construct the owner object for the frontend
          nickname: group.ownerNickname,
        };
        // Map Badge objects to an array of badge names (BadgeType)
        // Use groupBadge to construct the badges array
        if (group.groupBadge) {
          const badgesArray = [];
          if (group.groupBadge.participantsOver10) badgesArray.push('PARTICIPATION_10');
          if (group.groupBadge.recordsOver100) badgesArray.push('RECORD_100');
          if (group.groupBadge.recommandationsOver100) badgesArray.push('LIKE_100');
          group.badges = badgesArray;
        } else {
          group.badges = []; // No badges if groupBadge is null
        }
      }
      return group;
    } catch (error) {
      console.error('그룹을 가져오는 중 오류발생:', error);
      throw error;
    }
  }

  updateGroup = async (groupId, updateData, ownerPassword) => {
    try {
      const group = await prisma.group.findUnique({
        where: { id: groupId },
      });

      if (!group) {
        //Note: 컨트롤러 기준으로 수정
        throw new Error('Group not found');
      }

      //Note: 컨트롤러 기준으로 수정
      if (group.ownerPassword !== ownerPassword) {
        throw new Error('Invalid owner password.');
      }

      const updatedGroup = await prisma.group.update({
        where: { id: groupId },
        data: updateData,
      });

      return updatedGroup;
    } catch (error) {
      console.error('그룹 업데이트 중 오류 발생:', error);
      throw error;
    }
  }
  // 
  deleteGroup = async (groupId, ownerPassword) => {
    try {
      const numericGroupId = Number(groupId); // <-- groupId를 숫자로 변환!

      const group = await prisma.group.findUnique({
        where: { id: numericGroupId }, // <-- 숫자 타입 ID 사용
      });

      if (!group) {
        throw new Error("Group not found.");
      }

      if (group.ownerPassword !== ownerPassword) {
        throw new "Invalid owner password."();
      }
      await prisma.group.delete({
        where: { id: numericGroupId }, // <-- 숫자 타입 ID 사용
      });
      return;
    } catch (error) {
      console.error(" 삭제 중 에러 발생: ", error);
      throw error;
    }
  }

  // 그룹 추천 로직 추가
  likeGroup = async (groupId) => { // Removed participantId parameter
    try {
      // Only increment likeCount, no participant tracking
      const updatedGroup = await prisma.group.update({
        where: { id: Number(groupId) },
        data: {
          likeCount: {
            increment: 1,
          },
        },
      });

      // 추천 후 뱃지 자동 갱신
      await this.badgeService.autoUpdateBadges(groupId);

      return updatedGroup;

    } catch (error) {
      console.error('그룹 추천 중 오류 발생:', error);
      throw error;
    }
  }

  // 그룹 추천 취소 로직 추가
  unlikeGroup = async (groupId) => { // Removed participantId parameter
    try {
      // Only decrement likeCount, no participant tracking
      const updatedGroup = await prisma.group.update({
        where: { id: Number(groupId) },
        data: {
          likeCount: {
            decrement: 1,
          },
        },
      });

      // 추천 취소 후 뱃지 자동 갱신
      await this.badgeService.autoUpdateBadges(groupId);

      return updatedGroup;

    } catch (error) {
      console.error('그룹 추천 취소 중 오류 발생:', error);
      throw error;
    }
  }
}

export default GroupService;