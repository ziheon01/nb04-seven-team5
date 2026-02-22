import express from 'express';
import groupRouter from "./routers/groupRouter.js";
import participantRouter from "./routers/participantRouter.js";
import exerciseRecordRouter from "./routers/exerciseRecordRouter.js";
import rankRouter from "./routers/rankRouter.js";
import badgeRouter from "./routers/badgeRouter.js";
import imageRouter from "./routers/imageRouter.js"; // 이미지 라우터 import
import * as dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path'; // path 모듈 import
import pinoHttp from 'pino-http';
import logger from './utils/logger.js'; 

dotenv.config(); // 환경변수 로딩을 위로 올렸습니다.

const app = express();
const port = process.env.PORT || 3000;

// CORS 미들웨어에 상세 설정을 추가합니다.
app.use(cors({
  origin: 'http://localhost:3001', // 프론트엔드 서버의 주소
  credentials: true,             // 쿠키를 주고받기 위한 필수 설정
}));

app.use(express.json()); // json 요청 본문을 파싱하기 위한 미들웨어
app.use(cookieParser()); // 쿠키 파서 미들웨어
app.use(pinoHttp({
  logger,
  autoLogging: true, 
}));

// '/uploads' 경로로 오는 요청은 프로젝트 루트의 'uploads' 폴더의 파일을 제공하도록 설정
// Multer와 동일한 방식으로 경로를 설정하여 일관성을 유지합니다.
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// API 라우터들을 등록합니다.
app.use('/images', imageRouter); // 이미지 업로드 라우터
app.use('/groups', groupRouter);
app.use('/groups', participantRouter);
app.use('/groups', exerciseRecordRouter);
app.use('/groups', rankRouter);
app.use('/groups', badgeRouter);

// 전역 에러 핸들러
app.use((err, req, res, next) => {
  logger.error({ 
    err: err, 
    url: req.url, 
    method: req.method 
  }, '🔥 전역 에러 발생');

  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    path: err.path // 유효성 검사 에러 시 path 필드 추가
  });
});

app.listen(port, () => {
  logger.info(`🚀 Server is running on port ${port}`);
});