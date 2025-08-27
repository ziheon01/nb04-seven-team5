import express from "express";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/", upload.array("files", 5), (req, res) => {
  const urls = req.files.map(file => `/uploads/${file.filename}`);
  res.json({ urls });
});

export default router;