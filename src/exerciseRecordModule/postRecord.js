import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.post('/group/:id/records', async(req, res) => {
    const groupId = Number(req.params.id);
    const { exerciseType, description, time, distance, photos, participantNickname, participantPassword } = req.body;
    
    if (isNaN(id)) { //groupId의 값이 숫자인지 확인
    return res.status(400).json({ path: "groupId", message: "groupId must be integer" });
    }

    try {
        const participant = await prisma.participant.findUnique({ //1차적으로 사용자가 기입한 participantNickname과 participantPassword 값을 relation된 participant에서 있는지 확인
            where: {
                AND: [
                { nickname: participantNickname },
                { password: participantPassword },
                ]
            }
        });

        const record = await prisma.record.create({ //받은 값들을 req.body로 형태를 잡음(id는 participant에서 끌어옴)
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
       
        return res.status(200).json({ //return 값은 api에서 요구하는 req.body에 알맞게 맞춰 출력
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