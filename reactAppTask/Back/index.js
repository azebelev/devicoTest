import express from 'express';
import { router } from './controllers/product.js';
import { createDB } from './services/mysqlCRUD.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);


app.listen(PORT, () => {
  console.log(`server on port ${PORT}`)
})