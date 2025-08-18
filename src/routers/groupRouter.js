import express from "express";
import GroupController from '../controllers/groupController.js';

const router = express.Router();
const groupController = new GroupController();

router.post('/', groupController.createGroup);
router.get('/', groupController.getGroups);
router.get('/:groupId', groupController.getGroupDetail);
router.put('/:groupId', groupController.updateGroup);
router.delete('/:groupId', groupController.deleteGroup);

export default router;