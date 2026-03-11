import { Request, Response, NextFunction } from 'express';
import GroupService from '../services/groupService.js';
import { toGroupResponse } from '../utils/responseMapper.js'; 

class GroupController {
  private groupService: GroupService;

  constructor() {
    this.groupService = new GroupService();
  }

  createGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const groupData = req.body; 
      const newGroup = await this.groupService.createGroup(groupData);
      res.status(201).json(toGroupResponse(newGroup));
    } catch (error) {
      next(error); 
    }
  }

  getGroups = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { groups, total } = await this.groupService.getGroups(req.query as any);
      const formattedGroups = groups.map(group => toGroupResponse(group));
      res.status(200).json({ data: formattedGroups, total });
    } catch (error) {
      next(error);
    }
  }

  getGroupDetail = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { groupId } = req.params;
      const group = await this.groupService.getGroupDetail(groupId as any);

      if (!group) {
        return res.status(404).json({ message: 'Group not found.' });
      }

      res.status(200).json(toGroupResponse(group));
    } catch (error) {
      next(error);
    }
  }

  updateGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { groupId } = req.params;
      const updateData = req.body;

      const updatedGroup = await this.groupService.updateGroup(groupId as any, updateData, updateData.ownerPassword);
      res.status(200).json(toGroupResponse(updatedGroup));
    } catch (error: any) {
      if (error.message === 'Group not found.') {
        return res.status(404).json({ message: error.message });
      }
      if (error.message === 'Invalid owner password.') {
        return res.status(403).json({ message: error.message }); 
      }
      next(error);
    }
  }

  deleteGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { groupId } = req.params;
      const { ownerPassword } = req.body; 

      await this.groupService.deleteGroup(groupId as any, ownerPassword);
      res.status(204).send(); 
    } catch (error: any) {
      if (error.message === 'Group not found.') {
        return res.status(404).json({ message: error.message });
      }
      if (error.message === 'Invalid owner password.') {
        return res.status(403).json({ message: error.message }); 
      }
      next(error);
    }
  }

  likeGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { groupId } = req.params;
        const cookieName = `liked_group_${groupId}`;

        if (req.cookies?.[cookieName]) {
            await this.groupService.unlikeGroup(groupId as any);
            res.cookie(cookieName, '', { maxAge: 0 });
            res.status(200).json({ message: 'Like removed.' });
        } else {
            const updatedGroup = await this.groupService.likeGroup(groupId as any);
            res.cookie(cookieName, 'true', { maxAge: 31536000000 });
            res.status(200).json(toGroupResponse(updatedGroup));
        }
    } catch (error) {
        next(error);
    }
  }

  unlikeGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { groupId } = req.params;
        const cookieName = `liked_group_${groupId}`;

        await this.groupService.unlikeGroup(groupId as any);
        res.cookie(cookieName, '', { maxAge: 0 });
        res.status(200).json({ message: 'Like removed successfully.' });
    } catch (error) {
        next(error);
    }
  }
}

export default GroupController;