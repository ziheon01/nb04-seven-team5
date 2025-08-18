import { PrismaClient } from '@prisma/client';
import { time } from 'console';
import express from 'express';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get('/group/:id/records', async(req, res) => {
    const groupId = Number(req.params.id);
    const search = req.query.search?.toString(); //추가 쿼리를 통해 서치를 받도록
    const page = parseInt(req.query.page) || 1; //페이지네이션 구현을 위한 page 받기
    const arrayType = req.query.arrayType || ''; //정렬 방식을 받기 위해 query 값 받기

    if (isNaN(groupId)) { //groupId에 숫자 값이 들어갔는지 확인
    return res.status(400).json({
        path: "groupId",
        message: "groupId must be integer",
    });
    }
    
    try {
        const whereFunction = { //서치 과정을 편하게 하기 위해서 따로 만듬
            groupId: groupId,
        };

        const sortArray = arrayType === 'time' ? 'time' : 'createdAt'; //배열방식 받는 값에 따라서 time 아니면 createdAt을 받기위한 함수

        if (search) {
            whereFunction.participant = { //그룹 내에서 참여자 값 중 Nickname을 대조시켜 search 와 같은 값을 찾도록
                participantNickname: {
                    contains: search,
                    mode: 'insensitive',
                },
            };
        }

        const record = await prisma.record.findMany({ //원하는 그룹내의 모든 기록을 record에 넣음
            skip: (page - 1) * 10, // 10개마다 페이지가 넘어가는 offeset방식의 pagination
            take: 10,
            where: whereFunction,
            include: {
                participant: true,
            },
            orderBy: {
                [ sortArray ]: 'desc' //위 함수에 맞춰 time 또는 createdAt에 따라 최신, 높은 수로 나열
            },
        });

        const datas = record.map((record) => ({ //record 값으로 api 에서 원하는 형태를 취할 수 있도록
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

        return res.status(200).json({ //return 값을 위에서 형태가 바뀐 datas를 받으며 총 기록의 갯수를 셈
            data: datas,
            total: datas.length,
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to create record" });
    }
});