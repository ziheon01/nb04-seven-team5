import { Request, Response, NextFunction } from 'express';
import GroupService from '../services/groupService.js';
import { toGroupResponse } from '../utils/responseMapper.js'; 
import { CreateGroupDto, GroupQueryDto, UpdateGroupDto } from '../middlewares/validation/groupValidator.js';

class GroupController {
  private groupService: GroupService;

  constructor() {
    this.groupService = new GroupService();
  }

  createGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const groupData = req.body as CreateGroupDto; 
      const newGroup = await this.groupService.createGroup(groupData);
      res.status(201).json(toGroupResponse(newGroup));
    } catch (error) {
      next(error); 
    }
  }

  getGroups = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = req.query as unknown as GroupQueryDto;
      const { groups, total } = await this.groupService.getGroups(query);
      const formattedGroups = groups.map(group => toGroupResponse(group));
      res.status(200).json({ data: formattedGroups, total });
    } catch (error) {
      next(error);
    }
  }

  getGroupDetail = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const groupId = Number(req.params.groupId);
      const group = await this.groupService.getGroupDetail(groupId);

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
      const groupId = Number(req.params.groupId);
      const updateData = req.body as UpdateGroupDto;

      const updatedGroup = await this.groupService.updateGroup(groupId, updateData, updateData.ownerPassword);
      res.status(200).json(toGroupResponse(updatedGroup));
    } catch (error) {
      const err = error as Error;
      if (err.message === 'Group not found.') {
        return res.status(404).json({ message: err.message });
      }
      if (err.message === 'Invalid owner password.') {
        return res.status(403).json({ message: err.message }); 
      }
      next(error);
    }
  }

  deleteGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const groupId = Number(req.params.groupId);
      const { ownerPassword } = req.body; 

      await this.groupService.deleteGroup(groupId, ownerPassword);
      res.status(204).send(); 
    } catch (error) {
      const err = error as Error;
      if (err.message === 'Group not found.') {
        return res.status(404).json({ message: err.message });
      }
      if (err.message === 'Invalid owner password.') {
        return res.status(403).json({ message: err.message }); 
      }
      next(error);
    }
  }

  likeGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const groupId = Number(req.params.groupId);
        const cookieName = `liked_group_${groupId}`;

        if (req.cookies?.[cookieName]) {
            await this.groupService.unlikeGroup(groupId);
            res.cookie(cookieName, '', { maxAge: 0 });
            res.status(200).json({ message: 'Like removed.' });
        } else {
            const updatedGroup = await this.groupService.likeGroup(groupId);
            res.cookie(cookieName, 'true', { maxAge: 31536000000 });
            res.status(200).json(toGroupResponse(updatedGroup));
        }
    } catch (error) {
        next(error);
    }
  }

  unlikeGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const groupId = Number(req.params.groupId);
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