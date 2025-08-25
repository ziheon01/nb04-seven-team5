import express from 'express';
import BadgeController from '../controllers/badgeController.js';

const router = express.Router();
const badgeController = new BadgeController();

// 배지 상태 업데이트 라우트
router.post('/:groupId/badges/update', badgeController.updateGroupBadges);

export default router;