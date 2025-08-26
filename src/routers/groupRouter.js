import express from "express";
import GroupController from '../controllers/groupController.js';
import upload from '../middlewares/upload.js'; // upload 미들웨어 임포트
import * as groupValidator from '../middlewares/validation/groupValidator.js'

const router = express.Router();
const groupController = new GroupController();

// 그룹 생성 경로에 upload.single('groupPhoto'), 유효성 검사 미들웨어 추가
router.post('/', upload.single('groupPhoto'), groupValidator.validateGroupCreate, groupController.createGroup);
router.get('/', groupValidator.validateGroupQuery, groupController.getGroups);
router.get('/:groupId', groupController.getGroupDetail);
router.put('/:groupId', groupController.updateGroup);
router.delete('/:groupId', groupController.deleteGroup);
// 그룹 추천 API 추가
router.post('/:groupId/like', groupController.likeGroup);
// 그룹 추천 취소 API 추가
router.delete('/:groupId/like', groupController.unlikeGroup);

export default router;