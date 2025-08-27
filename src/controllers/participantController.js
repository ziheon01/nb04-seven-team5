import { HTTP_STATUS } from '../const/http_status.js';
import ParticipantService from '../services/participantService.js';
import { checking } from '../utils/group_nickname_password_check.js';

class ParticipantController {
  constructor() {
    this.participantService = new ParticipantService();
  }

  joinGroup = async (req, res, next) => {
  try{
    const { nickname, password } = req.body;
    const groupId = parseInt(req.params.groupId,10); 
    const validatedData = checking(nickname, password, groupId)
    
    const updatedGroup = await this.participantService.joinGroup( 
      validatedData.groupId, 
      validatedData.nickname, 
      validatedData.password
    );
      return res.status(HTTP_STATUS.CREATED).json({ updatedGroup });  
    }catch(error){
      next(error)
    }
  }

  leaveGroup = async (req, res, next) => {
    try{
      const { nickname, password } = req.body;
      const groupId = parseInt(req.params.groupId,10); 
      const validatedData = checking(nickname, password, groupId)
    
      const updatedGroup = await this.participantService.joinGroup(      
        validatedData.groupId, 
        validatedData.nickname, 
        validatedData.password);
        return res.status(HTTP_STATUS.CREATED).json({ updatedGroup });  
      }catch(error){
        next(error)
      }
    }
  }

export default ParticipantController;
