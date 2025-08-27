import { PrismaClient } from '../../generated/prisma/index.js';
import { pagination } from '../utils/pagination.js';
import { GroupService_orderByClause } from '../utils/orderByClause.js'
import { ERROR } from '../const/errorMessage.js';
import { checkGroupId } from '../utils/validation.js';
import { checkGroupAndOwner } from '../utils/checkGroup_Owner.js';

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
      console.error(ERROR.CREATION_FAILED('group'), error);
      throw error; // 컨트롤러로 에러 전달
    }
  }

  getGroups = async (options) => {
    const { page, limit, order, orderBy, search } = options;
    const { skip, take } = pagination(page, limit)

    const where = {};
    if (search) {
      where.groupName = {
        contains: search,
        mode: 'insensitive', // 대소문자 구분 없이 검색
      };
    }
    const orderByClause = GroupService_orderByClause(orderBy,order)

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
      console.error(ERROR.FETCH_FAILED('group'), error);
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
      await checkGroupAndOwner(groupId,ownerPassword);

      const updatedGroup = await prisma.group.update({
        where: { id: groupId },
        data: dataToUpdate,
      });

      return updatedGroup;
      
    } catch (error) {
      console.error(ERROR.UPDATE_FAILED('group'), error);
      throw error;
    }
  }
  // 
  async deleteGroup(groupId, ownerPassword) {
    try {
      await checkGroupAndOwner(groupId, ownerPassword);
      
      await prisma.group.delete({
        where: {id : groupId},
      });
      return;
    } catch(error) {
        console.error(ERROR.DELETION_FAILED('group'), error);
        throw error;
    }
  }

  // 그룹 추천 로직 추가
  likeGroup = async (groupId, participantId) => {
    try {
        // 1. 이미 추천했는지 확인 (unique 제약조건 활용)
        const existingLike = await prisma.like.findUnique({
            where: {
                groupId_participantId: { // schema.prisma에 정의된 복합 유니크 키
                    groupId: groupId,
                    participantId: participantId,
                },
            },
        });

        if (existingLike) {
            throw new Error(ERROR.ALREADY_LIKED); // 이미 추천한 경우 에러 발생
        }

        // 2. 트랜잭션 시작: Like 기록 생성 및 Group likeCount 증가
        const [newLike, updatedGroup] = await prisma.$transaction([
            prisma.like.create({
                data: {
                    groupId: groupId,
                    participantId: participantId,
                },
            }),
            prisma.group.update({
                where: { id: groupId },
                data: {
                    likeCount: {
                        increment: 1,
                    },
                },
            }),
        ]);

        // 3. 업데이트된 그룹 정보 반환 (컨트롤러에서 사용)
        // 필요하다면, 여기서 updatedGroup을 더 상세하게 include 할 수 있습니다.
        return updatedGroup;

    } catch (error) {
        console.error(ERROR.CREATION_FAILED('like'), error);

        throw error;
    }
  }

  // 그룹 추천 취소 로직 추가
  unlikeGroup = async (groupId, participantId) => {
    try {
        // 1. 추천 기록이 존재하는지 확인
        const existingLike = await prisma.like.findUnique({
            where: {
                groupId_participantId: { // schema.prisma에 정의된 복합 유니크 키
                    groupId: groupId,
                    participantId: participantId,
                },
            },
        });

        if (!existingLike) {
            throw new Error(ERROR.NOT_FOUND('like')); // 추천 기록이 없는 경우 에러 발생
        }

        // 2. 트랜잭션 시작: Like 기록 삭제 및 Group likeCount 감소
        const [deletedLike, updatedGroup] = await prisma.$transaction([
            prisma.like.delete({
                where: {
                    groupId_participantId: { // schema.prisma에 정의된 복합 유니크 키
                        groupId: groupId,
                        participantId: participantId,
                    },
                },
            }),
            prisma.group.update({
                where: { id: groupId },
                data: {
                    likeCount: {
                        decrement: 1,
                    },
                },
            }),
        ]);

        // 3. 업데이트된 그룹 정보 반환
        return updatedGroup;

    } catch (error) {
        console.error(ERROR.DELETION_FAILED('like'), error);
        throw error;
    }
  }
}

export default GroupService;