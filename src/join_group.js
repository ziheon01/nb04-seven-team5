import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient;

app.post(`/groups/:groupId/participants`, async(req, res) => {
  try{
    const groupId  = parseInt (req.params.groupId );
    const existingGroup = await prisma.group.findUnique({
      where: { id: groupId},
    });
  // 해당 그룹이 존재하는지 
    if(existingGroup === null){
      console.log('해당 그룹은 존재하지 않습니다.');
      return res.status(404).json({ error: `해당 그룹은 존재하지 않습니다.`});
    }
  // 닉네임이 존재하는지 존재하면 추가/ 아니면 안됨. 
    const { nickname, password } = req.body;
    const existingParticipants = await prisma.participant.findUnique({
      where: { nickname },
    });
    if (existingParticipants === null){
      const newParticipants = await prisma.participant.create({
        data: {
          groupId,
          nickname,
          password,
        }
      });
      console.log(`${nickname}은 사용가능합니다. 그룹 참여가 가능합니다.`);
      return res.status(201).json(newParticipants);
    } else {
      console.log(`${nickname}은 이미 존재하는 닉네임입니다. 다른 닉네임을 사용하세요.`);
      return res.status(409).json({ error: `${nickname}은 이미 존재하는 닉네임입니다. 다른 닉네임을 사용하세요.`});
    }
  } catch(error){
    console.error('서버 오류로 닉네임 생성이 불가합니다.');
    return res.status(500).json({ message: '서버 오류로 닉네임 생성이 불가합니다.'});
  }
});

