for (let i = 0; i < 5; i++) {
  console.log('Hello world!');
}
import express from 'express';
import groupPhotoRoutes from "./routes/groupPhotoRoutes.js";
import likeRoutes from "./routes/likeRoutes.js";
import photoRoutes from "./routes/photoRoutes.js";


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const photoRoutes = require('./routes/photoRoutes');
app.use('/api', photoRoutes); 