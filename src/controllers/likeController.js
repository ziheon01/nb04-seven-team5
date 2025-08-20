import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

exports.addLike = async (req, res) => {
  const participantId = Number(req.params.participantId);

  try {
    await prisma.like.create({ data: { participantId } });
    res.status(200).json({ message: '추천 완료' });
  } catch (err) {
    res.status(400).json({ error: '이미 추천했거나 오류' });
  }
};

exports.removeLike = async (req, res) => {
  const participantId = Number(req.params.participantId);

  try {
    await prisma.like.delete({ where: { participantId } });
    res.status(200).json({ message: '추천 취소' });
  } catch (err) {
    res.status(500).json({ error: '추천 취소 오류' });
  }
};