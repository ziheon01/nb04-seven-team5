import express from "express";
import fs from "fs";
import path from "path";
import { uploadGroupPhoto } from "../controllers/groupPhotoController.js";

const router = express.Router();

//  단일 파일 업로드 
router.post("/groups/:groupId/photo", (req, res, next) => {
  const contentType = req.headers["content-type"] || "";
  const boundaryMatch = contentType.match(/boundary=(.+)$/);
  if (!boundaryMatch) return res.status(400).send("잘못된 Content-Type 헤더");
  const boundary = boundaryMatch[1];

  let rawData = Buffer.alloc(0);
  req.on("data", chunk => { rawData = Buffer.concat([rawData, chunk]); });

  req.on("end", () => {
    const parts = rawData.toString().split(`--${boundary}`);
    let fileBuffer = null;
    let filename = null;

    for (const part of parts) {
      if (part.includes('Content-Disposition') && part.includes('filename=')) {
        const nameMatch = part.match(/filename="(.+?)"/);
        if (nameMatch) {
          filename = nameMatch[1];
          const start = part.indexOf("\r\n\r\n") + 4;
          const end = part.lastIndexOf("\r\n");
          fileBuffer = Buffer.from(part.substring(start, end), "binary");
          break;
        }
      }
    }

    if (!fileBuffer || !filename) return res.status(400).send("파일이 없습니다.");

    const uploadDir = path.join(process.cwd(), "uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

    const savePath = path.join(uploadDir, Date.now() + "-" + filename);
    fs.writeFileSync(savePath, fileBuffer, "binary");

    req.filePath = "/uploads/" + path.basename(savePath);   // 컨트롤러 폴더에 전달
    next();
  });
}, uploadGroupPhoto);

export default router;