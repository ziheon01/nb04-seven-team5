import { Request, Response, NextFunction } from 'express';

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;

export function adjustPagination(req: Request, res: Response, next: NextFunction) {
  const page = parseInt(req.query.page as string, 10) || DEFAULT_PAGE;
  const limit = parseInt(req.query.limit as string, 10) || DEFAULT_LIMIT;

  req.pagination = {
    skip: (page - 1) * limit,
    take: limit,
    page,
    limit,
  };

  next();
}