import { z } from "zod";
import { groupIdParamSchema, validateGroupIdParam } from './groupValidator.js';

export { validateGroupIdParam };

// 랭크 조회 쿼리 스키마
export const rankQuerySchema = z.object({
  orderBy: z.preprocess(
    (val) => String(val), // Ensure it's a string
    z.enum(["recordTime", "recordCount"]).default("recordCount")
  ),
  order: z.preprocess(
    (val) => String(val).toLowerCase(), // Ensure it's a string and lowercase
    z.enum(["asc", "desc"]).default("desc")
  ),
});

// 랭크 조회 쿼리 검증 미들웨어
export const validateRankQuery = (req, res, next) => {
  const result = rankQuerySchema.safeParse(req.query);
  if (!result.success) {
    const errors = result.error.errors.map(err => ({
      path: err.path.join("."),
      message: err.message,
    }));
    return res.status(400).json({ errors });
  }
  req.query = { ...req.query, ...result.data }; // Update req.query with validated data
  next();
};
