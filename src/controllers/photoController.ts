import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//  운동 기록 개당 사진 여러장 업로드 할 때 호출 함수
export const uploadParticipantPhotos = async (req: Request, res: Response): Promise<void | Response> => {
  const { recordId } = req.params;
  const filePaths = req.filePaths;

  if (!filePaths || filePaths.length === 0) {
    return res.status(400).json({ error: "업로드된 파일이 없습니다." });
  }

  try {
    const urls = await Promise.all(
      filePaths.map(async (pathStr) => {
        const photo = await prisma.participantPhoto.create({
          data: {
            exerciseRecordId: Number(recordId),
            photoUrl: pathStr,
          }
        });
        return photo.photoUrl;
      })
    );

    res.status(200).json({ urls });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: "운동기록 사진 업로드 실패", detail: error.message });
  }
};

// 범용 이미지 업로드 컨트롤러
export const uploadImages = (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[];
  if (!files || files.length === 0) {
    return res.status(400).json({ error: '업로드된 파일이 없습니다.' });
  }

  const urls = files.map(file => `/uploads/${file.filename}`);
  
  res.status(201).json({ urls });
};