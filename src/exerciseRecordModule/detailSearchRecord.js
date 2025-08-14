import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get('/group/:groupId/records/:recordId', async(req, res) => {
    const { groupId, recordId } = req.params;

    const parsedGroupId = parseInt(groupId);
    if (isNaN(parsedGroupId)) {
        return res.status(400).json({
            path: 'groupId',
            message: 'groupId must be integer', 
        });
    }

        const parsedRecordId = parseInt(recordId);
    if (isNaN(parsedRecordId)) {
        return res.status(400).json({
            path: 'recordId',
            message: 'recordId must be integer', 
        });
    }

    try {
        const record = await prisma.record.findFirst({
            where: {
                id: parsedRecordId,
                groupId: parsedGroupId,
            },
            include: {
                participant: true,
            },
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