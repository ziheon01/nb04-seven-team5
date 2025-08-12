/**
 * 그룹에 참여하기
 * 닉네임과 비밀번호를 입력하여 그룹에 참여가 가능합니다.
 * 그룹 내에서 중복된 닉네임은 등록 불가입니다.
 */

import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express()
const prisma = new PrismaClient;
app.use(express.json());

app.post(`/groups/:groupId/participants`, async(req, res) => {
  const groupId = parseInt(req.params.groupId);
  const { nickname, password } = req.body;
  const existingParticipants = await prisma.participant.findUnique({
    where: { nickname },
  });
  
  if (existingParticipants === null){
    const newParticipants = await prisma.participant.create({
        data: {
            groupId, 
            nickname, 
            password,}
          });
    console.log(`${nickname}은 사용가능합니다. 축하합니다. 그룹 참여가 가능합니다.`)
    return res.status(201).json(newParticipants);
    } else {
    console.log(`${nickname}은 이미 존재하는 닉네임입니다. 다른 닉네임을 사용하세요.`);
    return res.status(400).json({ error: `${nickname}은 이미 존재하는 닉네임입니다. 다른 닉네임을 사용하세요.`})
    }
});
