// src/routers/imageRouter.ts

import { Router, Request, Response, NextFunction } from 'express';
import upload from '../middlewares/upload.js';

const router = Router();

// POST /images 경로로 오는 요청을 처리합니다.
router.post(
  '/',
  upload.array('files', 10),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const files = req.files as Express.Multer.File[];
      if (!files || files.length === 0) {
        return res.status(400).json({ message: '이미지 파일이 없습니다.' });
      }

      const urls = files.map(file => `http://localhost:3000/uploads/${file.filename}`);
      
      res.status(201).json({ urls });
    } catch (error) {
      next(error);
    }
  }
);

export default router;