import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      dateFilter?: any;
      pagination?: {
        skip: number;
        take: number;
        page: number;
        limit: number;
      };
      filePaths?: string[];
      filePath?: string;
    }
  }
}
