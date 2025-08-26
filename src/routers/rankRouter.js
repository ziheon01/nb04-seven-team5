import express from 'express';
import RankController from '../controllers/rankController.js';
import { dateFilter } from '../middlewares/dateFilter.js';
import { adjustPagination } from '../middlewares/pagination.js';

const router = express.Router();
const rankController = new RankController();

router.get(
  '/:groupId/ranks',
  dateFilter,
  adjustPagination,
  rankController.getRanks
);

export default router;