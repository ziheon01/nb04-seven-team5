import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.delete('/groups/:groupId/participants', async(req,res) => {
  try{
    // 그룹이 존재하는지 확인
    const groupId  = parseInt(req.params.groupId);
    const existingGroup = await prisma.group.findUnique({
      where: { id: groupId },
      });      
    if(existingGroup === null){
      console.error('group not found');
      return res.status(404).json({
        path: "groupId",
        message: "group not found "
      });
    }
    // 닉네임 + 비밀번호 조합 참가자가 있는지 확인    
    const { nickname, password } = req.body;
    const existingParticipant = await prisma.participant.findUnique({
      where: {
        participantInfo: {
          nickname,
          password
        }
      },
    });

    if(!existingParticipant){
      console.error('Invalid nickname');
      return res.status(401).json({ 
        path: "participantInfo",
        message: "Invalid nickname"
      });
    }
    // 해당 닉네임 비밀번호 조합이 그룹 참가자인지.
    if(existingParticipant.groupId !== groupId){
      console.error('Not a participant of this group');
      return res.status(400).json({
        path: "participantInfo",
        message: "Not a participant of this group"
      });
    }
    await prisma.participant.delete({
      where: { id: existingParticipant.id },
    });
    console.log('Successfully left the group');
    return res.status(204).send()
   } catch(error){
    console.error ('Failed to leave the group due to a server error.')
    return res.status(500).json({ message: "Failed to leave the group due to a server error." })
  }
})