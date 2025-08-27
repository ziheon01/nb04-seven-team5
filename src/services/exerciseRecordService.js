import { PrismaClient } from '../../generated/prisma/index.js'; // 올바른 Prisma Client 임포트 경로
import BadgeService from './badgeService.js'; //Note: 뱃지 상태 갱신을 위해 추가

const prisma = new PrismaClient();
class ExerciseRecordService {
  constructor() {
    this.badgeService = new BadgeService(); // BadgeService 인스턴스 생성
  }

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

    const participant = await prisma.participant.findFirst({ //participant 스키마의 '@@unique(name: "participantInfo", [nickname, password])'를 통해 한번에 검증
      where: {
        nickname: participantNickname,
        password: participantPassword,
      },
    });

    if (!participant) {
      throw new Error("Participant not found");
    }

    const newRecord = await prisma.exerciseRecord.create({
      data: {
        groupId,
        exerciseType,
        description,
        time,
        distance,
        participantPhoto: {
          //Note: 옵셔널체이닝(?.)을 사용해 값이 없을 때 에러없이 undefined로 반환하게 하여 항상 배열 형태를 만들도록함.
          create: participantPhoto?.map(url => ({ photoUrl: url })) || [], //participantPhoto를 url형식으로 저장
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
          increment: time,
        },
      },
    });

    // 운동 기록 추가 후 뱃지 자동 갱신
    await this.badgeService.autoUpdateBadges(groupId);

    return newRecord; //위에서 수집한 정보들을 newRecord 상수에 저장
  }

  getRecords = async (groupId, options) => {
    const { page, limit, order, orderBy, search } = options;
    const skip = (page - 1) * limit;

    //search가 있을 때만 사용할 필터링할 조건에 대해 정의
    const whereCondition = {};
    //search가 있을 때, 참가자 닉네임 검색 조건 추가

    if (search && search.length > 0) {
      whereCondition = {
        participant: {
          nickname: {
            contains: search,
            mode: "insensitive",
          },
        },
      };
    }

    const orderByClause = {};
    if (orderBy === 'createdAt') {
      orderByClause.createdAt = order;
    } else if (orderBy === 'time') {
      orderByClause.time = order;
    } else if (orderBy === 'recordCount') {
      orderByClause.recordCount = order;
    }


    const records = await prisma.exerciseRecord.findMany({ //위에서 분류된 데이터들을 페이지네이션을 하기 위한 코드
      where: { groupId, ...whereCondition },
      skip,
      take: limit,
      orderBy: orderByClause,
      include: {
        participant: true,
        participantPhoto: true,
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

    const total = await prisma.exerciseRecord.count({ where: { groupId, ...whereCondition } }); // 데이터중 검색조건에 맞는 데이터들을 count를 사용해 계산

    return { datas, total }
  }
}

export default ExerciseRecordService;
