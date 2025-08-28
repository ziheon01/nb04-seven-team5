// src/middlewares/validation/participantValidator.js
import { z } from "zod";

// 공용 스키마
export const participantIdSchema = z.string();

export const participantNicknameSchema = z.string()
  .min(3, { message: "Nickname must be at least 3 characters" })
  .max(30, { message: "Nickname must be at most 30 characters" });

// 바디 검증 미들웨어
export const validateParticipantBody = (req, res, next) => {
  const schema = z.object({
    nickname: participantNicknameSchema,
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  });

  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.errors });
  }

  req.body = result.data;
  next();
};

// groupId param 검증 미들웨어
export const validateGroupIdParam = (req, res, next) => {
  const schema = z.object({
    groupId: z.preprocess(
      (val) => Number(val),
      z.number({
        required_error: "groupId is required",
        invalid_type_error: "groupId must be a number",
      })
        .int("groupId must be an integer")
        .positive("groupId must be a positive number")
    ),
  });

  const result = schema.safeParse(req.params);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.errors });
  }

  req.params = result.data;
  next();
};