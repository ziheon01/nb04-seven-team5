// src/routers/imageRouter.js

import { Router } from 'express';
// 이전에 만든 multer 설정 파일을 가져옵니다. (경로 확인 필요)
import upload from '../middlewares/upload.js';

const router = Router();

// POST /images 경로로 오는 요청을 처리합니다.
router.post(
  '/',
  // 'files'라는 이름으로 최대 10개의 파일을 업로드 받습니다.
  upload.array('files', 10),
  (req, res, next) => {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: '이미지 파일이 없습니다.' });
      }

      // 업로드된 파일들의 URL을 생성합니다. (절대 경로로 변경)
      // req.files는 multer가 업로드한 파일 정보 배열입니다.
      const urls = req.files.map(file => `http://localhost:3000/uploads/${file.filename}`);
      
      // 프론트엔드가 기대하는 { urls: [...] } 형태로 응답을 보냅니다.
      res.status(201).json({ urls });
    } catch (error) {
      next(error);
    }
  }
);

export default router;