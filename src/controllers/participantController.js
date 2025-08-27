import ParticipantService from '../services/participantService.js';

export class ParticipantController {
  constructor() {
    this.participantService = new ParticipantService();
  }

  joinGroup = async (req, res, next) => {
    try {
      const { nickname, password } = req.body;
      const groupId = req.params.groupId;

      const updatedGroup = await this.participantService.joinGroup(groupId, nickname, password);
      return res.status(201).json({ updatedGroup });
    } catch (error) {
      //Note: 닉네임 중복, 존재하지 않는 groupId에 대한 에러 처리
      if (error.message === "Nickname already exists in this group") {
        return res.status(409).json({ message: error.message });
      }
      if (error.message === "Group not found") {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  leaveGroup = async (req, res, next) => {
    try {
      const { nickname, password } = req.body;
      const groupId = req.params.groupId;

      //Note: 탈퇴시 전달할 body가 없기 때문에 변수 할당 코드 삭제
      await this.participantService.leaveGroup(groupId, nickname, password);
      return res.status(204).send();

    } catch (error) {
      //잘못된 입력에 대한 에러처리
      if (error.message === "Participant not found") {
        return res.status(404).json({ message: error.message });
      }
      if (error.message === "Group not found") {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }
}