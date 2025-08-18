import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.post(`/groups/:groupId/participants`, async(req, res) => {
  try{
    const groupId  = parseInt(req.params.groupId );

      // 해당 그룹이 존재하는지 
    const existingGroup = await prisma.group.findUnique({
      where: { id: groupId},
    });

    if(existingGroup === null){
      console.log('Group not found');
      return res.status(404).json({
        path: "groupId",
        message: "Group not found"
      });
    }
  // 닉네임이 존재하는지 존재하면 추가/ 아니면 안됨. 
    const { nickname, password } = req.body;
    const existingParticipant = await prisma.participant.findUnique({
      where: { nickname },
    });

    if (existingParticipant === null){
      const newParticipant = await prisma.participant.create({
        data: {
          groupId, 
          nickname,
          password,
        },
      });
    console.log(`${nickname}is available. Joining Group is successful.`);
      
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
      })
     return res.status(201).json(updatedGroup);
    } else {
      console.log('Nickname is already in use. Please choose a different nickname.');
      return res.status(409).json({
        path: "nickname",
        message: "Nickname is already in use. Please choose a different nickname."
      });
    }

  } catch(error){
    console.error('Failed to join the group due to a server error.');
    return res.status(500).json({ message: "Failed to join the group due to a server error."});
  }
});

