import express from "express";
import { addLike, removeLike } from "../controllers/likeController.js";

const router = express.Router();

//  추천 추가 API
router.post("/:participantId/like", addLike);

//  추천 취소 API
router.delete("/:participantId/like", removeLike);

export default router;