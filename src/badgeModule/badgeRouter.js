import express from 'express';
//TODO: 실제 경로 맞게 수정필요
import { updateGroupBadges } from '../controllers/badgeController.js'; 

const router = express.Router();

// 배지 상태 업데이트 API 엔드포인트
router.post('/groups/:groupId/badges/update', updateGroupBadges);

export default router;
