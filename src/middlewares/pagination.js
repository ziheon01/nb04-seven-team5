const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;

export function adjustPagination(req, res, next) {
  const page = parseInt(req.query.page, 10) || DEFAULT_PAGE;
  const limit = parseInt(req.query.limit, 10) || DEFAULT_LIMIT;

  req.pagination = {
    skip: (page - 1) * limit,
    take: limit,
    page,
    limit,
  };

  next();
}