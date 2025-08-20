import express from 'express';
import { getRanks } from '../rankModule/rankController.js';

const [MINUTE, ONE_DAY] = [60 * 1_000, 24 * 60 * MINUTE]

//Note: 기간 필터 미들웨어
function getMonth() {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return { startOfMonth, startOfNextMonth };
}

function dateFilter(req, res, next) {
  const duration = req.query.duration;
  const now = new Date();

  if (duration === 'weekly') {
    const weeklyFilter = new Date(now.getTime() - 7 * ONE_DAY);
    req.dateFilter = { createdAt: { gte: weeklyFilter } };
  } else if (duration === 'monthly') {
    const { startOfMonth, startOfNextMonth } = getMonth();
    req.dateFilter = { createdAt: { gte: startOfMonth, lt: startOfNextMonth } };
  } else {
    req.dateFilter = {};
  }
  
  next();
}

const router = express.Router();

router.get('/groups/:groupId/rank', dateFilter, getRanks);

export default router;
