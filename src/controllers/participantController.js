import ParticipantService from '../services/participantService.js';

class ParticipantController {
  constructor() {
    this.participantService = new ParticipantService();
  }

  joinGroup = async (req, res, next) => {
    // 최지희님이 src/join_group.js의 로직을 여기에 옮겨주세요.
    // req.params.groupId, req.body.nickname, req.body.password 사용
    // Prisma Client 임포트 경로 수정 및 next(error) 적용 필요    next(error) 부분은 심화 내용이라 지금은 안하셔도 됩니다.
    res.status(200).json({ message: 'joinGroup endpoint hit (placeholder)' });
  }

  leaveGroup = async (req, res, next) => {
    // 최지희님이 src/leave_group.js의 로직을 여기에 옮겨주세요.
    // req.params.groupId, req.body.nickname, req.body.password 사용
    // Prisma Client 임포트 경로 수정 및 next(error) 적용 필요
    res.status(200).json({ message: 'leaveGroup endpoint hit (placeholder)' });
  }
}

export default ParticipantController;
