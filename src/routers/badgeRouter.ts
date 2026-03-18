import express from 'express';
import BadgeController from '../controllers/badgeController.js';
import * as badgeValidator from '../middlewares/validation/badgeValidator.js'

const router = express.Router();
const badgeController = new BadgeController();

router.post('/:groupId/badges/update', 
    badgeValidator.validateGroupIdParam,
    badgeController.updateGroupBadges);

export default router;