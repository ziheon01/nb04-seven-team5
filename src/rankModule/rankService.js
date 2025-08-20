import { PrismaClient } from '@prisma/client';
   
const prisma = new PrismaClient();

export async function getRankingsByCount(groupId, dateFilter){
    return prisma.participantId.findMany({
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
            recordCount: 'desc'
        }
    })
}

export async function getRankingsByTime(groupId, dateFilter){
    return prisma.participantId.findMany({
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
            recordCount: 'desc'
        }
    })
} 

