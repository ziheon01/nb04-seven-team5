import { ERROR } from '../const/error.js';
import { HTTP } from '../const/http.js';
import GroupService from '../services/groupService.js';

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

      const newGroup = await this.groupService.createGroup(groupData);
      res.status(HTTP.CREATED).json(newGroup);
    } catch (error) {
      next(error); // Global Error Handler로 전달
    }
  }

  getGroups = async (req, res, next) => {
    //Note: 유효성에서 이미 기본 값 확인
    try {
      const { page, limit, order, orderBy, search } = req.query;

      const options = {
        page,
        limit,
        order,
        orderBy,
        search,
      };

      const { groups, total } = await this.groupService.getGroups(options);
      res.status(HTTP.OK).json({ data: groups, total });
    } catch (error) {
      next(error);
    }
  }

  getGroupDetail = async (req, res, next) => {
    const { groupId } = req.params;

    try {
      const group = await this.groupService.getGroupDetail(parseInt(groupId));

      if (!group) {
        return res.status(HTTP.NOT_FOUND).json({ message: ERROR.NOT_FOUND('group') });
      }

      res.status(HTTP.OK).json(group);
    } catch (error) {
      next(error);
    }
  }

  updateGroup = async (req, res, next) => {
    try {
      const { groupId } = req.parsedParams;
      const updateData = req.parsedBody;

      const updatedGroup = await this.groupService.updateGroup(groupId, updateData, updateData.ownerPassword);

      res.status(HTTP.OK).json(updatedGroup);
    } catch (error) {
      if (error.message === ERROR.NOT_FOUND('group')) {
        return res.status(HTTP.NOT_FOUND).json({ message: error.message });
      }
      if (error.message === ERROR.OWNER_WRONG_PASSWORD) {
        return res.status(HTTP.FORBIDDEN).json({ message: error.message }); // 403 Forbidden
      }
      next(error);
    }
  }

  deleteGroup = async (req, res, next) => {
    try {
      const { groupId } = req.parsedParams;
      const { ownerPassword } = req.parsedBody; // 비밀번호 인증을 위해 ownerPassword 추출

      await this.groupService.deleteGroup(groupId, ownerPassword);

      res.status(HTTP.NOT_CONTENT).send(); // 204 No Content: 성공적으로 처리되었지만 응답 본문이 없음
    } catch (error) {
      if (error.message === ERROR.NOT_FOUND('group')) {
        return res.status(HTTP.NOT_FOUND).json({ message: error.message });
      }
      if (error.message === ERROR.OWNER_WRONG_PASSWORD) {
        return res.status(HTTP.FORBIDDEN).json({ message: error.message }); // 403 Forbidden
      }
      next(error);
    }
  }

  // 그룹 추천 API 핸들러 추가
  likeGroup = async (req, res, next) => {
    try {
      const { groupId } = req.parsedParams;
      const { participantId } = req.parsedBody; // 누가 추천했는지 (요청 Body에서 받음)

      const updatedGroup = await this.groupService.likeGroup(groupId, participantId);

      res.status(HTTP.OK).json(updatedGroup); // 또는 201 Created
    } catch (error) {
      // 이미 추천한 경우 (409 Conflict) 또는 다른 에러 처리
      if (error.message === ERROR.ALREADY_LIKED) {
        return res.status(HTTP.CONFLICT).json({ message: error.message });
      }
      next(error);
    }
  }

  // 그룹 추천 취소 API 핸들러 추가
  unlikeGroup = async (req, res, next) => {
    try {
      const { groupId } = req.parsedParams;
      const { participantId } = req.parsedBody; // 누가 추천 취소했는지 (요청 Body에서 받음)

      const updatedGroup = await this.groupService.unlikeGroup(groupId, participantId);
      res.status(HTTP.OK).json(updatedGroup); // 또는 204 No Content
    } catch (error) {
      // 추천 기록이 없는 경우 (404 Not Found) 또는 다른 에러 처리
      if (error.message === ERROR.NOT_FOUND('like')) {
        return res.status(HTTP.NOT_FOUND).json({ message: error.message });
      }
      next(error);
    }
  }
}

export default GroupController;
