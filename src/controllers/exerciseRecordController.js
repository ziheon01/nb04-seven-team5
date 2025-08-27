import ExerciseRecordService from '../services/exerciseRecordService.js';
import axios from 'axios';

class ExerciseRecordController {
  constructor() {
    this.exerciseRecordService = new ExerciseRecordService();
  }

  createRecord = async (req, res, next) => {
    const { groupId } = req.params;
    const recordData = req.body;
    const uploadedFiles = req.files;
    const photoUrls = uploadedFiles.map(file => `/uploads/${file.filename}`);
    recordData.participantPhoto = photoUrls;
    
    try {
      if (isNaN(parseInt(groupId))) { //groupId의 유효성 검사
    return res.status(400).json({ path: "groupId", message: "groupId must be integer" });
    }

    const newRecord = await this.exerciseRecordService.createRecord(parseInt(groupId), recordData); //service에서 post할 데이터를 받아옴

    const webhookURL = await this.exerciseRecordService.getGroupWebhookUrl(parseInt(groupId)); //service에서 group에서 꺼내온 discordWebhookUrl을 받음

      if (webhookURL) {
        try {
          await axios.post(webhookURL, {
            embeds: [
              {
                title: '신규 운동 기록',
                description: newRecord.description,
                color: 0x00FF00,
                fields: [
                  { name: '운동 종류', value: newRecord.exerciseType },
                  { name: '기록 시간', value: newRecord.time.toString(), inline: true },
                  { name: '기록 거리', value: newRecord.distance.toString(), inline: true },
                ],
                image: newRecord.participantPhoto?.[0]?.photoUrl
                  ? { url: newRecord.participantPhoto[0].photoUrl }
                  : undefined,
              },
            ],
          });
          console.log('Discord Webhook 전송 완료');
        } catch (webhookError) {
          console.warn('Discord Webhook 전송 실패:', webhookError.message);
          // 실패하더라도 무시하고 계속 진행
        }
      }
      const createdRecord = { 
        exerciseType: newRecord.exerciseType,
        description: newRecord.description,
        time: newRecord.time,
        distance: newRecord.distance,
        participantPhoto: newRecord.participantPhoto ?? [],
        participants: {
            id: newRecord.participants.id,
            nickname: newRecord.participants.nickname
        }
    }

    res.status(201).json(createdRecord);
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
}

export default ExerciseRecordController;
