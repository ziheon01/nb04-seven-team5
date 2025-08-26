import { PrismaClient } from '../../generated/prisma/index.js'; // 올바른 Prisma Client 임포트 경로
const prisma = new PrismaClient();
class ExerciseRecordService {
  
  getGroupWebhookUrl = async (groupId) => { //group 테이블에서 discordWebhookUrl를 가져오기 위한 코드
    const group = await prisma.group.findUnique({
      where: { id: groupId },
      select: { discordWebhookUrl: true },
    });

    if (!group) { 
      throw new Error('Group not found');
    }

    return group.discordWebhookUrl;
  };
        
  createRecord = async (groupId, recordData) => {

    const { exerciseType, description, time, distance, participantPhoto, participantNickname, participantPassword } = recordData;

    try {
        const participant = await prisma.participant.findFirst({ //participant 스키마의 '@@unique(name: "participantInfo", [nickname, password])'를 통해 한번에 검증
          where: {
                nickname: participantNickname ,
                password: participantPassword ,
            },
        });

    if (!participant) {
      throw new Error("참가자를 찾을 수 없습니다.");
    }

    const parsedTime = parseInt(time);
    const parsedDistance = parseInt(distance);

      const newRecord = await prisma.exerciseRecord.create({ 
            data:{
                groupId,
                exerciseType,
                description,
                time: parsedTime,
                distance: parsedDistance,
                participantPhoto: {
                  create: participantPhoto.map(url => ({
                  photoUrl: url
                }))
                },
                participant: {
                    connect: { id: participant.id }, //위 조건에 맞는 participant의 id를 가져옴
                },
            },
            include: { //위의 participantId와 recordId에 맞는 participant, participantPhoto의 테이블 정보를 가져옴
              participant: true,
              participantPhoto: true,
            },
        });

        await prisma.participant.update({
          where: { id: participant.id },
          data: {
            recordCount: {
              increment: 1,
            },
            recordTime: {
              increment: parsedTime,
            },
          },
        });

        return newRecord; //위에서 수집한 정보들을 newRecord 상수에 저장
    } catch (error) {
      console.error('기록 생성 중 오류발생:', error);
      throw error;
    }
  }

  getRecords = async (groupId, options) => {
    const { page, limit, order, orderBy, search } = options;
    const skip = (page - 1) * limit;
    const take = limit;

    const where = { //groupId를 통해서 가져와야하는 데이터들을 위해 만든 상수
      groupId,
    };

    if (search) { //search 쿼리를 받아내여 participant를 지정하기 위한 함수
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
    }

    try {
      const records = await prisma.exerciseRecord.findMany({ //위에서 분류된 데이터들을 페이지네이션을 하기 위한 코드
        skip,
        take,
        where,
        orderBy: orderByClause,
        include: {
          participant: true,
        },
      });

      const recordIds = records.map(record => record.id); //원하는 형태가 아닌 exerciseRecordId를 배열로 만들어주긴 위한 상수

      const allPhotos = await prisma.participantPhoto.findMany({ //앞서 배열로 변환하여 구별이 가능해진 exerciseRecordId를 participantPhoto 테이블에서
        where: {                                                 //분류하여 원하는 exerciseRecordId와 photoUrl를 꺼냄
          exerciseRecordId: { in: recordIds }
        },
        select: {
          exerciseRecordId: true,
          photoUrl: true,
        },
      });

      const datas = records.map((record) => {
      const photosForRecord = allPhotos //api 명세서 조건에 맞게 다듬기 전에 위에서 분류한 데이터들을 필터와 배열화 시켜 정리
        .filter(photo => photo.exerciseRecordId === record.id)
        .map(photo => ({ photoUrl: photo.photoUrl }));

        return {
        id: record.id,
        exerciseType: record.exerciseType,
        description: record.description,
        time: record.time,
        distance: record.distance,
        participantPhoto: photosForRecord,
        participant: {
          id: record.participant.id,
          nickname: record.participant.nickname,
        },
      };
    });

    const total = await prisma.exerciseRecord.count({ where }); // 데이터중 검색조건에 맞는 데이터들을 count를 사용해 계산
        
      return { datas, total }
    } catch (error) {
      console.error('기록을 가져오는 중 오류발생:', error);
      throw error;
    }
  };
}

export default ExerciseRecordService;
