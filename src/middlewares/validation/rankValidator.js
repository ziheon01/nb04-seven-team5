import { z } from "zod";
import { validateGroupIdParam } from "./groupValidator.js";
import { participantIdSchema, participantNicknameSchema } from "./participantValidator.js";

export { validateGroupIdParam };

// rank 조회 쿼리 스키마
export const rankQuerySchema = z.object({
  participantId: participantIdSchema.optional(), // 🔹 필수가 아니라 optional
  participantNickname: participantNicknameSchema.optional(), // 🔹 optional 처리
  orderBy: z.enum(["recordTime", "recordCount"]).default("recordCount"),
  order: z.enum(["asc", "desc"]).default("desc"),
});

export const validateRankQuery = (req, res, next) => {
  const result = rankQuerySchema.safeParse(req.query);

  if (!result.success) {
    const errors = result.error?.errors?.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    })) || []; // 🔹 안전하게 optional chaining

    return res.status(400).json({ errors });
  }

  Object.assign(req.query, result.data);
  
  next();
};