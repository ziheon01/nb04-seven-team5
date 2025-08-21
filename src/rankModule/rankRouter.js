import express from 'express';
//TODO: 실제 경로 맞게 수정필요
import { getRanks } from '../rankModule/rankController.js';

const [MINUTE, ONE_DAY] = [60 * 1_000, 24 * 60 * MINUTE]
const [DEFAULT_PAGE, DEFAULT_LIMIT] = [1, 10];

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

//Note: 페이지네이션 미들웨어
function adjustPagination(req, res, next) {
  const page = parseInt(req.query.page, 10) || DEFAULT_PAGE;
  const limit = parseInt(req.query.limit, 10) || DEFAULT_LIMIT;

  req.pagination = {
    skip: (page - 1) * limit,
    take: limit,
    page,
    limit,
  };

  next();
}

const router = express.Router();

router.get('/groups/:groupId/ranks', dateFilter, adjustPagination, getRanks);

export default router;
