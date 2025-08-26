import { z } from "zod";
import { groupIdParamSchema, validateGroupIdParam } from './groupValidator.js';

export { validateGroupIdParam };

export const exerciseRecordSchema = z.object({
  exerciseType: z.enum(["running", "cycling", "swimming"]),
  description: z.string().min(1, "설명은 필수입력입니다").max(200, "설명은 200자 이내입니다"),
  time: z.number().int().nonnegative("시간은 0 이상이어야 합니다"),
  distance: z.number().int().nonnegative("거리는 0 이상이어야 합니다"),
  participantNickname: z.string().min(1, "닉네임은 필수입력입니다").max(20, "닉네임은 20자 이내입니다"),
  participantPassword: z.string().min(1, "비밀번호는 필수입력입니다").max(20, "비밀번호는 20자 이내입니다"),
  participantPhoto: z.array(z.string().url("유효하지 않은 URL 입니다")).max(3).optional(),
});

export const validateExerciseRecord = (req, res, next) => {
  const result = exerciseRecordSchema.safeParse(req.body);
  if (!result.success) {
    const errors = result.error.errors.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    return res.status(400).json({ errors });
  }
  next();
};
