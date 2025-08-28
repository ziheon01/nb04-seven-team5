import { z } from 'zod';
import { HTTP } from '../../const/http.js';
import { ERROR } from '../../const/error.js';

// 그룹 생성검증 스키마
export const groupCreateSchema = z.object({
    name: z.string()
        .min(1, ERROR.LIMIT_MIN('name',1))
        .max(20, ERROR.LIMIT_MAX('name',20)),
    description: z.string()
        .min(1,ERROR.LIMIT_MIN('description',1))
        .max(200, ERROR.LIMIT_MAX('description',200)),
    discordWebhookUrl: z.string()
        .min(1,ERROR.LIMIT_MIN('discordWebhookUrl',1))
        .max(3000, ERROR.LIMIT_MAX('discordWebhookUrl',3000)),
    discordInviteUrl: z.string()
        .min(1, ERROR.LIMIT_MIN('discordInviteUrl',1))
        .max(3000, ERROR.LIMIT_MAX('discordInviteUrl',3000)),
    ownerNickname: z.string()
        .min(1, ERROR.LIMIT_MIN('ownerNickname',1))
        .max(20, ERROR.LIMIT_MAX('ownerNickname',20)),
    ownerPassword: z.string()
        .min(1,ERROR.LIMIT_MIN('ownerPassword',1))
        .max(20, ERROR.LIMIT_MAX('ownerPassword',20)),
    goalRep: z.number({
        required_error: ERROR.REQUIRED('goalRep'),
        invalid_type_error: ERROR.MUST_BE_NUMBER('goalRep')
        })
        .int(ERROR.MUST_BE_INT('goalRep'))
        .nonnegative(ERROR.LIMIT_MIN('goalRep',0)),
    tags: z.array(z.string())
        .max(10, "태그는 최대 10개까지 입력할 수 있습니다.")
        .optional(),
});

// 그룹 생성 유효성 미들웨어
export const validateGroupCreate = (req, res, next) => {
    const result = groupCreateSchema.safeParse(req.body);
    if (!result.success) {
        const errors = result.error.errors.map(err => ({
            path: err.path.join('.'),
            message: err.message,
        }));
        return res.status(HTTP.BAD_REQUEST).json({ errors });
    } else {
        req.parsedBody = result.data;
        next();
    }
};

// 그룹 조회검증 스키마 > 타입 유효성 default쓸 지 확인 필요
export const groupQuerySchema = z.object({
    //Note: 검색 쿼리가 옵셔널함을 표시
    search: z.string().optional(),
    //Note: 쿼리는 문자열이기 때문에 수로 변환 후 유효성 검증
    limit: z.preprocess(val => Number(val),
        z.number()
            .int(ERROR.MUST_BE_INT('limit'))
            .min(1, ERROR.LIMIT_MIN('limit',1))
            .max(50, ERROR.LIMIT_MAX('limit',50))
            .default(10)
    ),
    page: z.preprocess(val => Number(val),
        z.number()
            .int(ERROR.MUST_BE_INT('page'))
            .min(1, ERROR.LIMIT_MIN('page',1))
            .default(1)
    ),
    orderBy: z.enum(['likeCount', 'participantCount', 'createdAt']).default('createdAt'),
    order: z.string()
        .transform(val => val.toLowerCase())
        .pipe(z.enum(['asc', 'desc']))
        .default('desc'),

});

// 그룹 조회 유효성 미들웨어
export const validateGroupQuery = (req, res, next) => {
    const result = groupQuerySchema.safeParse(req.query);
    if (!result.success) {
        const errors = result.error.errors?.map(err => ({
            path: err.path.join('.'),
            message: err.message,
        }));
        return res.status(HTTP.BAD_REQUEST).json({ errors });
    }
    next();
};

// 그룹 ID검증 스키마
export const groupIdParamSchema = z.object({
    groupId: z.preprocess(
        (val) => Number(val),
        z.number({
            required_error: ERROR.REQUIRED('groupId'),
            invalid_type_error: ERROR.MUST_BE_NUMBER('groupId'),
        })
            .int(ERROR.MUST_BE_INT('groupID'))
            .positive('Group ID must be a positive number.')
    )
});

// 그룹 ID 유효성 검증 미들웨어
export const validateGroupIdParam = (req, res, next) => {
    const result = groupIdParamSchema.safeParse(req.params);

    if (!result.success) {
        const errors = result.error.errors.map(err => ({
            path: err.path.join('.'),
            message: err.message,
        }));
        return res.status(HTTP.BAD_REQUEST).json({ errors });
    } else {
        req.parsedParams = result.data;
        next();
    }
};

// 그룹 업데이트 검증 스키마
export const groupUpdateSchema = groupCreateSchema
    .partial()  // 모든 필드를 optional로 만듦
    .extend({
        ownerPassword: z.string()
            .min(1, ERROR.LIMIT_MIN('ownerPassword',1))
            .max(20, ERROR.LIMIT_MAX('ownerPassword',20)),        
    });

// 그룹 업데이트 유효성 미들웨어
export const validateGroupUpdate = (req, res, next) => {
    const result = groupUpdateSchema.safeParse(req.body);
    if (!result.success) {
        const errors = result.error.errors.map(err => ({
            path: err.path.join('.'),
            message: err.message,
        }));
        return res.status(HTTP.BAD_REQUEST).json({ errors });
    } else {
        req.parsedBody = result.data;
        next();
    }
};

// 그룹 오너 비밀번호 검증 스키마
export const ownerPasswordSchema = z.object({
    ownerPassword: z.string()
        .min(1, ERROR.LIMIT_MIN('ownerPassword',1))
        .max(20, ERROR.LIMIT_MAX('ownerPassword',20)),
});

// 그룹 삭제 유효성 미들웨어
export const validateGroupDeleteBody = (req, res, next) => {
    const result = ownerPasswordSchema.safeParse(req.body);
    if (!result.success) {
        const errors = result.error.errors.map(err => ({
            path: err.path.join('.'),
            message: err.message,
        }));
        return res.status(HTTP.BAD_REQUEST).json({ errors });
    } else{
        req.parsedBody = result.data;
        next();
    };
}