import express, { Request, Response, NextFunction } from 'express';
import groupRouter from "./routers/groupRouter.js";
import participantRouter from "./routers/participantRouter.js";
import exerciseRecordRouter from "./routers/exerciseRecordRouter.js";
import rankRouter from "./routers/rankRouter.js";
import badgeRouter from "./routers/badgeRouter.js";
import imageRouter from "./routers/imageRouter.js"; 
import * as dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path'; 
import { pinoHttp } from 'pino-http';
import logger from './utils/logger.js'; 

dotenv.config(); 

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:3001', 
  credentials: true,             
}));

app.use(express.json()); 
app.use(cookieParser()); 
app.use(pinoHttp({
  logger,
  autoLogging: true, 
}));

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/images', imageRouter); 
app.use('/groups', groupRouter);
app.use('/groups', participantRouter);
app.use('/groups', exerciseRecordRouter);
app.use('/groups', rankRouter);
app.use('/groups', badgeRouter);

app.use((err: Error & { statusCode?: number; path?: string }, req: Request, res: Response, next: NextFunction) => {
  logger.error({ 
    err: err, 
    url: req.url, 
    method: req.method 
  }, '🔥 전역 에러 발생');

  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    path: err.path 
  });
});

app.listen(port, () => {
  logger.info(`🚀 Server is running on port ${port}`);
});