import express from 'express';
import groupRouter from "./routers/groupRouter.js"; // groupRouter 임포트 *경로주의*
import participantRouter from "./routers/participantRouter.js"; // participantRouter 임포트
import exerciseRecordRouter from "./routers/exerciseRecordRouter.js"; // exerciseRecordRouter 임포트
import rankRouter from "./routers/rankRouter.js"; // rankRouter 임포트
import badgeRouter from "./routers/badgeRouter.js" // badgeRouter 임포트
import  * as dotenv from 'dotenv';
import cors from 'cors';
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors()); // CORS 미들웨어 추가
app.use(express.json()); // json 요청 본문을 파싱하기 위한 미들웨어

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/groups', groupRouter);
app.use('/groups', participantRouter);
app.use('/groups', exerciseRecordRouter); // 운동 기록 라우터 연결
app.use('/groups', rankRouter);
app.use('/groups', badgeRouter);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// 전역 에러 핸들러
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    path: err.path // 유효성 검사 에러 시 path 필드 추가
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
