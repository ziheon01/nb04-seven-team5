
declare global {
  namespace Express {
    interface Request {
      dateFilter?: {
        createdAt?: {
          gte?: Date;
        };
      };
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
