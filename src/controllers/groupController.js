import GroupService from '../services/groupService.js';
import { HTTP_STATUS } from '../const/http_status.js';
import { ERROR } from '../const/errorMessage.js';
import { options } from '../const/orderBy.js';
import { checkGroupId, checkOwnerPassword, checkParticipantId } from '../utils/validation.js';

class GroupController {
  constructor() {
    this.groupService = new GroupService();
  }

  createGroup = async (req, res, next) => {
    // 텍스트 필드는 req.body에서, 파일 정보는 req.file에서 가져옵니다.
    const groupDataFromText = req.body;
    // 파일이 업로드 되었다면 그 경로를, 아니라면 null을 photoUrl로 사용합니다.
    const photoUrl = req.file ? req.file.path : null;

    try {
      // groupData 객체를 서비스에 넘겨주기 전에, photoUrl을 포함하여 완전한 객체로 만듭니다.
      const groupData = {
        ...groupDataFromText,
        goalRep: parseInt(groupDataFromText.goalRep, 10), // form-data로 받은 숫자는 문자열일 수 있으므로 변환
        tags: Array.isArray(groupDataFromText.tags) ? groupDataFromText.tags : [groupDataFromText.tags], // 태그가 하나만 올 경우를 대비
        photoUrl: photoUrl
      };

      // 필수 필드 유효성 검사 (photoUrl은 이제 필수가 아님)
      if (!groupData.name || !groupData.description || groupData.goalRep === undefined || !groupData.discordWebhookUrl || !groupData.discordInviteUrl || !groupData.ownerNickname || !groupData.ownerPassword) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({ message: ERROR.ALL_FILEDS_ARE_REQUIRED });
      }

      const newGroup = await this.groupService.createGroup(groupData);
      res.status(HTTP_STATUS.CREATED).json(newGroup);
    } catch (error) {
      next(error); // Global Error Handler로 전달
    }
  }

  getGroups = async (req, res, next) => {
    const { page = 1, limit = 10, order = 'desc', orderBy = 'createdAt', search } = req.query;

    try {
      // 유효성 검사: page, limit은 숫자인지
      if (isNaN(parseInt(page)) || isNaN(parseInt(limit))) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: ERROR.MUST_BE_INT('page','limit')});
      }

      // 유효성 검사: order는 'asc' 또는 'desc'인지
      if (!['asc', 'desc'].includes(order.toLowerCase())) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({ path: 'order', message: 'Order must be \'asc\' or \'desc\'.' });
      }

      // 유효성 검사: orderBy는 유효한 값인지
      const validOrderBy = ['likeCount', 'participantCount', 'createdAt']; // likeCount, participantCount는 아직 구현 안됨
      if (!validOrderBy.includes(orderBy)) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({ path: 'orderBy', message: `The orderBy parameter must be one of the following values: [${validOrderBy.map(v => `'${v}'`).join(', ')}]` });
      }

      const { groups, total } = await this.groupService.getGroups(options(page, limit, order, orderBy, search));
      res.status(HTTP_STATUS.OK).json({ data: groups, total });
    } catch (error) {
      next(error);
    }
  }

  getGroupDetail = async (req, res, next) => {
    const { groupId } = req.params;

    try {
      // groupId 유효성 검사: 숫자인지
      checkGroupId(groupId)

      const group = await this.groupService.getGroupDetail(parseInt(groupId));

      if (!group) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({ message:ERROR.NOT_FOUND('groupId') });
      }

      res.status(HTTP_STATUS.OK).json(group);
    } catch (error) {
      next(error);
    }
  }

  updateGroup = async (req, res, next) => {
    const { groupId } = req.params;
    const updateData = req.body;
    const { ownerPassword, ...dataToUpdate } = req.body;

    try {
      // groupId 유효성 검사
      // checkGroupId(groupId)
      if (isNaN(parseInt(groupId))) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: ERROR.MUST_BE_INT('groupId') });
      }
      // 

      // ownerPassword 필수 검사
      // checkOwnerPassword(ownerPassword); 
      if (!ownerPassword) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: ERROR.OWNER_WRONG_PASSWORD });
      }

      // 업데이트할 필드 유효성 검사 (선택적 필드이므로, 존재하는 경우에만 타입 검사)
      if (updateData.groupName !== undefined && typeof updateData.groupName !== 'string') return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: ERROR.INVALID_TYPE('groupName')});
      if (updateData.description !== undefined && typeof updateData.description !== 'string') return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: ERROR.INVALID_TYPE('description')});
      if (updateData.photoUrl !== undefined && typeof updateData.photoUrl !== 'string') return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: ERROR.INVALID_TYPE('photoUrl')});
      if (updateData.goalRep !== undefined && (typeof updateData.goalRep !== 'number' || !Number.isInteger(updateData.goalRep))) return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: ERROR.INVALID_TYPE('goalRep') });
      if (updateData.discordWebhookUrl !== undefined && typeof updateData.discordWebhookUrl !== 'string') return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: ERROR.INVALID_TYPE('discordWebhookUrl')});
      if (updateData.discordInviteUrl !== undefined && typeof updateData.discordInviteUrl !== 'string') return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: ERROR.INVALID_TYPE('discordInviteUrl')});
      if (updateData.tag !== undefined && (!Array.isArray(updateData.tag) || !updateData.tag.every(tag => typeof tag === 'string'))) return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: ERROR.INVALID_TYPE('tag')});
      if (updateData.ownerNickname !== undefined && typeof updateData.ownerNickname !== 'string') return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: ERROR.INVALID_TYPE('ownerNickname')});
      // ownerPassword는 인증용이므로 업데이트 데이터에서 제외
      const dataToUpdate = { ...updateData };
      delete dataToUpdate.ownerPassword;

      const updatedGroup = await this.groupService.updateGroup(parseInt(groupId), dataToUpdate, ownerPassword);

      res.status(HTTP_STATUS.OK).json(updatedGroup);
    } catch (error) {
      if (error.message === ERROR.NOT_FOUND('group')) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({ message: error.message });
      }
      if (error.message === ERROR.OWNER_WRONG_PASSWORD) {
        return res.status(HTTP_STATUS.FORBIDDEN).json({ message: error.message }); // 403 Forbidden
      }
      next(error);
    }
  }

  deleteGroup = async (req, res, next) => {
    const { groupId } = req.params;
    const { ownerPassword } = req.body; // 비밀번호 인증을 위해 ownerPassword 추출

    try {
      // groupId 유효성 검사
      checkGroupId(groupId)

      // ownerPassword 필수 검사
      checkOwnerPassword(ownerPassword)

      await this.groupService.deleteGroup(parseInt(groupId), ownerPassword);

      res.status(HTTP_STATUS.NOT_CONTENT).send(); // 204 No Content: 성공적으로 처리되었지만 응답 본문이 없음
    } catch (error) {
      if (error.message === ERROR.GROUP) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({ message: error.message });
      }
      if (error.message === ERROR.OWNER_WRONG_PASSWORD) {
        return res.status(HTTP_STATUS.FORBIDDEN).json({ message: error.message }); // 403 Forbidden
      }
      next(error);
    }
  }

  // 그룹 추천 API 핸들러 추가
  likeGroup = async (req, res, next) => {
    const groupId = parseInt(req.params.groupId);
    const { participantId } = req.body; // 누가 추천했는지 (요청 Body에서 받음)

    try {
        // 유효성 검사
        const parsedGroupId = checkGroupId(groupId);
        const parsedParticipantId = checkParticipantId(participantId);

        const updatedGroup = await this.groupService.likeGroup(parsedGroupId, parsedParticipantId);
        res.status(HTTP_STATUS.OK).json(updatedGroup); // 또는 201 Created
    } catch (error) {
        // 이미 추천한 경우 (409 Conflict) 또는 다른 에러 처리
        if (error.message === ERROR.ALREADY_LIKED) {
            return res.status(HTTP_STATUS.CONFLICT).json({ message: error.message });
        }
        next(error);
    }
  }

  // 그룹 추천 취소 API 핸들러 추가
  unlikeGroup = async (req, res, next) => {
    const { groupId } = req.params;
    const { participantId } = req.body; // 누가 추천 취소했는지 (요청 Body에서 받음)

    try {
        // 유효성 검사 (likeGroup과 동일)
        const parsedGroupId = checkGroupId(groupId);
        const parsedParticipantId = checkParticipantId(participantId);

        const updatedGroup = await this.groupService.unlikeGroup(parsedGroupId, parsedParticipantId);
        res.status(HTTP_STATUS.OK).json(updatedGroup); // 또는 204 No Content
    } catch (error) {
        // 추천 기록이 없는 경우 (404 Not Found) 또는 다른 에러 처리
        if (error.message === ERROR.NOT_FOUND('like')) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: error.message });
        }
        next(error);
    }
  }
}

export default GroupController;
