import { Request, Response, NextFunction } from 'express';
import ExerciseRecordService from '../services/exerciseRecordService.js';
import axios from 'axios';
import { toRecordResponse } from '../utils/responseMapper.js';

class ExerciseRecordController {
  private exerciseRecordService: ExerciseRecordService;

  constructor() {
    this.exerciseRecordService = new ExerciseRecordService();
  }

  createRecord = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const groupId = req.params.groupId as string;
      // validateCreateRecordBody에서 이미 DTO로 변환되어 req.body에 담겨 있음
      const recordData = req.body; 

      const newRecord = await this.exerciseRecordService.createRecord(groupId, recordData); 

      // --- 디스코드 웹훅 로직 (유지) ---
      const webhookURL = await this.exerciseRecordService.getGroupWebhookUrl(groupId); 

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
        } catch (webhookError: any) {
          console.warn('Discord Webhook 전송 실패:', webhookError.message);
        }
      }

      // 복잡한 객체 조립을 Mapper에게 위임
      res.status(201).json(toRecordResponse(newRecord));

    } catch (error) {
      next(error);
    }
  }

  getRecords = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const groupId = parseInt(req.params.groupId as string, 10);
      const options = {
        ...req.query,
        limit: parseInt(req.query.limit as string, 10) || 10,
        page: parseInt(req.query.page as string, 10) || 1,
      };

      const { datas, total } = await this.exerciseRecordService.getRecords(groupId, options);
      
      // 목록 데이터 변환
      const formattedRecords = datas.map(record => toRecordResponse(record));

      res.status(200).json({
        data: formattedRecords, 
        total,
      });
    } catch (error) {
      next(error);
    }
  }

  getRecordDetail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const groupId = req.params.groupId as string;
      const recordId = req.params.recordId as string;
      const record = await this.exerciseRecordService.getRecordDetail(groupId, recordId);
      res.status(200).json(toRecordResponse(record));
    } catch (error) {
      next(error);
    }
  }
}

export default ExerciseRecordController;