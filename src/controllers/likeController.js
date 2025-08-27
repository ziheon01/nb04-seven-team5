import { PrismaClient } from "../../generated/prisma";
import { ERROR } from "../const/errorMessage";
import { HTTP_STATUS } from "../const/http_status";
const prisma = new PrismaClient();

//  추천 추가 API 처리
export const addLike = async (req, res) => {
  const participantId = Number(req.params.participantId);   //  요청 url에서 참여자 id받기

  try {
    //  참여자 id 기반 추천 기록 생성
    await prisma.like.create({ data: { participantId } });
    //  성공 시 추천 완료 창
    res.status(HTTP_STATUS.OK).json({ message: "추천 완료" });
  } catch (error) {
    //  이미 추천 해서 중복 추천일 때 에러
    if (error.code === "P2002") {
      res.status(HTTP_STATUS.CONFLICT).json({ ERROR.ALREADY_LIKED });
    } else {
      //  외의 오류일 경우 에러
      res.status(HTTP_STATUS.SERVER_ERROR).json({ ERROR.SERVER_ERROR });
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
    res.status(HTTP_STATUS.OK).json({ message: "추천 취소" });
  } catch (error) {
    //  외의 오류일 경우 에러
    res.status(HTTP_STATUS.SERVER_ERROR).json({ ERROR.SERVER_ERROR });
  }
};