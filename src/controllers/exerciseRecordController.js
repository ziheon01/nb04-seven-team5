import ExerciseRecordService from '../services/exerciseRecordService.js';
import axios from 'axios';

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

    const newRecord = await this.exerciseRecordService.createRecord(parseInt(groupId), recordData); //service에서 post할 데이터를 받아옴

    const webhookURL = await this.exerciseRecordService.getGroupWebhookUrl(parseInt(groupId)); //service에서 group에서 꺼내온 discordWebhookUrl을 받음

    if (webhookURL) { 
        await axios.post(webhookURL, {
            embeds: [ //discordhook의 전송형식
                {
                    title: '신규 운동 기록',
                    description: newRecord.description,
                    color: 0x00FF00, // Green color
                    fields: [
                        { name: '운동 종류', value: newRecord.exerciseType},
                        { name: '기록 시간', value: newRecord.time.toString(), inline: true },
                        { name: '기록 거리', value: newRecord.distance.toString(), inline: true },
                    ],
                    image: newRecord.participantPhoto?.[0]?.photoUrl? { //participantPhoto가 배열인지 존재하는지 url형식으로 존재하는지
                      url: newRecord.participantPhoto[0].photoUrl       //삼항 연산자를 사용하여 확인하고 없을경우 undefined로 출력
                    } : undefined,
                  },
                ],
            });
            console.log('Discord Webhook 전송 완료');
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
