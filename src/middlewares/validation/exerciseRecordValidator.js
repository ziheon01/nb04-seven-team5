import { z } from "zod";
import { groupIdParamSchema, validateGroupIdParam } from './groupValidator.js';

export { validateGroupIdParam };

// 운동 기록 생성 검증 스키마
export const exerciseRecordSchema = z.object({
  // 프론트에서는 run 사용 running x
  exerciseType: z.enum(["run", "swim", "bike"]),
  description: z.string().min(1, "설명은 필수입력입니다").max(200, "설명은 200자 이내입니다"),
  time: z.preprocess(
    (val) => Number(val),
    z.number().int().nonnegative("시간은 0 이상이어야 합니다")
  ),
  distance: z.preprocess(
    (val) => Number(val),
    z.number().int().nonnegative("거리는 0 이상이어야 합니다")
  ),
  authorNickname: z.string().min(1, "닉네임은 필수입력입니다").max(20, "닉네임은 20자 이내입니다"),
  authorPassword: z.string().min(1, "비밀번호는 필수입력입니다").max(20, "비밀번호는 20자 이내입니다"),
  photos: z.preprocess(
    (val) => {
      if (!val) return undefined; // 값이 없으면 optional 처리를 위해 undefined 반환
      if (Array.isArray(val)) return val; // 이미 배열이면 그대로 반환
      return [val]; // 문자열이면 배열로 감싸서 반환
    },
    z.array(z.string().url("유효하지 않은 URL 입니다")).max(3)
  ).optional(),
});

// 운동 기록 생성 유효성 검증 미들웨어
export const validateExerciseRecord = (req, res, next) => {
  // req.files에서 파일 정보를 URL 배열로 변환하여 req.body.photos에 추가
  if (req.files && req.files.length > 0) {
    req.body.photos = req.files.map(file => `/uploads/${encodeURIComponent(file.filename)}`);
  }

  console.log("Zod가 검증할 실제 req.body:", req.body);
  const result = exerciseRecordSchema.safeParse(req.body);
  if (!result.success) {
    const errors = result.error.errors.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    return res.status(400).json({ errors });
  }
  
  // 검증된 데이터를 req.body에 다시 할당하여 컨트롤러에 전달
  req.body = result.data;
  next();
};

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
  }
  next();
};