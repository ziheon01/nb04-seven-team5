import express from "express";
import { addLike, removeLike } from "../controllers/likeController.js";

const router = express.Router();

// 좋아요 등록
router.post("/participants/:participantId/like", addLike);

// 좋아요 취소
router.delete("/participants/:participantId/like", removeLike);

export default router;