import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient;

app.delete('/groups/:groupId/participants', async(req,res) => {
  try{
    // 그룹이 존재하는지 확인
    const groupId  = req.params.groupId;
    const existingGroup = await prisma.group.findUnique({
      where: { id: groupId },
      });      
    if(existingGroup === null){
      console.error('해당 그룹은 존재하지 않습니다.');
      return res.status(404).json({ error: `해당 그룹은 존재하지 않습니다.`});
    }
    // 닉네임 + 비밀번호 조합 참가자가 있는지 확인    
    const { nickname, password } = req.body;
    const existingParticipant = await prisma.participant.findUnique({
      where: {
        participantInfo: {
          nickname,
          password
        }}
      });
    if(existingParticipant === null){
      console.error('닉네임, 비밀번호가 일치하지 않습니다.');
      return res.status(400).json({ message: '닉네임, 비밀번호가 일치하지 않습니다.'});
    }
    // 해당 닉네임 비밀번호 조합이 그룹 참가자인지.
    if(existingParticipant.groupId !== groupId){
      console.error('해당 그룹참여자가 아닙니다.');
      return res.status(400).json({ message: '해당 그룹참여자가 아닙니다.'})
    }
    await prisma.participant.delete({
      where: {
        id: existingParticipant.id
      }
    });
    console.log('해당 그룹을 탈퇴했습니다.');
    return res.status(204).send()
  } catch(error){
    console.error ('서버 오류로 탈퇴가 불가합니다.')
    return res.status(500).json({ error: '서버오류로 탈퇴가 불가합니다.'})
  }
})