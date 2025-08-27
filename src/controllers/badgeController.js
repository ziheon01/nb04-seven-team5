import BadgeService from '../services/badgeService.js';
import { HTTP_STATUS} from '../const/http_status.js'
import { ERROR } from '../const/errorMessage.js';

class BadgeController {
  constructor() {
    this.badgeService = new BadgeService();
  }

  updateGroupBadges = async (req, res, next) => {
    try {
      const groupId = Number(req.params.groupId);

      if (!groupId || isNaN(groupId)) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: ERROR.MUST_BE_INT('groupId') });
      }

      // 1. 배지 상태 계산
      const badgeStatuses = await this.badgeService.computeBadgeStatuses(groupId);

      // 2. DB 상태 업데이트
      await this.badgeService.updateBadgeStatus(groupId, badgeStatuses);

      // 3. 성공 응답
      res.status(HTTP_STATUS.OK).json({
        message: 'Badge status updated successfully',
        badges: badgeStatuses,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default BadgeController;
