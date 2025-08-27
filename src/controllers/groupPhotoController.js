import { PrismaClient } from `../generated/prisma`;
import { ERROR } from "../const/errorMessage.js";
import { HTTP_STATUS } from "../const/http_status.js";

const prisma = new PrismaClient();

//  그룹 대표사진 업로드 처리 함수
export const uploadGroupPhoto = async (req, res) => {
  const { groupId } = req.params;     //  URL에서 그룹 고유번호 받기
  const filePath = req.filePath;      //  multer가 저장한 파일 경로 받기

  //  파일이 없으면 400 오류
  if (!filePath) {
    return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: ERROR.NOT_FOUND(filePath) });
  }

  try {
    //  upsert를 통해 해당 그룹 사진이 있으면 수정, 없으면 생성하도록 처리
    const groupPhoto = await prisma.groupPhoto.upsert({
      where: { groupId: Number(groupId) },  //  groupId 통해 DB 검색
      update: { photoUrl: filePath },        // 있으면 photoUrl에 업데이트
      create: { groupId: Number(groupId), photoUrl: filePath }  // 없으면 새로 만듦
    });

    //  완료되면 새 사진경로를 클라이언트에 응답
    res.status(HTTP_STATUS.OK).json({ photoUrl: groupPhoto.photoUrl });
  } catch (err) {
    //  에러 발생 시 메시지 포함 500 응답 오류
    res.status(HTTP_STATUS.SERVER_ERROR).json({ error: ERROR.CREATION_FAILED(groupPhoto), detail: err.message });
  }
};