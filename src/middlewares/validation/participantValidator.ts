import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { groupIdParamSchema, validateGroupIdParam } from './groupValidator.js';

export { validateGroupIdParam };

// 참가자 가입/탈퇴 body (nickname, password) 스키마
export const participantBodySchema = z.object({
    nickname: z.preprocess(
        (val) => String(val),
        z.string().min(1, "nickname은 필수 입력값입니다.").max(20, "nickname은 20자 이내여야 합니다.")
    ),
    password: z.preprocess(
        (val) => String(val),
        z.string().min(1, "password는 필수 입력값입니다.").max(20, "password는 20자 이내여야 합니다.")
    ),
});

export type ParticipantBodyDto = z.infer<typeof participantBodySchema>;

// 참가자 body 유효성 검사 미들웨어
export const validateParticipantBody = (req: Request, res: Response, next: NextFunction) => {
    const result = participantBodySchema.safeParse(req.body);
    if (!result.success) {
        const errors = (result.error?.issues || []).map((err) => ({
            path: err.path.join("."),
            message: err.message,
        }));
        return res.status(400).json({ errors });
    }
    req.body = result.data;
    next();
};