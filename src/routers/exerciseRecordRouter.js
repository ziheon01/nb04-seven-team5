import express from 'express';
import ExerciseRecordController from '../controllers/exerciseRecordController.js';

const router = express.Router();
const exerciseRecordController = new ExerciseRecordController();

// 운동 기록 생성
router.post('/group/:groupId/records', exerciseRecordController.createRecord);

// 운동 기록 목록 조회
router.get('/group/:groupId/records', exerciseRecordController.getRecords);

// 운동 기록 상세 조회
router.get('/group/:groupId/records/:recordId', exerciseRecordController.getRecordDetail);

export default router;
