import { PrismaClient } from '@prisma/client';
   
const prisma = new PrismaClient();

export async function getRankingsByCount(groupId, dateFilter, skip = 0, take = 10){
    return prisma.participant.findMany({
        select: {
            participantId: true,
            nickname: true,
            recordTime: true,
            recordCount: true
        },
        where: {
            groupId,
            //기간 필터 미들웨어 추가
            ...dateFilter
        },
        orderBy: {
            recordCount: 'desc'
        },
        skip,
        take,
    })
}

export async function getRankingsByTime(groupId, dateFilter, skip = 0, take = 10){
    return prisma.participant.findMany({
        select: {
            participantId: true,
            nickname: true,
            recordTime: true,
            recordCount: true
        },
        where: {
            groupId,
            //기간 필터 미들웨어 추가
            ...dateFilter
        },
        orderBy: {
            recordTime: 'desc'
        },
        skip,
        take,
    })
} 

