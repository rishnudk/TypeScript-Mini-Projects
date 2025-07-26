import express from "express";
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './config/db';

import studentRoutes from './routes/studentRoutes';

dotenv.config();

// connect to mongodb
connectDB();

const app = express();
const port = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.redirect('/students');
});

app.use('/students', studentRoutes);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});