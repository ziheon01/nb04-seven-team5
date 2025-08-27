import express from "express";
import { uploadGroupPhoto } from "../controllers/groupPhotoController.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

//  그룹 대표사진 업로드 API
router.post(
  "/:groupId/images",
  upload.single("photo"),   //  photo로 이름 싱글파일 받기
  (req, res, next) => {
    if (!req.file) {
      return res.status(400).send("파일이 없습니다.");
    }
    //  파일 경로를 저장해서 컨트롤러에 전달
    req.filePath = "/uploads/" + req.file.filename;
    next();
  },
  uploadGroupPhoto  //  컨트롤러 함수 
);

export default router;