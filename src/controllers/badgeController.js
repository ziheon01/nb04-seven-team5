import { ERROR } from '../const/error.js';
import { HTTP } from '../const/http.js';
import BadgeService from '../services/badgeService.js';

class BadgeController {
  constructor() {
    this.badgeService = new BadgeService();
  }

  updateGroupBadges = async (req, res, next) => {
    try {
      const { groupId } = req.params;

      if (!groupId) {
        return res.status(HTTP.BAD_REQUEST).json(ERROR.INVALID_INPUT);
      }

      // 1. 배지 상태 계산
      const badgeStatuses = await this.badgeService.computeBadgeStatuses(groupId);

      // 2. DB 상태 업데이트
      await this.badgeService.updateBadgeStatus(groupId, badgeStatuses);

      // 3. 성공 응답
      res.status(HTTP.OK).json({
        message: 'Badge status updated successfully',
        badges: badgeStatuses,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default BadgeController;
