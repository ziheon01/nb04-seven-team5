import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express()
const prisma = new PrismaClient;

app.delete('/groups/:groupId/participants', async(req,res) => {
  const  groupId  = parseInt(req.params.groupId);
  const { nickname, password } = req.body;
  try{
    const existingParticipant = await prisma.participant.findunique({
      where: {
        participantInfo: { 
          nickname,
          password
        },
      }
    })
    if(existingParticipant !== null){
      await prisma.participant.delete({
        where: {
          id: existingParticipant.id
        }
      })
      console.log('그룹을 탈퇴했습니다.');
      return res.status(204).send();
    } else {
      console.log('닉네임, 비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
      return res.status(400).json({message: '닉네임, 비밀번호가 일치하지 않습니다.'});
    }
  } catch(error){
    console.error('서버 오류로 탈퇴 불가합니다..');
    return res.status(500).json({message: '서버오류로 탈퇴 불가합니다.'});
  }
});
    