import { Request, Response, NextFunction } from 'express';
import BadgeService from '../services/badgeService.js';

class BadgeController {
  private badgeService: BadgeService;

  constructor() {
    this.badgeService = new BadgeService();
  }

  updateGroupBadges = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const groupId = Number(req.params.groupId);

      const badgeStatuses = await this.badgeService.computeBadgeStatuses(groupId);

      await this.badgeService.updateBadgeStatus(groupId, badgeStatuses);

      res.status(200).json({
        message: 'Badge status updated successfully',
        badges: badgeStatuses,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default BadgeController;