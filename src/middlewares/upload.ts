//  multer 설정 파일 업로드
import multer from "multer";
import path from "path";
import fs from "fs";

//  uploads 폴더 경로 만들기 (없으면 만들어주는)
const uploadDir = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

//  multer 저장 방식 
const storage = multer.diskStorage({
  //  파일 저장 될 실제 경로 설정
  destination: (req, file, cb) => {
    cb(null, uploadDir);              // uploads 폴더에 저장
  },
  //  저장할 때 파일명 정하는 거
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    //  같은 파일명 중복 방지, 날짜+확장자로 저장
    cb(null, Date.now() + ext);
  }
});

//  설정 포함 multer 미들웨어 객체 생성
const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB 제한 
});
// 내보내서 다른 파일에서 import 할 수 있도록 export
export default upload;