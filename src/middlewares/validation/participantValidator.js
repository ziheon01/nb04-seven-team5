import { z } from 'zod';
import { groupIdParamSchema, validateGroupIdParam } from '../validation/groupValidator.js';
import { HTTP } from '../../const/http.js';
import { ERROR } from '../../const/error.js';

export { validateGroupIdParam };

// 참가자 ID 유효성 검증 스키마
export const participantIdSchema = z.object({
    participantId: z.preprocess(
        val => Number(val),
        z.number({
            required_error: ERROR.REQUIRED('groupId'),
            invalid_type_error: ERROR.MUST_BE_INT('groupID'),
        })
            .int(ERROR.MUST_BE_INT('participantId'))
            .positive('Participant ID must be a positive number.'),
)});

// 참가자 ID 유효성 검증 미들웨어
export const validateParticipantIdBody = (req, res, next) => {
    const result = participantIdSchema.safeParse(req.body);
    if (!result.success) {
        const errors = result.error.errors.map(err => ({
            path: err.path.join('.'),
            message: err.message,
        }));
        return res.status(HTTP.BAD_REQUEST).json({ errors });
    } else {
        req.parsedBody = result.data
        next();
    }
};

// 참가자 가입/탈퇴 body (nickname, password) 스키마
export const participantBodySchema = z.object({
    nickname: z.string().min(1, ERROR.LIMIT_MIN('nickname',1)).max(20, ERROR.LIMIT_MAX('nickname',20)),
    password: z.string().min(1, ERROR.LIMIT_MIN('password',1)).max(20, ERROR.LIMIT_MAX('password',20)),
});

// 참가자 body 유효성 검사 미들웨어
export const validateParticipantBody = (req, res, next) => {
    const result = participantBodySchema.safeParse(req.body);
    if (!result.success) {
        const errors = result.error.errors.map(err => ({
            path: err.path.join('.'),
            message: err.message,
        }));
        return res.status(HTTP.BAD_REQUEST).json({ errors });
    } else {
        req.parsedBody = result.data
        next();
    }
};
