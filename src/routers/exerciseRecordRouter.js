import express from 'express';
import ExerciseRecordController from '../controllers/exerciseRecordController.js';
import upload from '../middlewares/upload.js';

const router = express.Router();
const exerciseRecordController = new ExerciseRecordController();

// 운동 기록 생성
router.post(
  '/:groupId/records',
  upload.array('participantPhoto', 3), // 최대 3장까지 업로드
  exerciseRecordController.createRecord
);
// 운동 기록 목록 조회
router.get('/:groupId/records', exerciseRecordController.getRecords);

export default router;
