import express from "express";
import fs from "fs";
import path from "path";
import { uploadParticipantPhotos } from "../controllers/photoController.js";

const router = express.Router();

router.post("/exercise-records/:recordId/photos", (req, res, next) => {
 


  const contentType = req.headers["content-type"] || "";
  const boundaryMatch = contentType.match(/boundary=(.+)$/);
  if (!boundaryMatch) return res.status(400).send("잘못된 Content-Type 헤더");
  const boundary = boundaryMatch[1];

  let rawData = Buffer.alloc(0);
  req.on("data", chunk => { rawData = Buffer.concat([rawData, chunk]); });

  req.on("end", () => {
    const parts = rawData.toString().split(`--${boundary}`);
    let fileBuffers = [];
    let fileNames = [];

    for (const part of parts) {
      if (part.includes('Content-Disposition') && part.includes('filename=')) {
        const nameMatch = part.match(/filename="(.+?)"/);
        if (nameMatch) {
          const filename = nameMatch[1];
          const start = part.indexOf("\r\n\r\n") + 4;
          const end = part.lastIndexOf("\r\n");
          const buffer = Buffer.from(part.substring(start, end), "binary");
          fileBuffers.push(buffer);
          fileNames.push(filename);
        }
      }
    }

    if (fileBuffers.length === 0) return res.status(400).send("파일이 없습니다.");

    const uploadDir = path.join(process.cwd(), "uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

    const savedPaths = [];
    for (let i = 0; i < fileBuffers.length; i++) {
      const savePath = path.join(uploadDir, Date.now() + "-" + fileNames[i]);
      fs.writeFileSync(savePath, fileBuffers[i], "binary");
      savedPaths.push("/uploads/" + path.basename(savePath));
    }

    req.filePaths = savedPaths; // 컨트롤러에 배열 전달
    next();
  });
}, uploadParticipantPhotos);

export default router;
