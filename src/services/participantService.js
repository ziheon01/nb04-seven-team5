import { PrismaClient } from '../../generated/prisma/index.js'; // 올바른 Prisma Client 임포트 경로
const prisma = new PrismaClient();

class ParticipantService {
  joinGroup = async (groupId, nickname, password) => {

    const existingGroup = await prisma.group.findUnique({
      where: { id: groupId },
    });
    if(!existingGroup){
      throw new Error('Group not found')
    }

    const existingParticipant = await prisma.participants.findFirst({
      where: { 
        groupId, 
        nickname,
      }
    });
    if(existingParticipant){
      throw new Error("Nickname is already used in this group")
    }
    console.log(groupId, nickname, password);
    const newParticipant = await prisma.participants.create({
      data: {
        groupId,
        nickname,
        password,
      }
    });
    console.log(newParticipant);

    const updatedGroup = await prisma.group.findUnique({
      where: { id: groupId },
      include: {
        participants: {
          select: {
            id: true,
            nickname: true,
            createdAt: true,
            updatedAt: true
          },
        },
      }  
    });

    console.log(`Joining group ${groupId} with ${nickname}`);
    return updatedGroup
    } 

  leaveGroup = async (groupId, nickname, password) => { 
    const existingGroup = await prisma.group.findUnique({
      where: { id: groupId }
    })
    if(!existingGroup){
      throw new Error('Group not found');
    }
      
      // 해당 그룹에 속해 있으면서  일치하는 닉네임,비밀번호이 있는지 확인 
    const existingParticipant = await prisma.participants.findFirst({
      where: {
        groupId,
        nickname,
        password
        },
      });

    if(!existingParticipant){
      throw new Error ('Participant not found');
    }

    const deleteParticipant = await prisma.participants.delete({
      where: {
        id: existingParticipant.id
      }
    });

    console.log(`Leaving group ${groupId} with ${nickname}`);
    return deleteParticipant;
  } 
}
  
export default ParticipantService;
