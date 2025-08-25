import BadgeService from '../services/badgeService.js';

class BadgeController {
  constructor() {
    this.badgeService = new BadgeService();
  }

  updateGroupBadges = async (req, res, next) => {
    try {
      const groupId = Number(req.params.groupId);

      if (!groupId || isNaN(groupId)) {
        return res.status(400).json({ error: 'Invalid or missing groupId parameter' });
      }

      // 1. 배지 상태 계산
      const badgeStatuses = await this.badgeService.computeBadgeStatuses(groupId);

      // 2. DB 상태 업데이트
      await this.badgeService.updateBadgeStatus(groupId, badgeStatuses);

      // 3. 성공 응답
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
