import { PrismaClient } from '../../generated/prisma/index.js'; // 올바른 Prisma Client 임포트 경로
const prisma = new PrismaClient();

class ParticipantService {
  joinGroup = async (groupId, nickname, password) => {
    try{
      const existingGroup = await prisma.group.findUnique({
        where: { id: groupId },
      });
      if(!existingGroup){
        throw new Error('Group not found')
      }

      const existingParticipant = await prisma.participant.findFirst({
        where: { 
          groupId, 
          nickname,
         }
      });
      if(existingParticipant){
        throw new Error("Nickname is already used in this group")
      }

      const newParticipant = await prisma.participant.create({
        data: {
          groupId,
          nickname,
          password,
        }
      });
      
      const updatedGroup = await prisma.group.findUnique({
        where: { id: groupId },
        include: {
          participant: {
            select: {
              id: true,
              nickname: true,
              createdAt: true,
              updatedAt: true
            },
          },
          photoUrl: true, 
          tag: true,
          groupBadge: true,
          like: true
          }  
        });

      console.log(`Joining group ${groupId} with ${nickname}`);
      return updatedGroup
      } catch (error){
        throw(error);
      }
  }

  leaveGroup = async (groupId, nickname, password) => {
    try{   
      const existingGroup = await prisma.group.findUnique({
        where: { id: groupId }
      })
      if(!existingGroup){
        throw new Error('Group not found');
      }

      const existingParticipant = await prisma.participant.findFirst({
        where: {
          groupId,
          nickname,
        },
      })

      if(!existingParticipant){
        throw new Error ('Participant not found');
      }

      if(existingParticipant.groupId !== groupId){
        throw new Error ('Not a participant of this group')
      }

      const deleteParticipant = await prisma.participant.delete({
        where: {
          id: existingParticipant.id
        }
      });

      console.log(`Leaving group ${groupId} with ${nickname}`);
      return deleteParticipant;
    } catch(error){
      throw (error)
    }
  }
}

export default ParticipantService;
