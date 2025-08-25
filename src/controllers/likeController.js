import { PrismaClient } from "../../generated/prisma";
const prisma = new PrismaClient();

//  추천 추가 API 처리
export const addLike = async (req, res) => {
  const participantId = Number(req.params.participantId);   //  요청 url에서 참여자 id받기

  try {
    //  참여자 id 기반 추천 기록 생성
    await prisma.like.create({ data: { participantId } });
    //  성공 시 추천 완료 창
    res.status(200).json({ message: "추천 완료" });
  } catch (error) {
    //  이미 추천 해서 중복 추천일 때 에러
    if (error.code === "P2002") {
      res.status(409).json({ error: "이미 추천한 사용자입니다." });
    } else {
      //  외의 오류일 경우 에러
      res.status(500).json({ error: "추천 오류" });
    }
  }
};

// 추천 취소 API 처리
export const removeLike = async (req, res) => {
  const participantId = Number(req.params.participantId);

  try {
    //  추천 기록 삭제
    await prisma.like.delete({ where: { participantId } });
    //  추천 기록 삭제 성공 메시지 창
    res.status(200).json({ message: "추천 취소" });
  } catch (error) {
    //  외의 오류일 경우 에러
    res.status(500).json({ error: "추천 취소 오류" });
  }
};