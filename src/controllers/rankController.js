import { ERROR } from '../const/error.js';
import { HTTP } from '../const/http.js';
import RankService from '../services/rankService.js';

const [COUNT, TIME] = ['count', 'time'];

class RankController {
  constructor() {
    this.rankService = new RankService();
  }

  getRanks = async (req, res, next) => {
    try {
      const { groupId } = req.params
      //ranking을 조건에 맞게 query로 받음 
      const ranking = req.query.ranking === 'recordTime' ? TIME : COUNT;
      const { skip, take } = req.pagination;
      const filter = req.dateFilter;

      if (!groupId) {
        return res.status(HTTP.BAD_REQUEST).json({ path: 'groupId', message: ERROR.MUST_BE_INT('groupId')});
      }

      let result;

      if (ranking === COUNT) {
        result = await this.rankService.getRankingsByCount(groupId, filter, skip, take);
      } else if (ranking === TIME) {
        result = await this.rankService.getRankingsByTime(groupId, filter, skip, take);
      } else {
        return res.status(HTTP.BAD_REQUEST).json({ error: "ranking 쿼리 파라미터는 'count' 또는 'time'이어야 합니다." });
      }

      return res.status(HTTP.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}

export default RankController;