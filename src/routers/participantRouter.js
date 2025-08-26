import express from 'express';
import ParticipantController from '../controllers/participantController.js';
import * as groupValidator from '../middlewares/validation/groupValidator.js'
import * as participantValidtor from '../middlewares/validation/participantValidator.js'

const router = express.Router();
const participantController = new ParticipantController();

router.post('/:groupId/participants', 
    groupValidator.validateGroupIdParam,
    participantValidtor.validateParticipantBody,
    participantController.joinGroup);
router.delete('/:groupId/participants', 
    groupValidator.validateGroupIdParam,
    participantValidtor.validateParticipantBody,
    participantController.leaveGroup);

export default router;
