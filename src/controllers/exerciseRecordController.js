import ExerciseRecordService from '../services/exerciseRecordService.js';

class ExerciseRecordController {
  constructor() {
    this.exerciseRecordService = new ExerciseRecordService();
  }

  createRecord = async (req, res, next) => {
    const { groupId } = req.params;
    const recordData = req.body;
    
    try {
      if (isNaN(groupId)) { 
    return res.status(400).json({ path: "groupId", message: "groupId must be integer" });
    }

        const newRecord = await this.exerciseRecordService.createRecord(groupId, recordData);
        res.status(201).json({ 
            id: newRecord.id,
            exerciseType: newRecord.exerciseType,
            description: newRecord.description,
            time: newRecord.time,
            distance: newRecord.distance,
            participantPhoto: newRecord.participantPhoto,
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
      if (isNaN(groupId)) { 
    return res.status(400).json({
        path: "groupId",
        message: "groupId must be integer",
    });
    }

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      order: order.toLowerCase(),
      orderBy,
      search,
    };

    const { datas, total } = await this.exerciseRecordService.getRecords(options);
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
      if (isNaN(parseInt(groupId))) { 
        return res.status(400).json({
            path: 'groupId',
            message: 'groupId must be integer', 
        });
      }
      
      if (isNaN(parseInt(recordId))) { 
        return res.status(400).json({
            path: 'recordId',
            message: 'recordId must be integer', 
        });
      }

      const record = await this.exerciseRecordService.getRecordDetail(groupId, recordId);

      if (!record) {
        return res.status(404).json({ message: 'Record not found' });
      }

      res.status(200).json({
        id: record.id,
        exerciseType: record.exerciseType,
        description: record.description,
        time: record.time,
        distance: record.distance,
        participantPhoto: record.participantPhoto,
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
