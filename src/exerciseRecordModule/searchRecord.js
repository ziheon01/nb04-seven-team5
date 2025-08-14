import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get('/group/:id/records', async(req, res) => {
    const groupId = Number(req.params.id);
    const search = req.query.search?.toString();

    if (isNaN(groupId)) {
    return res.status(400).json({
        path: "groupId",
        message: "groupId must be integer",
    });
    }
    
    try {
        const whereFunction = {
            groupId: groupId,
        };

        if (search) {
            whereFunction.participant = {
                participantNickname: {
                    contains: search,
                    mode: 'insensitive',
                },
            };
        }

        const record = await prisma.record.findMany({
            where: whereFunction,
            include: {
                participant: true,
            },
        });

        const datas = record.map((record) => ({
            id: record.id,
            exerciseType: record.exerciseType,
            description: record.description,
            time: record.time,
            distance: record.distance,
            photos: record.photos,
            participant: {
                id: record.participant.id,
                nickname: record.participant.nickname,
            },
        }));

        return res.status(200).json({
            data: datas,
            total: datas.length,
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to create record" });
    }
});