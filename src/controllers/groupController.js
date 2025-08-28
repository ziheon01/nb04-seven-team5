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
      res.status(201).json(newGroup);
    } catch (error) {
      next(error); // Global Error Handler로 전달
    }
  }

  getGroups = async (req, res, next) => {
    //Note: 유효성에서 이미 기본 값 확인
    try {
      // Ensure page and limit are numbers, as they come from req.query (strings)
      // The validation middleware should handle this, but adding explicit conversion as a safeguard.
      const page = parseInt(req.query.page, 10) || 1;
      const limit = parseInt(req.query.limit, 10) || 10;
      const { order, orderBy, search } = req.query;

      const options = {
        page,
        limit,
        order,
        orderBy,
        search,
      };

      const { groups, total } = await this.groupService.getGroups(options);
      res.status(200).json({ data: groups, total });
    } catch (error) {
      next(error);
    }
  }

  getGroupDetail = async (req, res, next) => {
    const { groupId } = req.params;

    try {
      const group = await this.groupService.getGroupDetail(parseInt(groupId));

      if (!group) {
        return res.status(404).json({ message: 'Group not found.' });
      }

      res.status(200).json(group);
    } catch (error) {
      next(error);
    }
  }

  updateGroup = async (req, res, next) => {
    try {
      const { groupId } = req.params;
      const updateData = req.body;

      const updatedGroup = await this.groupService.updateGroup(groupId, updateData, updateData.ownerPassword);

      res.status(200).json(updatedGroup);
    } catch (error) {
      if (error.message === 'Group not found.') {
        return res.status(404).json({ message: error.message });
      }
      if (error.message === 'Invalid owner password.') {
        return res.status(403).json({ message: error.message }); // 403 Forbidden
      }
      next(error);
    }
  }

  deleteGroup = async (req, res, next) => {
    try {
      const { groupId } = req.params;
      const { ownerPassword } = req.body; // 비밀번호 인증을 위해 ownerPassword 추출

      await this.groupService.deleteGroup(groupId, ownerPassword);

      res.status(204).send(); // 204 No Content: 성공적으로 처리되었지만 응답 본문이 없음
    } catch (error) {
      if (error.message === 'Group not found.') {
        return res.status(404).json({ message: error.message });
      }
      if (error.message === 'Invalid owner password.') {
        return res.status(403).json({ message: error.message }); // 403 Forbidden
      }
      next(error);
    }
  }

  // 그룹 추천 및 취소 (토글) API 핸들러
likeGroup = async (req, res, next) => {
    try {
        const { groupId } = req.params;
        // 각 그룹마다 고유한 쿠키 이름을 만듭니다 (예: 'liked_group_11')
        const cookieName = `liked_group_${groupId}`;

        // 1. 요청에 쿠키가 있는지 확인합니다.
        if (req.cookies[cookieName]) {
            // 2. 쿠키가 있다면 '좋아요'를 이미 누른 상태이므로, '좋아요 취소' 로직을 실행합니다.
            await this.groupService.unlikeGroup(groupId);
            // 응답을 보낼 때, 해당 쿠키를 삭제하라고 브라우저에 명령합니다.
            res.cookie(cookieName, '', { maxAge: 0 });
            res.status(200).json({ message: 'Like removed.' });
        } else {
            // 3. 쿠키가 없다면 처음 누르는 것이므로, '좋아요' 로직을 실행합니다.
            const updatedGroup = await this.groupService.likeGroup(groupId);
            // 응답을 보낼 때, '좋아요'를 눌렀다는 쿠키를 브라우저에 저장하라고 명령합니다. (유효기간 1년)
            res.cookie(cookieName, 'true', { maxAge: 31536000000 });
            res.status(200).json(updatedGroup);
        }
    } catch (error) {
        next(error);
    }
}

// DELETE API를 위한 핸들러도 동일하게 쿠키 기반으로 수정
unlikeGroup = async (req, res, next) => {
    try {
        const { groupId } = req.params;
        const cookieName = `liked_group_${groupId}`;

        // 이 API는 쿠키 존재 여부와 상관없이 항상 '좋아요 취소'를 실행
        await this.groupService.unlikeGroup(groupId);
        // 쿠키 삭제
        res.cookie(cookieName, '', { maxAge: 0 });
        res.status(200).json({ message: 'Like removed successfully.' });
    } catch (error) {
        next(error);
    }
}
}

export default GroupController;