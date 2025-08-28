import RankService from '../services/rankService.js';

const [COUNT, TIME] = ['count', 'time'];

class RankController {
  constructor() {
    this.rankService = new RankService();
  }

  getRanks = async (req, res, next) => {
    try {
      const groupId = Number(req.params.groupId); 
      //ranking을 조건에 맞게 query로 받음 
      const ranking = req.query.ranking === 'recordTime' ? TIME : COUNT;
      const { skip, take } = req.pagination;
      const filter = req.dateFilter;

      if (!groupId) {
        return res.status(400).json({ path: 'groupId', message: 'groupId must be an integer' });
      }

      let result;

      if (ranking === COUNT) {
        result = await this.rankService.getRankingsByCount(groupId, filter, skip, take);
      } else if (ranking === TIME) {
        result = await this.rankService.getRankingsByTime(groupId, filter, skip, take);
      } else {
        return res.status(400).json({ error: "ranking 쿼리 파라미터는 'count' 또는 'time'이어야 합니다." });
      }

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}

export default RankController;