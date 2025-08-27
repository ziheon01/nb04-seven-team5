import RankService from '../services/rankService.js';
import { ERROR } from "../const/errorMessage.js";
import { HTTP_STATUS } from "../const/http_status.js";
import { pagination } from '../utils/pagination.js';

const [COUNT, TIME] = ['count', 'time'];

class RankController {
  constructor() {
    this.rankService = new RankService();
  }

  getRanks = async (req, res, next) => {
    const groupId = Number(req.params.groupId);
    const ranking = req.query.ranking?.toLowerCase();

    if (!groupId || isNaN(groupId)) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ path: 'groupId', message: ERROR.MUST_BE_INT('groupId') });
    }

    try {
      const { page = 1, limit = 1 } = req.query;
      const { skip, take } = pagination(page, limit)
      const filter = req.dateFilter;
      let result;

      if (ranking === COUNT) {
        result = await this.rankService.getRankingsByCount(groupId, filter, skip, take);
      } else if (ranking === TIME) {
        result = await this.rankService.getRankingsByTime(groupId, filter, skip, take);
      } else {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: "ranking 쿼리 파라미터는 'count' 또는 'time'이어야 합니다." });
      }

      return res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}

export default RankController;