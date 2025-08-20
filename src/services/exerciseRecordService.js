import { PrismaClient } from '../../generated/prisma/index.js'; // 올바른 Prisma Client 임포트 경로
const prisma = new PrismaClient();

class ExerciseRecordService {
  createRecord = async (groupId, recordData) => {
    const { exerciseType, description, time, distance, participantPhoto, participantNickname, participantPassword } = recordData;

    try {
        const participant = await prisma.participant.findUnique({ //participant 스키마의 '@@unique(name: "participantInfo", [nickname, password])'를 통해 한번에 검증
          where: {
                 nickname: participantNickname ,
                 password: participantPassword ,
            },
        });

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

    if (search) { //
      where.participant = {
        nickname: {
          contains: search,
          mode: 'insensitive', //대소문자 구별 없이 검색 가능
        },
      };
    }

    const orderByClause = {};
    if (orderBy === 'createdAt') {
      orderByClause.createdAt = order;
    } else if (orderBy === 'time') {
      orderByClause.time = order;
    } else if (orderBy === 'recordCount') {
      orderByClause.recordCount = order; //기록횟수에 대해서는 아직 정리가 안되었지만 임시적으로 'recordCount'라 써둠
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

      const datas = records.map((record) => ({  // 분류처리가 된 데이터들를 프론트엔드 형식에 맞게 임시 변형
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

      const total = await prisma.exerciseRecord.count({ where }); // 데이터중 검색조건에 맞는 데이터들을 count를 사용해 계산
        
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
          id: recordId,
          groupId: groupId,
        },
        include: {
          participant: true,
        },
      });

      return record;
    } catch (error) {
      console.error('단일기록 가져오는 중 오류발생:', error);
      throw error;
    }
  }
}

export default ExerciseRecordService;
