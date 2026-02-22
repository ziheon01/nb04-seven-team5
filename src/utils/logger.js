// src/utils/logger.js
import pino from 'pino';

const logger = pino({
  // 개발 환경에서는 debug 레벨까지, 운영에서는 info 레벨 이상만 출력
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  transport: {
    // 터미널에 예쁘게 출력하기 위한 설정
    target: 'pino-pretty',
    options: {
      colorize: true, // 색상 적용
      translateTime: 'SYS:yyyy-mm-dd HH:MM:ss', // 보기 편한 시간 포맷
      ignore: 'pid,hostname', // 불필요한 정보 숨기기
    },
  },
});

export default logger;