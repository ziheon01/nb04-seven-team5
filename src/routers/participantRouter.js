import express from 'express';
import ParticipantController from '../controllers/participantController.js';

const router = express.Router();
const participantController = new ParticipantController();

router.post('/:groupId/participants', participantController.joinGroup);
router.delete('/:groupId/participants', participantController.leaveGroup);

export default router;
