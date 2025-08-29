import express from "express";
import { uploadParticipantPhotos } from "../controllers/photoController.js";
import upload from "../middlewares/upload.js";
import { HTTP } from "../const/http.js";
import { ERROR } from "../const/error.js";

const router = express.Router();

//  사진 여러장 업로드 API 처리 (파일 최대 3장까지 업로드 허용)
router.post(
  "/:recordId/photos",
  upload.array("photos", 3),    //  여러 파일 처리(최대 3개)
  (req, res, next) => {
    //  파일 없으면 400 에러 응답
    if (!req.files || req.files.length === 0) {
      return res.status(HTTP.BAD_REQUEST).send(ERROR.NOT_FOUND('files'));
    }
    //  파일마다 저장 경로를 배열로 만들어서 rep.files에 저장
    req.filePaths = req.files.map(file => "/uploads/" + file.filename);

    // 컨트롤러 함수 호출
    next();
  },
  uploadParticipantPhotos
);

export default router;