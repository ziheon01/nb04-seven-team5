import { z } from 'zod';
import { groupIdParamSchema, validateGroupIdParam } from '../validation/groupValidator.js';

export { validateGroupIdParam };

// 참가자 ID 유효성 검증 스키마
export const participantIdBodySchema = z.object({
    participantId: z.preprocess(
        (val) => {
            // If val is undefined, null, or empty string, return undefined so z.number().optional() can handle it
            if (val === undefined || val === null || val === '') {
                return undefined;
            }
            // If it's a string, try to convert to number
            if (typeof val === 'string') {
                const num = Number(val);
                // If conversion results in NaN, return undefined to let Zod handle it as invalid number
                return isNaN(num) ? undefined : num;
            }
            return val; // Let Zod handle if it's already a number or other type
        },
        z.number({
            required_error: 'Participant ID is required.', // Corrected message
            invalid_type_error: 'Participant ID must be a number.', // Corrected message
        })
            .int('Participant ID must be an integer.')
            .positive('Participant ID must be a positive number.')
    ),
});

// 참가자 ID 유효성 검증 미들웨어
export const validateParticipantIdBody = (req, res, next) => {
    const result = participantIdBodySchema.safeParse(req.body);
    console.log('Validation result.success:', result.success);
    console.log('Validation result.error:', result.error); // Crucial for debugging
    if (!result.success) {
        // Add robust check for result.error and result.error.errors
        const errors = (result.error && result.error.errors) ? result.error.errors.map(err => ({
            path: err.path.join('.'),
            message: err.message,
        })) : [{ path: 'validation', message: 'Unknown validation error or malformed Zod error object.' }];
        return res.status(400).json({ errors });
    }
    next();
};

// 참가자 가입/탈퇴 body (nickname, password) 스키마
export const participantBodySchema = z.object({
    nickname: z.preprocess(
        (val) => String(val), // Ensure it's a string
        z.string().min(1, "nickname은 필수 입력값입니다.").max(20, "nickname은 20자 이내여야 합니다.")
    ),
    password: z.preprocess(
        (val) => String(val), // Ensure it's a string
        z.string().min(1, "password는 필수 입력값입니다.").max(20, "password는 20자 이내여야 합니다.")
    ),
});

// 참가자 body 유효성 검사 미들웨어
export const validateParticipantBody = (req, res, next) => {
    console.log('req.body in validateParticipantBody:', req.body); // Keep this for context
    const result = participantBodySchema.safeParse(req.body);
    console.log('Validation result.success:', result.success);
    console.log('Validation result.error:', result.error); // Crucial for debugging
    if (!result.success) {
        // Add robust check for result.error and result.error.errors
        const errors = (result.error && result.error.errors) ? result.error.errors.map(err => ({
            path: err.path.join('.'),
            message: err.message,
        })) : [{ path: 'validation', message: 'Unknown validation error or malformed Zod error object.' }];
        return res.status(400).json({ errors });
    }
    next();
};