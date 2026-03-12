import express, { Request, Response, NextFunction } from "express";
import { uploadParticipantPhotos } from "../controllers/photoController.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

//  사진 여러장 업로드 API 처리 (파일 최대 3장까지 업로드 허용)
router.post(
  "/:recordId/photos",
  upload.array("photos", 3),
  (req: Request, res: Response, next: NextFunction) => {
    const files = req.files as Express.Multer.File[];
    if (!files || files.length === 0) {
      return res.status(400).send("파일이 없습니다.");
    }
    req.filePaths = files.map(file => "/uploads/" + file.filename);
    next();
  },
  uploadParticipantPhotos
);

export default router;