import { PrismaClient } from "@../generated/prisma";
const prisma = new PrismaClient();

//  업로드된 파일 경로 req.filePath로 라우터에서 받음
export const uploadGroupPhoto = async (req, res) => {
  const { groupId } = req.params;
  const filePath = req.filePath;

  if (!filePath) {
    return res.status(400).json({ error: '사진 파일이 없습니다.' });
  }

  try {
    const groupPhoto = await prisma.groupPhoto.upsert({
      where: { groupId: Number(groupId) },
      update: { photoUrl: filePath },
      create: {
        groupId: Number(groupId),
        photoUrl: filePath,
      }
    });

    res.status(200).json({ photoUrl: groupPhoto.photoUrl });
  } catch (err) {
    res.status(500).json({ error: '대표사진 업로드 실패', detail: err.message });
  }
};