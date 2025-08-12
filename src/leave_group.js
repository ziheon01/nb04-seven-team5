import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express()
const prisma = new PrismaClient;

app.delete('/groups/:groupId/participants', async(req,res) => {
    const  groupId  = parseInt(req.params.groupId);
    const { nickname, password } = req.body;
  
    const existingParticipant = await prisma.participant.findUnique({
        where: { 
          participantInfo : {
          nickname, 
          password,
          },
        }
      })
    if(existingParticipant === null){
        console.log('닉네임과 비밀번호가 일치하지 않습니다. 다시 입력해주세요.')
        return res.status(400).json({ error: '닉네임과 비밀번호가 일치하지 않습니다. 다시 입력해주세요.'});
    } else {
        await prisma.participant.delete({
        where: {
          id: existingParticipant.id,
        }
      })
    }
    console.log('해당 참여자는 그룹을 탈퇴했습니다.')
    return res.status(204).send()
  });