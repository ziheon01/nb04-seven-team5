import RankService from '../services/rankService.js';
//통역사(Mapper) 가져오기
import { toRankResponse } from '../utils/responseMapper.js';

const [COUNT, TIME] = ['count', 'time'];

class RankController {
  constructor() {
    this.rankService = new RankService();
  }

  getRanks = async (req, res, next) => {
    try {
      const groupId = Number(req.params.groupId);
      const ranking = req.query.ranking === 'recordTime' ? TIME : COUNT;
      
      // 미들웨어에서 넣어준 pagination과 dateFilter 사용
      const { skip, take } = req.pagination || { skip: 0, take: 10 }; // 안전장치 추가
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

      // 랭킹 데이터 변환 (id -> participantId)
      const formattedResult = result.map(rank => toRankResponse(rank));

      return res.status(200).json(formattedResult);
    } catch (error) {
      next(error);
    }
  };
}

export default RankController;