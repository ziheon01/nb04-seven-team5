// 기간 관련 유틸 함수
function getMonth() {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return { startOfMonth, startOfNextMonth };
}

const ONE_DAY = 24 * 60 * 60 * 1000;

export function dateFilter(req, res, next) {
  const duration = req.query.duration;
  const now = new Date();

  if (duration === 'weekly') {
    req.dateFilter = { createdAt: { gte: new Date(now.getTime() - 7 * ONE_DAY) } };
  } else if (duration === 'monthly') {
    const { startOfMonth, startOfNextMonth } = getMonth();
    req.dateFilter = { createdAt: { gte: startOfMonth, lt: startOfNextMonth } };
  } else {
    req.dateFilter = {};
  }

  next();
}