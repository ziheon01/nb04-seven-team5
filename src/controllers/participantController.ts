import { Request, Response, NextFunction } from 'express';
import ParticipantService from '../services/participantService.js';

export class ParticipantController {
  private participantService: ParticipantService;

  constructor() {
    this.participantService = new ParticipantService();
  }

  joinGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const participantData = req.body;
      const { groupId } = req.params;

      const updatedGroup = await this.participantService.joinGroup(groupId as any, participantData);
      return res.status(201).json({ updatedGroup });
    } catch (error: any) {
      if (error.message === "Nickname already exists in this group") {
        return res.status(409).json({ message: error.message });
      }
      if (error.message === "Group not found") {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  leaveGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const participantData = req.body;
      const { groupId } = req.params;

      await this.participantService.leaveGroup(groupId as any, participantData);
      return res.status(204).send();

    } catch (error: any) {
      if (error.message === "Participant not found") {
        return res.status(404).json({ message: error.message });
      }
      if (error.message === "Group not found") {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }
}

export default ParticipantController;