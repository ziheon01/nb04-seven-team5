import { z } from 'zod';

// 그룹 생성 스키마
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
});

// 미들웨어 함수
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

