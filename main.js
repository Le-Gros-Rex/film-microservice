import * as dotenv from 'dotenv'
import express from 'express';
import FilmController from './app/controllers/FilmController.js';
import mongoose from 'mongoose';

// Configuration d'Express et des routes
dotenv.config();
const app = express();
const filmController = new FilmController();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URI);
  console.log('connected')
}

app.get('/films', filmController.getFilms.bind(filmController));

app.listen(3000, () => {
  console.log('Server running');
});