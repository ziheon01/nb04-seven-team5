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

// 조회하는 달과 다음 달 첫날을 생성해주는 생성자 함수
function getMonth(){
    const now  = new Date();
    const [startOfMonth, startOfNextMonth] = [
        new Date(now.getFullYear(), now.getMonth(), 1),
        new Date(now.getFullYear(), now.getMonth() + 1, 1)
    ]
    return {startOfMonth, startOfNextMonth};
}

// 주간, 월간에 대한 기간 필터링 미들웨어
function dateFilter(req, res, next) {
    const duration = req.query.duration
    const now = new Date();
  if (duration === 'weekly') {
    const weeklyFilter = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    //gte: greater than or equal: 해당 날짜 이상 포함하는 데이터를 조회해주는  prisma 전용 조건 연산자
    req.dateFilter = { createdAt: { gte: weeklyFilter } };
  } else if (duration === 'monthly') {
    const { startOfMonth, startOfNextMonth } = getMonth();
    //lt: less than: 해당 날짜이전인 데이터만 조회, 
    req.dateFilter = { createdAt: { gte: startOfMonth, lt: startOfNextMonth } }  
  } else {
    req.dateFilter = {}
  }

  next()
}

async function getRanks(req, res, next) {
    const groupId = Number(req.params.groupId)
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
                    groupId,
                    //기간 필터 미들웨어 추가
                    ...req.dateFilter
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
                    groupId,
                    ...req.dateFilter
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




app.get(`/groups/${groupId}/rank`, dateFilter, getRanks)