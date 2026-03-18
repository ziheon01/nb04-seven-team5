import express from "express";
import GroupController from '../controllers/groupController.js';
import upload from '../middlewares/upload.js';
import * as groupValidator from '../middlewares/validation/groupValidator.js'

const router = express.Router();
const groupController = new GroupController();

router.post('/', upload.single('groupPhoto'), groupValidator.validateGroupCreate, groupController.createGroup);
router.get('/', groupValidator.validateGroupQuery, groupController.getGroups);

router.get('/:groupId',
    groupValidator.validateGroupIdParam,
    groupController.getGroupDetail);
router.patch('/:groupId',
    groupValidator.validateGroupIdParam,
    groupValidator.validateGroupUpdate,
    groupController.updateGroup);
router.delete('/:groupId',
    groupValidator.validateGroupIdParam,
    groupValidator.validateGroupDeleteBody,
    groupController.deleteGroup);

router.post('/:groupId/likes',
    groupValidator.validateGroupIdParam,
    groupController.likeGroup);
router.delete('/:groupId/likes',
    groupValidator.validateGroupIdParam,
    groupController.unlikeGroup);

export default router;