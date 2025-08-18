import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();

class GroupService {
  createGroup = async (groupData) => {
    const { name, description, photoUrl, goalRep, discordWebhookUrl, discordInviteUrl, tags, ownerNickname, ownerPassword } = groupData;

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
          // tags와 owner Participant는 다음 단계에서 처리
        },
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
    } else if (orderBy === 'likeCount') {
      // TODO: likeCount 정렬 로직 구현 (Like 모델 관계 필요)
      // 현재는 임시로 createdAt으로 대체
      orderByClause.createdAt = order;
    } else if (orderBy === 'participantCount') {
      // TODO: participantCount 정렬 로직 구현 (Participant 모델 관계 필요)
      // 현재는 임시로 createdAt으로 대체
      orderByClause.createdAt = order;
    }

    try {
      const groups = await prisma.group.findMany({
        skip,
        take,
        where,
        orderBy: orderByClause,
        // 필요한 관계 데이터 포함 (예: owner, participants, tags)
        include: {
          // owner: true, // owner는 Participant 모델에 연결되어야 함
          // participants: true,
          // tag: true,
        },
      });

      const total = await prisma.group.count({ where });

      return { groups, total };
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
          // 필요한 관계 데이터 포함 (예: owner, participants, tags)
          // owner: true,
          // participants: true,
          // tag: true,
        },
      });
      return group;
    } catch (error) {
      console.error('그룹을 가져오는 중 오류발생:', error);
      throw error;
    }
  }

  async updateGroup(groupId, dataToUpdate, ownerPassword) {
    try {
      const group = await prisma.group.findUnique({
        where: { id: groupId },
      });

      if (!group) {
        throw new Error('그룹이 없습니다');
      }

      // 비밀번호 인증 (현재 평문 비교 - 보안 취약)
      if (group.ownerPassword !== ownerPassword) {
        throw new Error('비밀번호가 틀립니다.');
      }

      const updatedGroup = await prisma.group.update({
        where: { id: groupId },
        data: dataToUpdate,
      });

      return updatedGroup;
    } catch (error) {
      console.error('그룹 업데이트 중 오류 발생:', error);
      throw error;
    }
  }

  async deleteGroup(groupId, ownerPassword) {
    try {
        const group = await prisma.group.findUnique({
            where: { id: groupId },
        });

        if(!group) {
            throw new Error("그룹이 존재 X");
        }

        //비밀번호 인증(현재 평문 비교 - 보안 취약)
        if (group.ownerPassword !== ownerPassword) {
            throw new Error("그룹장 비밀번호 틀림");
        }
        await prisma.group.delete({
            where: {id : groupId},
        });
        return;
    } catch(error) {
        console.error(" 삭제 중 에러 발생: ", error);
        throw error;
    }
  }
}

export default GroupService;