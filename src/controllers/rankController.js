import RankService from '../services/rankService.js';

const [COUNT, TIME] = ['count', 'time'];

class RankController {
  constructor() {
    this.rankService = new RankService();
  }

  getRanks = async (req, res, next) => {
    const groupId = Number(req.params.groupId);
    const ranking = req.query.ranking?.toLowerCase();

    if (!groupId || isNaN(groupId)) {
      return res.status(400).json({ path: 'groupId', message: 'groupId must be an integer' });
    }

    try {
      const { skip, take } = req.pagination;
      const filter = req.dateFilter;
      let ranks;

      if (ranking === COUNT) {
        ranks = await this.rankService.getRankingsByCount(groupId, filter, skip, take);
      } else if (ranking === TIME) {
        ranks = await this.rankService.getRankingsByTime(groupId, filter, skip, take);
      } else {
        return res.status(400).json({ error: "ranking 쿼리 파라미터는 'count' 또는 'time'이어야 합니다." });
      }

      return res.status(200).json(ranks);
    } catch (error) {
      next(error);
    }
  };
}

export default RankController;