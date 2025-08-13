import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();

<<<<<<< HEAD
const app = express();
const port = 3000;
app.use(express.json());

app.post('/:groupId/records', async(req, res) => {
    const groupId = Number(req.params.groupId);
    const { exerciseType, description, time, distance, photos, participantId, participantNickname } = req.body;

    try {
        const record = await prisma.record.create({
            data:{
                groupId: groupId,
                exerciseType,
                description,
                time,
                distance,
                photos,
                author:{
                participantId,
                participantNickname,
                }
=======
app.use(express.json());

app.post('/:groupId/records', async(req, res) => {
    try {
        const groupId = Number(req.params.groupId);
        const { exerciseType, description, time, distance, photos, participantNickname, participantPassword } = req.body;
        const record = await prisma.record.create({
            data: {
            groupId: groupId,
            exerciseType,
            description,
            time,
            distance,
            photos,
            participantNickname,
            participantPassword,
>>>>>>> 16bd529 (Modified schema & try create exerciseRecord.js)
            },
        });
        return res.status(201).json(record);
    } catch (err) {
<<<<<<< HEAD
        return res.status(400).json({
        "path": "groupId",
        "message": "groupId must be integer"     
        })
    }
});

app.get('/:groupId/records', async(req, res) => {
    const groupId = Number(req.params.groupId);
    
    try {
        const record = await fetch.record.findMany({
            where: { groupId: groupId },

            select: {
                groupId: true,
                exerciseType: true,
                description: true,
                time: true,
                distance: true,
                photos: true,
                author: {
                    participantId: true,
                    participantNickname: true,
                }
            },
        });
        res.status(201).json(record);
    } catch (err) {
        res.status(400).json({
              "path": "groupId",
              "message": "groupId must be integer"
        })
    }
});

app.get('/:groupId/records/:recordId', async(req, res) => {
    const groupId = Number(req.params.groupId);
    const recordId = Number(req.params.recordId);

    try {
        const record = await fetch.record.findUnique({
            select: {
                groupId: groupId,
                recordId: recordId,
                exerciseType: true,
                description: true,
                time: true,
                distance: true,
                photos: true,
                author: {
                    participantId: true,
                    participantNickname: true,
                }
            },
        });
        res.status(201).json(record);
    } catch (err) {
        res.status(400).json({
              "path": "groupId",
              "message": "groupId must be integer"
        })
    }
});

app.listen(port, () => {
=======
        return res.status(400).json({ 
            "path": "groupId",
            "message": "groupId must be integer"
        });
    }
  })

app.get('/:groupId/records', async(req, res) => {
    try {
        const groupId = Number(req.params.groupId);
        const page = parseInt(req.query.page) || 1;
        const keyword = req.query.keyword || '';
        const record = await prisma.record.findMany({
            skip: (page - 1) * 10,
            take: 10,
            orderBy: [
                { time: 'desc' },
                { createdAt: 'desc' },
            ],
            select: {
              id: true,  
              exerciseType: true,
              description: true,
              time: true,
              distance: true,
              photos: true,
              author: {
                participantId: true,
                participantNickname: true,
              }
            },
            where: {
              groupId: groupId,
                 participantNickname: {
                contain: keyword,
                mode: 'insensitive',
            }
         },
        });
        res.status(201).json(record);
    } catch (err) {
        res.status(400).json({ 
            "path": "groupId",
  "message": "groupId must be integer"
        })
    }
  });

app.get('/:groupId/records/:recordId', async(req, res) => {
    try {
        const groupId = Number(req.params.groupId);
        const recordId = Number(req.params.recordId);
        const page = parseInt(req.query.page) || 1;
        const keyword = req.query.keyword || '';
        const record = await prisma.record.findMany({
            select: {
              id: true,  
              exerciseType: true,
              description: true,
              time: true,
              distance: true,
              photos: true,
              author: {
                participantId: true,
                participantNickname: true,
              }
            },
            where: {
              groupId: groupId,
                 participantNickname: {
                contain: keyword,
                mode: 'insensitive',
            }
         },
        });
        res.status(201).json(record);
    } catch (err) {
        res.status(400).json({ 
            "path": "groupId",
  "message": "groupId must be integer"
        })
    }
  });

  app.listen(port, () => {
>>>>>>> 16bd529 (Modified schema & try create exerciseRecord.js)
  console.log(`Server started at port: ${port}`);
});