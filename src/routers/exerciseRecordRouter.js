import express from 'express';
import ExerciseRecordController from '../controllers/exerciseRecordController.js';
import * as exerciseRecordValidtor from "../middlewares/validation/exerciseRecordValidator.js";


const router = express.Router();
const exerciseRecordController = new ExerciseRecordController();

// 운동 기록 생성
router.post('/:groupId/records',
    exerciseRecordValidtor.validateGroupIdParam,
    exerciseRecordValidtor.validateExerciseRecord,
    exerciseRecordController.createRecord);

// 운동 기록 목록 조회
router.get('/:groupId/records',
    exerciseRecordValidtor.validateGroupIdParam,
    exerciseRecordValidtor.validateExerciseRecordQuery,
    exerciseRecordController.getRecords);

export default router;
