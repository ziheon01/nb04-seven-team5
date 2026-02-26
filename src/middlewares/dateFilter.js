// 기간 관련 유틸 함수
const ONE_DAY = 24 * 60 * 60 * 1000;

export function dateFilter(req, res, next) {
  const duration = req.query.duration;
  const now = new Date();

  if (duration === 'weekly') {
    // 지난 7일
    req.dateFilter = { createdAt: { gte: new Date(now.getTime() - 7 * ONE_DAY) } };
  } else if (duration === 'monthly') {
    // 지난 30일 (요구사항 반영)
    req.dateFilter = { createdAt: { gte: new Date(now.getTime() - 30 * ONE_DAY) } };
  } else {
    // 전체 기간
    req.dateFilter = {};
  }

  next();
}