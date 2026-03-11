import { Router } from 'express';
import ExerciseRecordController from '../controllers/exerciseRecordController.js';
import * as exerciseRecordValidtor from "../middlewares/validation/exerciseRecordValidator.js";
import upload from '../middlewares/upload.js';

const router: Router = Router();
const exerciseRecordController = new ExerciseRecordController();

// 운동 기록 생성
router.post('/:groupId/records',
    upload.array('photos', 3),
    exerciseRecordValidtor.validateGroupIdParam,
    exerciseRecordValidtor.validateCreateRecordBody,
    exerciseRecordController.createRecord);

// 운동 기록 목록 조회
router.get('/:groupId/records',
    exerciseRecordValidtor.validateGroupIdParam,
    exerciseRecordValidtor.validateExerciseRecordQuery,
    exerciseRecordController.getRecords);

// 운동 기록 상세 조회
router.get('/:groupId/records/:recordId',
    exerciseRecordValidtor.validateGroupIdParam,
    exerciseRecordController.getRecordDetail);

export default router;