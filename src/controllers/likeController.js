import { PrismaClient } from "@../generated/prisma";
const prisma = new PrismaClient();

export const addLike = async (req, res) => {
  const participantId = Number(req.params.participantId);

  try {
    await prisma.like.create({ data: { participantId } });
    res.status(200).json({ message: '추천 완료' });
  } catch (err) {
    if (err.code === 'P2002') {     //  중복 데이터 오류 코드
      res.status(409).json({  error: '이미 추천한 사용자입니다.'  });
    } else  {
      res.status(500).json({  error:  "추천 오류"})
    }
  }
};

export const removeLike = async (req, res) => {
  const participantId = Number(req.params.participantId);

  try {
    await prisma.like.delete({ where: { participantId } });
    res.status(200).json({ message: '추천 취소' });
  } catch (err) {
    res.status(500).json({ error: '추천 취소 오류' });
  }
};