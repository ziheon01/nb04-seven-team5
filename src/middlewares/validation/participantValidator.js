import { z } from 'zod';
import { groupIdParamSchema, validateGroupIdParam } from '../validation/groupValidator.js';

export { validateGroupIdParam };

// 참가자 ID 유효성 검증 스키마
export const participantIdSchema = z.object({
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
    } else {
        req.body = result.data
        next();
    };
};

// 참가자 가입/탈퇴 body (nickname, password) 스키마
export const participantBodySchema = z.object({
    nickname: z.string().min(1, "nickname은 필수 입력값입니다.").max(20, "nickname은 20자 이내여야 합니다."),
    password: z.string().min(1, "password는 필수 입력값입니다.").max(20, "password는 20자 이내여야 합니다."),
});

// 참가자 body 유효성 검사 미들웨어
export const validateParticipantBody = (req, res, next) => {
    const result = participantBodySchema.safeParse(req.body);
    if (!result.success) {
        const errors = result.error.errors.map(err => ({
            path: err.path.join('.'),
            message: err.message,
        }));
        return res.status(400).json({ errors });
    } else {
        req.body = result.data
        next();
    };
};
