import { PrismaClient } from '@prisma/client';
import express from 'express';
import { get } from 'http';

const prisma = new PrismaClient();

const app = express();

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
            },
        });
        return res.status(201).json(record);
    } catch (err) {
        return res.status(400).json({
        "path": "groupId",
        "message": "groupId must be integer"     
        })
    }
});

app.get('/:groupId/records', async(req, res) => {
    const groupId = Number(req.params.groupId);
    
    try {
        const record = await fetch.record.create({
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
            }
        });
        res.status(201).json(record);
    } catch (err) {
        res.status(400).json({
              "path": "groupId",
              "message": "groupId must be integer"
        })
    }
});