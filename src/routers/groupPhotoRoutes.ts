import express, { Request, Response, NextFunction } from "express";
import { uploadGroupPhoto } from "../controllers/groupPhotoController.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

//  그룹 대표사진 업로드 API
router.post(
  "/:groupId/photo",
  upload.single("photo"),
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
      return res.status(400).send("파일이 없습니다.");
    }
    req.filePath = "/uploads/" + req.file.filename;
    next();
  },
  uploadGroupPhoto as any
);

export default router;