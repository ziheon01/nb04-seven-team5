import * as rankService from '../services/rankService.js';

/*
조건문에 쿼리를 명시하기 위해 받아오는 문자열을 대문자로 변환해 변수로 할당.
객체로 할당시 {COUNT, DURATION} - { COUNT : 'count', Time : 'time' }
*/
const [COUNT, TIME] = ['count', 'time']

export async function getRanks(req, res, next) {
  const groupId = Number(req.params.groupId);
  const ranking = req.query.ranking;

  if (!groupId || isNaN(groupId)) {
    return res.status(400).json({ path: 'groupId', message: 'groupId must be integer' });
  }

  try {
    let result;

    if (ranking === COUNT) {
      result = await rankService.getRankingsByCount(groupId, req.dateFilter);
      return res.json(result);
    }

    if (ranking === TIME) {
      result = await rankService.getRankingsByTime(groupId, req.dateFilter);
      return res.json(result);
    }

    return res.status(400).json({ error: "ranking 쿼리 파라미터는 'count' 또는 'time'이어야 합니다." });

  } catch (error) {
    next(error);
  }
}