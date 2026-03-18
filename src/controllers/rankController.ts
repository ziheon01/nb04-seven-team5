import { Request, Response, NextFunction } from 'express';
import RankService, { DateFilter } from '../services/rankService.js';
import { toRankResponse } from '../utils/responseMapper.js';

const [COUNT, TIME] = ['count', 'time'];

class RankController {
  private rankService: RankService;

  constructor() {
    this.rankService = new RankService();
  }

  getRanks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const groupId = Number(req.params.groupId);
      const ranking = req.query.ranking === 'recordTime' ? TIME : COUNT;
      
      const { skip, take } = req.pagination || { skip: 0, take: 10 };
      const filter = req.dateFilter as DateFilter | undefined;

      let result;

      if (ranking === COUNT) {
        result = await this.rankService.getRankingsByCount(groupId, filter, skip, take);
      } else {
        result = await this.rankService.getRankingsByTime(groupId, filter, skip, take);
      }

      const formattedResult = result.map(rank => toRankResponse(rank));

      return res.status(200).json(formattedResult);
    } catch (error) {
      next(error);
    }
  };
}

export default RankController;