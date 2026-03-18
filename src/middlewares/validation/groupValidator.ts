import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

// 그룹 생성검증 스키마
export const groupCreateSchema = z.object({
    name: z.string()
        .min(1, "name은 필수 입력값입니다.")
        .max(20, "name은 20자 이내여야 합니다."),
    description: z.string()
        .min(1, "description은 필수 입력값입니다.")
        .max(200, "description은 200자 이내여야 합니다."),
    discordWebhookUrl: z.string()
        .min(1, "discordWebhookUrl은 필수 입력값입니다.")
        .max(3000, "discordWebhookUrl은 3000자 이내여야 합니다."),
    discordInviteUrl: z.string()
        .min(1, "discordInviteUrl은 필수 입력값입니다.")
        .max(3000, "discordInviteUrl은 3000자 이내여야 합니다."),
    ownerNickname: z.string()
        .min(1, "ownerNickname은 필수 입력값입니다.")
        .max(20, "ownerNickname은 20자 이내여야 합니다."),
    ownerPassword: z.string()
        .min(1, "ownerPassword는 필수 입력값입니다.")
        .max(20, "ownerPassword는 20자 이내여야 합니다."),
    goalRep: z.preprocess(
        (val) => Number(val), 
        z.number()
            .int("goalRep은 정수여야 합니다.")
            .nonnegative("goalRep은 0 이상이어야 합니다.")
    ),
    tags: z.preprocess(
        (val) => {
            if (val === undefined || val === null) return [];
            if (Array.isArray(val)) return val;
            if (typeof val === 'string') return [val];
            return val;
        },
        z.array(z.string())
            .max(10, "태그는 최대 10개까지 입력할 수 있습니다.")
    ).default([]),
    photoUrl: z.string().optional(),
});

export type CreateGroupDto = z.infer<typeof groupCreateSchema>;

// 그룹 생성 유효성 미들웨어
export const validateGroupCreate = (req: Request, res: Response, next: NextFunction) => {
    if (req.file) {
        req.body.photoUrl = `/uploads/${encodeURIComponent(req.file.filename)}`;
    }

    const result = groupCreateSchema.safeParse(req.body);
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

// 그룹 조회검증 스키마
export const groupQuerySchema = z.object({
    search: z.string().optional(),
    limit: z.preprocess(val => Number(val),
        z.number()
            .int("limit은 정수여야 합니다.")
            .min(1, "limit은 1 이상이어야 합니다.")
            .max(50, "limit은 50 이하여야 합니다.")
            .default(10)
    ),
    page: z.preprocess(val => Number(val),
        z.number()
            .int("page는 정수여야 합니다.")
            .min(1, "page는 1 이상이어야 합니다.")
            .default(1)
    ),
    orderBy: z.enum(['likeCount', 'participantCount', 'createdAt']).default('createdAt'),
    order: z.string()
        .transform(val => val.toLowerCase())
        .pipe(z.enum(['asc', 'desc']))
        .default('desc'),
});

export type GroupQueryDto = z.infer<typeof groupQuerySchema>;

// 그룹 조회 유효성 미들웨어
export const validateGroupQuery = (req: Request, res: Response, next: NextFunction) => {
    const result = groupQuerySchema.safeParse(req.query);
    if (!result.success) {
        const errors = (result.error?.issues || []).map((err) => ({
            path: err.path.join("."),
            message: err.message,
        }));
        return res.status(400).json({ errors });
    }
    
    Object.keys(req.query).forEach(key => delete req.query[key]);
    Object.assign(req.query, result.data);
    
    next();
};

// 그룹 ID검증 스키마
export const groupIdParamSchema = z.object({
    groupId: z.preprocess(
        (val) => Number(val),
        z.number()
            .int('Group ID must be an integer.')
            .positive('Group ID must be a positive number.')
    )
});

// 그룹 ID 유효성 검증 미들웨어
export const validateGroupIdParam = (req: Request, res: Response, next: NextFunction) => {
    const result = groupIdParamSchema.safeParse(req.params);

    if (!result.success) {
        const errors = (result.error?.issues || []).map((err) => ({
            path: err.path.join("."),
            message: err.message,
        }));
        return res.status(400).json({ errors });
    }
    
    Object.keys(req.params).forEach(key => delete req.params[key]);
    Object.assign(req.params, result.data);
    
    next();
};

// 그룹 업데이트 검증 스키마
export const groupUpdateSchema = groupCreateSchema
    .partial()
    .extend({
        ownerPassword: z.string()
            .min(1, "ownerPassword는 필수 입력값입니다.")
            .max(20, "ownerPassword는 20자 이내여야 합니다."),        
    });

export type UpdateGroupDto = z.infer<typeof groupUpdateSchema>;

// 그룹 업데이트 유효성 미들웨어
export const validateGroupUpdate = (req: Request, res: Response, next: NextFunction) => {
    const result = groupUpdateSchema.safeParse(req.body);
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

// 그룹 오너 비밀번호 검증 스키마
export const ownerPasswordSchema = z.object({
    ownerPassword: z.string()
        .min(1, "ownerPassword는 필수 입력값입니다.")
        .max(20, "ownerPassword는 20자 이내여야 합니다."),
});

export type OwnerPasswordDto = z.infer<typeof ownerPasswordSchema>;

// 그룹 삭제 유효성 미들웨어
export const validateGroupDeleteBody = (req: Request, res: Response, next: NextFunction) => {
    const result = ownerPasswordSchema.safeParse(req.body);
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