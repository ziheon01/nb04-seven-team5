import { ERROR } from '../const/error.js';
import { HTTP } from '../const/http.js';
import ParticipantService from '../services/participantService.js';

export class ParticipantController {
  constructor() {
    this.participantService = new ParticipantService();
  }

  joinGroup = async (req, res, next) => {
    try {
      const { nickname, password } = req.parsedBody;
      const { groupId } = req.parsedParams;

      const updatedGroup = await this.participantService.joinGroup(groupId, nickname, password);
      return res.status(HTTP.OK).json({ updatedGroup });
    } catch (error) {
      //Note: 닉네임 중복, 존재하지 않는 groupId에 대한 에러 처리
      if (error.message === ERROR.ALREADY_USED_NICKNAME) {
        return res.status(HTTP.CONFLICT).json({ message: error.message });
      }
      if (error.message === ERROR.NOT_FOUND('groupId')) {
        return res.status(HTTP.NOT_FOUND).json({ message: error.message });
      }
      next(error);
    }
  }

  leaveGroup = async (req, res, next) => {
    try {
      const { nickname, password } = req.parsedBody;
      const { groupId } = req.parsedParams;

      //Note: 탈퇴시 전달할 body가 없기 때문에 변수 할당 코드 삭제
      await this.participantService.leaveGroup(groupId, nickname, password);
      return res.status(HTTP.NOT_CONTENT).send();

    } catch (error) {
      //잘못된 입력에 대한 에러처리
      if (error.message === ERROR.NOT_FOUND('participantId')) {
        return res.status(HTTP.NOT_FOUND).json({ message: error.message });
      }
      if (error.message === ERROR.NOT_FOUND('groupId')) {
        return res.status(HTTP.NOT_FOUND).json({ message: error.message });
      }
      next(error);
    }
  }
}