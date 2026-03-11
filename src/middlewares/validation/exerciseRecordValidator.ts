import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import { groupIdParamSchema, validateGroupIdParam } from './groupValidator.js';

export { validateGroupIdParam };

// 운동 기록 생성 검증 스키마 (DTO 역할)
export const createRecordBodySchema = z.object({
  exerciseType: z.enum(["run", "swim", "bike"]),
  description: z.string().min(1, "설명은 필수입력입니다").max(200, "설명은 200자 이내입니다"),
  time: z.preprocess(
    (val) => Number(val),
    z.number()
      .int("시간은 정수여야 합니다.")
      .min(1, "시간은 1초 이상이어야 합니다.")
      .max(86400, "시간은 24시간(86400초) 이내여야 합니다.")
  ),
  distance: z.preprocess(
    (val) => Number(val),
    z.number().nonnegative("거리는 0 이상이어야 합니다.")
  ),
  authorNickname: z.string().min(1, "닉네임은 필수입력입니다").max(20, "닉네임은 20자 이내입니다"),
  authorPassword: z.string().min(1, "비밀번호는 필수입력입니다").max(20, "비밀번호는 20자 이내입니다"),
  photos: z.preprocess(
    (val) => {
      if (!val) return [];
      if (Array.isArray(val)) return val;
      return [val];
    },
    z.array(z.string().url("유효하지 않은 URL 입니다")).max(3)
  ).default([]),
}).transform((data) => ({
  exerciseType: data.exerciseType,
  description: data.description,
  time: data.time,
  distance: data.distance,
  participantNickname: data.authorNickname,
  participantPassword: data.authorPassword,
  participantPhoto: data.photos,
}));

// z.infer를 이용한 타입 추출
export type CreateRecordDto = z.infer<typeof createRecordBodySchema>;

// 운동 기록 생성 유효성 검증 미들웨어
export const validateCreateRecordBody = (req: Request, res: Response, next: NextFunction) => {
  // multer로 처리된 req.files가 있다면 req.body.photos 배열로 매핑
  if (Array.isArray(req.files) && req.files.length > 0) {
    req.body.photos = req.files.map((file: any) => `/uploads/${encodeURIComponent(file.filename)}`);
  }

  const result = createRecordBodySchema.safeParse(req.body);
  if (!result.success) {
    const errors = (result.error?.issues || []).map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    return res.status(400).json({ errors });
  }
  
  // 정제되고 변환된 데이터를 req.body에 덮어씌움 (DTO 역할)
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
export const validateExerciseRecordQuery = (req: Request, res: Response, next: NextFunction) => {
  const result = exerciseRecordQuerySchema.safeParse(req.query);
  if (!result.success) {
    const errors = (result.error?.issues || []).map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    return res.status(400).json({ errors });
  }
  next();
};