//라이브러리 import
import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
//외부 모듈 improt


const app = express();
app.use(express.json());

/*
조건문에 쿼리를 명시하기 위해 받아오는 문자열을 대문자로 변환해 변수로 할당.
객체로 할당시 {COUNT, DURATION} - { COUNT : 'count', Time : 'time' }
*/
const [COUNT, TIME] = ['count', 'time']

const groupId = Number(req.params.groupId)

async function getRanks(req, res, next) {
    const ranking = req.query.ranking;
    //잘못된 ID접근에 대해 early return
    if (!groupId || isNaN(groupId)) {
        return res.status(400).json({
            path: 'groupId',
            message: 'groupId must be integer'
        });
    }

    let result;

    try {
        if (ranking === COUNT) {
            result = await prisma.participant.findMany({
                select: {
                    participantId: true,
                    nickname: true,
                    recordTime: true,
                    recordCount: true
                },
                where: {
                    groupId
                },
                orderBy: {
                    recordCount: 'desc',
                }
            })
            return res.json(result);
        }
        if (ranking === TIME) {
            result = await prisma.participant.findMany({
                select: {
                    participantId: true,
                    nickname: true,
                    recordTime: true,
                    recordCount: true,
                },
                where: {
                    groupId
                },
                orderBy: {
                    recordTime: 'desc',
                }
            })
            return res.json(result);
        }
        //잘못된 쿼리 요청에 대한 응답
        return res.status(400).json({
            error: "ranking 쿼리 파라미터는 'count' 또는 'time'이어야 합니다."
        });
        //next(); 추가 쿼리가 있거나 확장성이 필요할 경우 위의 에러 처리대신 다음 미들웨어로 컨트롤
    } catch (err) {
        next(err)
    }
}



app.get(`/groups/${groupId}/rank`, getRanks)