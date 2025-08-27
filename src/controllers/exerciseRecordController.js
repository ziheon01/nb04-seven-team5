import ExerciseRecordService from '../services/exerciseRecordService.js';
import axios from 'axios';
import { HTTP_STATUS } from '../const/http_status.js';
import { ERROR } from '../const/errorMessage.js';
import { options } from '../const/orderBy.js';
import { checkGroupId } from '../utils/validation.js';

class ExerciseRecordController {
  constructor() {
    this.exerciseRecordService = new ExerciseRecordService();
  }

  createRecord = async (req, res, next) => {
    const { groupId } = req.params;
    const recordData = req.body;
    const uploadedFiles = req.files || [];
    const photoUrls = uploadedFiles.map(file => `/uploads/${file.filename}`);
    recordData.participantPhoto = photoUrls;
    
    try {
      checkGroupId(groupId);
    //service에서 post할 데이터를 받아옴
    const newRecord = await this.exerciseRecordService.createRecord(parseInt(groupId), recordData); 
    const webhookURL = await this.exerciseRecordService.getGroupWebhookUrl(parseInt(groupId)); 

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
          // 실패하더라도 무시하고 계속 진행
          console.warn('Discord Webhook 전송 실패:', webhookError.message);
          
        }
      }

    res.status(HTTP_STATUS.CREATED).json({ 
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
     checkGroupId(groupId)

    const { datas, total } = await this.exerciseRecordService.getRecords(parseInt(groupId), options(page,limit,order,orderBy,search));
    res.status(HTTP_STATUS.OK).json({ 
      data: datas,
      total,
    });
    } catch (error) {
      next(error);
    }
  }
}

export default ExerciseRecordController;
