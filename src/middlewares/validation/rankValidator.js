import { z } from "zod";
import { groupIdParamSchema, validateGroupIdParam } from './groupValidator.js';

export { validateGroupIdParam };

// 랭크 조회 쿼리 스키마
export const rankQuerySchema = z.object({
  ranking: z.enum(["count", "time"]).default("count"),
  duration: z.enum(["weekly", "monthly"]).default("weekly"),
  page: z.preprocess(val => Number(val) || 1, z.number().min(1).default(1)),
  limit: z.preprocess(val => Number(val) || 10, z.number().min(1).default(10)),
  orderBy: z.enum(["recordTime", "recordCount"]).default("recordCount"),
  order: z.enum(["asc", "desc"]).default("desc"),
  search: z.string().optional(),
});

// 랭크 조회 쿼리 검증 미들웨어
export const validateRankQuery = (req, res, next) => {
  const result = rankQuerySchema.safeParse(req.query);
  if (!result.success) {
    // Zod 에러를 더 안전하게 처리하기 위해 flatten() 사용
    const fieldErrors = result.error.flatten().fieldErrors;
    const errors = Object.entries(fieldErrors).map(([path, messages]) => ({
      path,
      message: messages.join(", "),
    }));
    return res.status(400).json({ errors });
  }
  // req.query를 직접 재할당하는 대신 Object.assign으로 속성을 업데이트합니다.
  Object.assign(req.query, result.data);
  next();
};
