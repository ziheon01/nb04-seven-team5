import { z } from 'zod';
import { groupIdParamSchema, validateGroupIdParam } from '../validation/groupValidator.js';

export { validateGroupIdParam };

// 참가자 ID 유효성 검증 스키마
export const participantIdBodySchema = z.object({
    participantId: z.preprocess(
        val => Number(val),
        z.number({
            required_error: 'Group ID is required.',
            invalid_type_error: 'Group ID must be a number.',
        })
            .int('Participant ID must be an integer.')
            .positive('Participant ID must be a positive number.')
    ),
});

// 참가자 ID 유효성 검증 미들웨어
export const validateParticipantIdBody = (req, res, next) => {
  const result = participantIdBodySchema.safeParse(req.body);
  if (!result.success) {
    const errors = result.error.errors.map(err => ({
      path: err.path.join('.'),
      message: err.message,
    }));
    return res.status(400).json({ errors });
  }
  next();
};

