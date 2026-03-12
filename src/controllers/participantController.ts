import { Request, Response, NextFunction } from 'express';
import ParticipantService from '../services/participantService.js';
import { ParticipantBodyDto } from '../middlewares/validation/participantValidator.js';

export class ParticipantController {
  private participantService: ParticipantService;

  constructor() {
    this.participantService = new ParticipantService();
  }

  joinGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const participantData = req.body as ParticipantBodyDto;
      const groupId = Number(req.params.groupId);

      const updatedGroup = await this.participantService.joinGroup(groupId, participantData);
      return res.status(201).json({ updatedGroup });
    } catch (error) {
      const err = error as Error;
      if (err.message === "Nickname already exists in this group") {
        return res.status(409).json({ message: err.message });
      }
      if (err.message === "Group not found") {
        return res.status(404).json({ message: err.message });
      }
      next(error);
    }
  }

  leaveGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const participantData = req.body as ParticipantBodyDto;
      const groupId = Number(req.params.groupId);

      await this.participantService.leaveGroup(groupId, participantData);
      return res.status(204).send();

    } catch (error) {
      const err = error as Error;
      if (err.message === "Participant not found") {
        return res.status(404).json({ message: err.message });
      }
      if (err.message === "Group not found") {
        return res.status(404).json({ message: err.message });
      }
      next(error);
    }
  }
}

export default ParticipantController;