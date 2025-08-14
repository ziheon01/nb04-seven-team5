import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.post('/group/:id/records', async(req, res) => {
    const groupId = Number(req.params.id);
    const { exerciseType, description, time, distance, photos, participantNickname, participantPassword } = req.body;
    
    if (isNaN(id)) {
    return res.status(400).json({ path: "groupId", message: "groupId must be integer" });
    }

    try {
        const participant = await prisma.participant.findUnique({
            where: {
                AND: [
                { nickname: participantNickname },
                { password: participantPassword },
                ]
            }
        });

        const record = await prisma.record.create({
            data:{
                groupId,
                exerciseType,
                description,
                time,
                distance,
                photos,
                participant: {
                    connect: { id: participant.id }
                }
            },
            include: {
                participant: true
            }
        });
       
        return res.status(200).json({
            id: record.id,
            exerciseType: record.exerciseType,
            description: record.description,
            time: record.time,
            distance: record.distance,
            photos: record.photos,
            participant: {
                id: record.participant.id,
                nickname: record.participant.nickname
            }
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to create record" });
    }
});