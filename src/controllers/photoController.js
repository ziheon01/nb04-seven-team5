import { PrismaClient } from `../../generated/prisma`;
import { ERROR } from "../const/error";
import { HTTP } from "../const/http";
const prisma = new PrismaClient();

//  운동 기록 개당 사진 여러장 업로드 할 때 호출 함수
export const uploadParticipantPhotos = async (req, res) => {
  const { recordId } = req.params;      //  URL파라미터에서 운동 기록 ID 받기
  const filePaths = req.filePaths;      //  미들웨어에서 받은 사진 경로 배열 받기

  //  파일 경로 배열 없거나 비었을 때 클라이언트에 에러 응답
  if (!filePaths || filePaths.length === 0) {
    //  사진이 하나도 없으면 에러 창 띄우기
    return res.status(HTTP.BAD_REQUEST).json({ error: "업로드된 파일이 없습니다." });
  }

  try {
    //  각각의 사진 경로를 DB에 저장 (동시에 처리) 
    const urls = await Promise.all(
      filePaths.map(async (Path) => {
        const photo = await prisma.participantPhoto.create({
          data: {
            exerciseRecordId: Number(recordId), //  어떤 운동 기록에 속해있는지 저장
            photoUrl: Path,                 //  서버에 저장된 사진 경로 저장
          }
        });
        return photo.photoUrl; // 저장한 경로 반환하기
      })
    );

    //  사진 저장 모두 성공했을 때 저장된 경로 배열을 응답
    res.status(HTTP.OK).json({ urls });
  } catch (err) {
    //  DB 저장 중 에러 발생하면 500상태 반환 후 에러 응답 창 띄우기
    res.status(HTTP.SERVER_ERROR).json({ error: ERROR.CREATION_FAILED('uploadparticipantphotos'), detail: err.message });
  }
};