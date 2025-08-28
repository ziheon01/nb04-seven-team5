import { z } from "zod";
import { groupIdParamSchema, validateGroupIdParam } from './groupValidator.js';
import { participantIdSchema, participantBodySchema } from './participantValidator.js';
import { HTTP } from "../../const/http.js";

export { validateGroupIdParam };

// 랭크 조회 쿼리 스키마
export const rankQuerySchema = z.object({
  participantId: participantIdSchema,
  participantNickname: participantBodySchema,
  orderBy: z.enum(["recordTime", "recordCount"]).default("recordCount"),
  order: z.enum(["asc", "desc"]).default("desc"),
});

// 랭크 조회 쿼리 검증 미들웨어
export const validateRankQuery = (req, res, next) => {
  const result = rankQuerySchema.safeParse(req.query);
  if (!result.success) {
    const errors = result.error.errors?.map(err => ({
      path: err.path.join("."),
      message: err.message,
    }));
    return res.status(HTTP.BAD_REQUEST).json({ errors });
  } else {
    req.parsedQuery = { ...req.query, ...result.data };
    next();
  }
};