export const webhookURL = await this.exerciseRecordService.getGroupWebhookUrl(parseInt(groupId)); 
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