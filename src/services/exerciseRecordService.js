import { PrismaClient } from '../../generated/prisma/index.js'; // 올바른 Prisma Client 임포트 경로
const prisma = new PrismaClient();

class ExerciseRecordService {
  createRecord = async (groupId, recordData) => {
    const { exerciseType, description, time, distance, participantPhoto, participantNickname, participantPassword } = recordData;

    try {
        const participant = await prisma.participant.findUnique({ 
          where: {
                 nickname: participantNickname ,
                 password: participantPassword ,
            },
        });

        if (!participant) {
          throw new Error("Participant not found or password incorrect");
        }

      const newRecord = await prisma.exerciseRecord.create({ 
            data:{
                groupId,
                exerciseType,
                description,
                time,
                distance,
                participantPhoto,
                participant: {
                    connect: { id: participant.id },
                },
            },
            include: {
              participant: true
            },
        });

        return newRecord;
    } catch (error) {
      console.error('기록 생성 중 오류발생:', error);
      throw error;
    }
  }

  getRecords = async (groupId, options) => {
    const { page, limit, order, orderBy, search } = options;
    const skip = (page - 1) * limit;
    const take = limit;

    const where = {
      groupId,
    };

    if (search) {
      where.participant = {
        nickname: {
          contains: search,
          mode: 'insensitive',
        },
      };
    }

    const orderByClause = {};
    if (orderBy === 'createdAt') {
      orderByClause.createAt = order;
    } else if (orderBy === 'time') {
      orderByClause.time = order;
    } else if (orderBy === 'recordCount') {
      orderByClause.recordCount = order;
    }

    try {
      const records = await prisma.exerciseRecord.findMany({
        skip,
        take,
        where,
        orderBy: orderByClause,
        include: {
          participant: true,
        },
      });

      const datas = records.map((record) => ({ 
          id: record.id,
          exerciseType: record.exerciseType,
          description: record.description,
          time: record.time,
          distance: record.distance,
          participantPhoto: record.participantPhoto,
          participant: {
              id: record.participant.id,
              nickname: record.participant.nickname,
          },
      }));

      const total = await prisma.exerciseRecord.count({ where });
        
      return { datas, total }
    } catch (error) {
      console.error('기록을 가져오는 중 오류발생:', error);
      throw error;
    }
  }

  getRecordDetail = async (groupId, recordId) => {
    try {
      const record = await prisma.exerciseRecord.findFirst({
        where: {
          id: parseInt(recordId),
          groupId: parseInt(groupId),
        },
        include: {
          participant: true,
        },
      });

      if (!record) {
        throw new Error("Record not found");
      }

      return record;
    } catch (error) {
      console.error('단일기록 가져오는 중 오류발생:', error);
      throw error;
    }
  }
}

export default ExerciseRecordService;
