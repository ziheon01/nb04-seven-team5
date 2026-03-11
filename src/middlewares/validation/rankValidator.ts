import { z } from "zod";
import { Request, Response, NextFunction } from "express";
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

export type RankQueryDto = z.infer<typeof rankQuerySchema>;

// 랭크 조회 쿼리 검증 미들웨어
export const validateRankQuery = (req: Request, res: Response, next: NextFunction) => {
  const result = rankQuerySchema.safeParse(req.query);
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