import ExerciseRecordService from '../services/exerciseRecordService.js';
import axios from 'axios';

class ExerciseRecordController {
  constructor() {
    this.exerciseRecordService = new ExerciseRecordService();
  }

  createRecord = async (req, res, next) => {
    try {
      const { groupId } = req.params;
      const recordData = req.body;

      const newRecord = await this.exerciseRecordService.createRecord(groupId, recordData); //service에서 post할 데이터를 받아옴

      const webhookURL = await this.exerciseRecordService.getGroupWebhookUrl(groupId); //service에서 group에서 꺼내온 discordWebhookUrl을 받음

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
    try {
      const { groupId } = req.params;
      const options = req.query;

      const { datas, total } = await this.exerciseRecordService.getRecords(groupId, options);
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
