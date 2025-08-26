import { z } from 'zod';

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
    goalRep: z.number({
        required_error: "goalRep은 필수 입력값입니다.",
        invalid_type_error: "goalRep은 숫자여야 합니다.",
    })
        .int("goalRep은 정수여야 합니다.")
        .nonnegative("goalRep은 0 이상이어야 합니다."),
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
        return res.status(400).json({ errors });
    }
    next();
};

// 그룹 조회검증 스키마 > 타입 유효성 default쓸 지 확인 필요
export const groupQuerySchema = z.object({
    //Note: 검색 쿼리가 옵셔널함을 표시
    search: z.string().optional(),
    //Note: 쿼리는 문자열이기 때문에 수로 변환 후 유효성 검증
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

// 그룹 조회 유효성 미들웨어
export const validateGroupQuery = (req, res, next) => {
    const result = groupQuerySchema.safeParse(req.query);
    if (!result.success) {
        const errors = result.error.errors.map(err => ({
            path: err.path.join('.'),
            message: err.message,
        }));
        return res.status(400).json({ errors });
    }
    next();
};

// 그룹 ID검증 스키마
export const groupIdParamSchema = z.object({
    groupId: z.preprocess(
        (val) => Number(val),
        z.number({
            required_error: 'Group ID is required.',
            invalid_type_error: 'Group ID must be a number.',
        })
            .int('Group ID must be an integer.')
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
        return res.status(400).json({ errors });
    }
    next();
};

// 그룹 업데이트 검증 스키마
export const groupUpdateSchema = groupCreateSchema
    .partial()  // 모든 필드를 optional로 만듦
    .extend({
        ownerPassword: z.string()
            .min(1, "ownerPassword는 필수 입력값입니다.")
            .max(20, "ownerPassword는 20자 이내여야 합니다."),
        tags: z.array(z.string())
            .max(10, "태그는 최대 10개까지 입력할 수 있습니다.")
            .optional(),
    });

// 그룹 업데이트 유효성 미들웨어
export const validateGroupUpdate = (req, res, next) => {
    const result = groupUpdateSchema.safeParse(req.body);
    if (!result.success) {
        const errors = result.error.errors.map(err => ({
            path: err.path.join('.'),
            message: err.message,
        }));
        return res.status(400).json({ errors });
    }
    next();
};

// 그룹 오너 비밀번호 검증 스키마
export const ownerPasswordSchema = z.object({
  ownerPassword: z.string()
    .min(1, "ownerPassword는 필수 입력값입니다.")
    .max(20, "ownerPassword는 20자 이내여야 합니다."),
});

// 그룹 삭제 유효성 미들웨어
export const validateGroupDeleteBody = (req, res, next) => {
  const result = ownerPasswordSchema.safeParse(req.body);
  if (!result.success) {
    const errors = result.error.errors.map(err => ({
      path: err.path.join('.'),
      message: err.message,
    }));
    return res.status(400).json({ errors });
  }
  next();
};
