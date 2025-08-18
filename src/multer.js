import { File } from "buffer";
import multer from "multer";
import path from 'path';

const storage = multer.diskStorage({
  destination: function(req, File, cd){

  }
})