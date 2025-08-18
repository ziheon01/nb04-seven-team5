import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get('/group/:groupId/records/:recordId', async(req, res) => {
    const { groupId, recordId } = req.params;

    const parsedGroupId = parseInt(groupId);
    if (isNaN(parsedGroupId)) { //groupId에 숫자 값이 들어갔는지 확인
        return res.status(400).json({
            path: 'groupId',
            message: 'groupId must be integer', 
        });
    }

        const parsedRecordId = parseInt(recordId);
    if (isNaN(parsedRecordId)) { //recordId에 숫자 값이 들어갔는지 확인
        return res.status(400).json({
            path: 'recordId',
            message: 'recordId must be integer', 
        });
    }

    try {
        const record = await prisma.record.findFirst({ // 데이터에 groupId, recordId가 일치하는 맨 첫 값을 구하여서 오류날 확율을 줄이면서 그 안에 있는 정보를 record에 넣기 
            where: {
                id: parsedRecordId,
                groupId: parsedGroupId,
            },
            include: {
                participant: true,
            },
        });

        return res.status(200).json({ //record 내에 있는 id, exerciseType, description 및 원하는 정보값을 꺼내서 return 값으로 원하는 형식의 req.body 로 출력
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