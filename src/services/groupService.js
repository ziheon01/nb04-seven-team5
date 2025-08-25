import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();

class GroupService {
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
  // 
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