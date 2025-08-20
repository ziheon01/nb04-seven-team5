import ExerciseRecordService from '../services/exerciseRecordService.js';

class ExerciseRecordController {
  constructor() {
    this.exerciseRecordService = new ExerciseRecordService();
  }

  createRecord = async (req, res, next) => {
    const { groupId } = req.params;
    const recordData = req.body;
    
    try {
      if (isNaN(parseInt(groupId))) { //groupId의 유효성 검사
    return res.status(400).json({ path: "groupId", message: "groupId must be integer" });
    }

    const newRecord = await this.exerciseRecordService.createRecord(parseInt(groupId), recordData); //service에서 받아온 데이터를 프론트엔드 형식에 맞게 변형
    res.status(201).json({ 
        exerciseType: newRecord.exerciseType,
        description: newRecord.description,
        time: newRecord.time,
        distance: newRecord.distance,
        participantPhoto: newRecord.participantPhoto ?? [],
        participant: {
            id: newRecord.participant.id,
            nickname: newRecord.participant.nickname
        }
    });
    } catch (error) {
      next(error);
    }
  }

  getRecords = async (req, res, next) => {
    const { groupId } = req.params;
    const { page = 1, limit = 10, order = 'desc', orderBy = 'createdAt', search } = req.query;

    try {
      if (isNaN(parseInt(groupId))) { //groupId의 유효성 검사
    return res.status(400).json({
        path: "groupId",
        message: "groupId must be integer",
    });
    }

    const options = { //페이지네이션을 위한 옵션
      page: parseInt(page),
      limit: parseInt(limit),
      order: order.toLowerCase(),
      orderBy,
      search,
    };

    const { datas, total } = await this.exerciseRecordService.getRecords(parseInt(groupId), options);
    res.status(200).json({ 
      data: datas,
      total,
    });
    } catch (error) {
      next(error);
    }
  }

  getRecordDetail = async (req, res, next) => {
    const { groupId, recordId } = req.params;

    try {
      if (isNaN(parseInt(groupId))) {  //groupId의 유효성 검사
        return res.status(400).json({
            path: 'groupId',
            message: 'groupId must be integer', 
        });
      }
      
      if (isNaN(parseInt(recordId))) {  //recordId의 유효성 검사
        return res.status(400).json({
            path: 'recordId',
            message: 'recordId must be integer', 
        });
      }

      const record = await this.exerciseRecordService.getRecordDetail(groupId, recordId);

      if (!record) {
        return res.status(404).json({ message: 'Record not found' });
      }

      res.status(200).json({ //service에서 받아온 데이터를 프론트엔드 형식에 맞게 변형
        id: record.id,
        exerciseType: record.exerciseType,
        description: record.description,
        time: record.time,
        distance: record.distance,
        participantPhoto: record.participantPhoto ?? [],
        participant: {
            id: record.participant.id,
            nickname: record.participant.nickname
        }
      });
    } catch (error) {
      next(error);
    }
  }
}

export default ExerciseRecordController;
