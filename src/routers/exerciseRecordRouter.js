import express from "express";
import upload from "../middlewares/upload.js";
import * as exerciseRecordValidator from "../middlewares/validation/exerciseRecordValidator.js";

const router = express.Router();

// 운동 기록 생성
router.post(
  '/:groupId/records',
  upload.array('participantPhoto', 3), // 1) multer 실행
  validateExerciseRecord,              // 2) 값 검증 + photoUrl 주입
  exerciseRecordValidator.validateExerciseRecordQuery,
  exerciseRecordController.createRecord // 3) DB 저장
);

// 운동 기록 목록 조회
router.get(
  '/:groupId/records',
  exerciseRecordValidator.validateGroupIdParam,
  exerciseRecordValidator.validateExerciseRecordQuery,
  exerciseRecordController.getRecords
);

export default router;