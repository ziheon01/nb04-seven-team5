import { z } from "zod";
import { groupIdParamSchema, validateGroupIdParam } from './groupValidator.js';
import { HTTP } from "../../const/http.js";
import { ERROR } from "../../const/error.js";

export { validateGroupIdParam };

// 운동 기록 생성 검증 스키마
export const exerciseRecordSchema = z.object({
  exerciseType: z.enum(["running", "cycling", "swimming"]),
  description: z.string().min(1, ERROR.LIMIT_MIN('description',1)).max(200, ERROR.LIMIT_MAX('description',200)),
  time: z.number().int().nonnegative(ERROR.LIMIT_MIN('time',0)),
  distance: z.number().int().nonnegative(ERROR.LIMIT_MIN('distance',0)),
  participantNickname: z.string().min(1, ERROR.LIMIT_MIN('participantNickname',1)).max(20, ERROR.LIMIT_MAX('participantNickname',20)),
  participantPassword: z.string().min(1, ERROR.LIMIT_MIN('participantPassword',1)).max(20, ERROR.LIMIT_MAX('participantPassword',20)),
  participantPhoto: z.array(z.string().url(ERROR.INVALID_INPUT)).max(3).optional(),
});

// 운동 기록 생성 유효성 검증 미들웨어
export const validateExerciseRecord = (req, res, next) => {
  const result = exerciseRecordSchema.safeParse(req.body);
  if (!result.success) {
    const errors = result.error.errors.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    return res.status(HTTP.BAD_REQUEST).json({ errors });
  } else {
    req.parsedBody = result.data
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
      .int(ERROR.MUST_BE_INT('limit'))
      .min(1, ERROR.LIMIT_MIN('limit',1))
      .max(50, ERROR.LIMIT_MAX('limit',50))
      .default(10),
  ),
  page: z.preprocess(
    (val) => Number(val),
    z.number()
      .int(ERROR.MUST_BE_INT('page'))
      .min(1, ERROR.LIMIT_MIN('page',1))
      .default(1),
  ),
  orderBy: z.enum(["time", "createdAt"]).default("createdAt"),
  order: z.enum(["asc", "desc"]).default("desc"),
});

// 운동 기록 조회 유효성 미들웨어
export const validateExerciseRecordQuery = (req, res, next) => {
  const result = exerciseRecordQuerySchema.safeParse(req.query);
  //console.log(JSON.stringify(result, 2, null))
  
  if (!result.success) {
    const errors = result.error.errors.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    return res.status(ERROR.BAD_REQUEST).json({ errors });
  } else {
    req.parsedQuery = result.data
    next();
  };
};