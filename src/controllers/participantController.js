import ParticipantService from '../services/participantService.js';

class ParticipantController {
  constructor() {
    this.participantService = new ParticipantService();
  }

  joinGroup = async (req, res, next) => {
    const { nickname, password } = req.body;
    const groupId = Number(parseInt(req.params.groupId)); 
    try{
      // req.body에 필요한 필드가 다 들어왔는지 확인
      if(!nickname || !password){
        return res.status(400).json({ 
          path: ["nickname", "password"],
          message: "All fields are required"});
      }
      if(isNaN(groupId)){
        return res.status(400).json({   
          path: "groupId",
          message: "Invalid groupId"});
      }
      // 타입이 유효한지 확인
      if(typeof nickname !== 'string' || typeof password !== 'string' || typeof groupId !== "number"){
        return res.status(400).json({ message: "Invalid field types"});
      }
      const updatedGroup = await this.participantService.joinGroup( groupId, nickname, password);
      return res.status(200).json({ updatedGroup });  
    }catch(error){
      next(error)
    }
  }

  leaveGroup = async (req, res, next) => {
    const { nickname, password} = req.body;
    const groupId = parseInt(req.params.groupId);
    try{
      // 닉네임과 비밀번호가 유효한지 확인
      if(!nickname || !password){
        return res.status(400).json({
          path: ["nickname", "password"],
          message: "All fields are required"});
      }
      
      // 그룹 아이디가 유효한지 확인
      if(isNaN(groupId)){
        return res.status(400).json({
          path: "groupId",
          message: "Invalid groupId"});
      }
      // 닉네임과 비밀번호가 유효한지 확인
      if(typeof nickname !== 'string' || typeof password !== 'string'){
        res.status(400).json({ message: "Invalid field types"});
      }
      const updatedGroup = await this. participantService.leaveGroup({ groupId, nickname, password });
      res.status(200).json({ updatedGroup});
    } catch(error){
      next(error)
    }
  }
}

export default ParticipantController;