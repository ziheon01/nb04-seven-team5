import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


exports.uploadParticipantPhotos = async (req, res) => {
  const { recordId } = req.params;
  const filePaths = req.filePaths; 

  if (!filePaths || filePaths.length === 0) {
    return res.status(400).json({ error: '업로드된 파일이 없습니다.' });
  }

  try {
    const urls = await Promise.all(
      filePaths.map(async (filePath) => {
        const photo = await prisma.participantPhoto.create({
          data: {
            exerciseRecordId: Number(recordId),
            photoUrl: filePath,
          }
        });
        return photo.photoUrl;
      })
    );

    res.status(200).json({ urls });
  } catch (err) {
    res.status(500).json({ error: '운동기록 사진 업로드 실패', detail: err.message });
  }
};