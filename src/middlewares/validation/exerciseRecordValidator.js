import { z } from "zod";
import { groupIdParamSchema, validateGroupIdParam } from './groupValidator.js';

export { validateGroupIdParam };

// 운동 기록 생성 검증 스키마
export const exerciseRecordSchema = z.object({
  exerciseType: z.enum(["running", "cycling", "swimming"]),
  description: z.string().min(1, "설명은 필수입력입니다").max(200, "설명은 200자 이내입니다"),
  time: z.number().int().nonnegative("시간은 0 이상이어야 합니다"),
  distance: z.number().int().nonnegative("거리는 0 이상이어야 합니다"),
  participantNickname: z.string().min(1, "닉네임은 필수입력입니다").max(20, "닉네임은 20자 이내입니다"),
  participantPassword: z.string().min(1, "비밀번호는 필수입력입니다").max(20, "비밀번호는 20자 이내입니다"),
  participantPhoto: z.array(z.string().url("유효하지 않은 URL 입니다")).max(3).optional(),
});

// 운동 기록 생성 유효성 검증 미들웨어
export const validateExerciseRecord = (req, res, next) => {
  const result = exerciseRecordSchema.safeParse(req.body);
  if (!result.success) {
    const errors = result.error.errors.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    return res.status(400).json({ errors });
  } else {
    req.body = result.data
    next();
  };
}

// 운동 기록 조회 검증 스키마
export const exerciseRecordQuerySchema = z.object({
  search: z.string().optional(),
  // 페이지네이션
  limit: z.preprocess(
    (val) => Number(val),
    z.number()
      .int("limit은 정수여야 합니다.")
      .min(1, "limit은 1 이상이어야 합니다.")
      .max(50, "limit은 50 이하여야 합니다.")
      .default(10),
  ),
  page: z.preprocess(
    (val) => Number(val),
    z.number()
      .int("page는 정수여야 합니다.")
      .min(1, "page는 1 이상이어야 합니다.")
      .default(1),
  ),
  orderBy: z.enum(["time", "createdAt"]).default("createdAt"),
  order: z.enum(["asc", "desc"]).default("desc"),
});

// 운동 기록 조회 유효성 미들웨어
export const validateExerciseRecordQuery = (req, res, next) => {
  const result = exerciseRecordQuerySchema.safeParse(req.query);

  if (!result.success) {
    const errors = result.error.errors.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    return res.status(400).json({ errors });
  } else {
    req.validatedQuery = result.data
    next();
  };
};