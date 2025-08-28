import express from "express";
import GroupController from '../controllers/groupController.js';
import upload from '../middlewares/upload.js'; // upload 미들웨어 임포트
import * as groupValidator from '../middlewares/validation/groupValidator.js'
import * as participantValidtor from '../middlewares/validation/participantValidator.js'

const router = express.Router();
const groupController = new GroupController();

// 그룹 생성 경로에 upload.single('groupPhoto'), 유효성 검사 미들웨어 추가
router.post('/', 
    upload.single('groupPhoto'),
    groupValidator.validateGroupCreate,
    groupController.createGroup);
router.get('/', groupValidator.validateGroupQuery,
    groupController.getGroups);

router.get('/:groupId',
    groupValidator.validateGroupIdParam,
    groupController.getGroupDetail);
router.put('/:groupId',
    groupValidator.validateGroupIdParam,
    groupValidator.validateGroupUpdate,
    groupController.updateGroup);
router.delete('/:groupId',
    groupValidator.validateGroupIdParam,
    groupValidator.validateGroupDeleteBody,
    groupController.deleteGroup);

// 그룹 추천 API 추가
router.post('/:groupId/like',
    groupValidator.validateGroupIdParam,
    participantValidtor.validateParticipantIdBody,
    groupController.likeGroup);
// 그룹 추천 취소 API 추가
router.delete('/:groupId/like',
    groupValidator.validateGroupIdParam,
    participantValidtor.validateParticipantIdBody,
    groupController.unlikeGroup);

export default router;