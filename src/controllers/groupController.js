import GroupService from '../services/groupService.js';
// ★ [추가] 만들어둔 매퍼 가져오기
import { toGroupResponse } from '../utils/responseMapper.js'; 

class GroupController {
  constructor() {
    this.groupService = new GroupService();
  }

  createGroup = async (req, res, next) => {
    const groupData = req.body; 

    try {
      groupData.goalRep = parseInt(groupData.goalRep, 10);
      groupData.tags = Array.isArray(groupData.tags) ? groupData.tags : [groupData.tags];

      const newGroup = await this.groupService.createGroup(groupData);
      
      // ★ [수정] DB 날것의 데이터 -> 프론트 규격으로 변환
      res.status(201).json(toGroupResponse(newGroup));
    } catch (error) {
      next(error); 
    }
  }

  getGroups = async (req, res, next) => {
    try {
      const page = parseInt(req.query.page, 10) || 1;
      const limit = parseInt(req.query.limit, 10) || 10;
      const { order, orderBy, search } = req.query;

      const options = { page, limit, order, orderBy, search };

      const { groups, total } = await this.groupService.getGroups(options);
      
      // ★ [수정] 배열 안에 있는 그룹들을 하나씩 꺼내서 변환
      const formattedGroups = groups.map(group => toGroupResponse(group));
      
      // 프론트는 { data: [...], total: ... } 구조를 원함
      res.status(200).json({ data: formattedGroups, total });
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

      // ★ [수정] 변환 적용
      res.status(200).json(toGroupResponse(group));
    } catch (error) {
      next(error);
    }
  }

  updateGroup = async (req, res, next) => {
    try {
      const { groupId } = req.params;
      const updateData = req.body;

      const updatedGroup = await this.groupService.updateGroup(groupId, updateData, updateData.ownerPassword);

      // ★ [수정] 변환 적용
      res.status(200).json(toGroupResponse(updatedGroup));
    } catch (error) {
      if (error.message === 'Group not found.') {
        return res.status(404).json({ message: error.message });
      }
      if (error.message === 'Invalid owner password.') {
        return res.status(403).json({ message: error.message }); 
      }
      next(error);
    }
  }

  deleteGroup = async (req, res, next) => {
    try {
      const { groupId } = req.params;
      const { ownerPassword } = req.body; 

      await this.groupService.deleteGroup(groupId, ownerPassword);

      res.status(204).send(); 
    } catch (error) {
      if (error.message === 'Group not found.') {
        return res.status(404).json({ message: error.message });
      }
      if (error.message === 'Invalid owner password.') {
        return res.status(403).json({ message: error.message }); 
      }
      next(error);
    }
  }

  // 그룹 추천 및 취소 (토글) API 핸들러
  likeGroup = async (req, res, next) => {
    try {
        const { groupId } = req.params;
        const cookieName = `liked_group_${groupId}`;

        if (req.cookies[cookieName]) {
            await this.groupService.unlikeGroup(groupId);
            res.cookie(cookieName, '', { maxAge: 0 });
            // 취소는 메시지만 보내도 됨 (프론트 확인 필요, 일단 유지)
            res.status(200).json({ message: 'Like removed.' });
        } else {
            const updatedGroup = await this.groupService.likeGroup(groupId);
            res.cookie(cookieName, 'true', { maxAge: 31536000000 });
            
            // ★ [수정] 추천 후 업데이트된 그룹 정보도 규격에 맞춰서 반환
            res.status(200).json(toGroupResponse(updatedGroup));
        }
    } catch (error) {
        next(error);
    }
  }

  unlikeGroup = async (req, res, next) => {
    try {
        const { groupId } = req.params;
        const cookieName = `liked_group_${groupId}`;

        await this.groupService.unlikeGroup(groupId);
        res.cookie(cookieName, '', { maxAge: 0 });
        res.status(200).json({ message: 'Like removed successfully.' });
    } catch (error) {
        next(error);
    }
  }
}

export default GroupController;