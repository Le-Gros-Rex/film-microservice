import * as dotenv from 'dotenv'
import express from 'express';
import FilmController from './app/controllers/FilmController.js';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
const filmController = new FilmController();

async function main() {
  await mongoose.connect(process.env.DB_URI);
  console.log('connected')
}

app.get('/films', filmController.getFilms.bind(filmController));
app.get('/films/:id', filmController.getFilm.bind(filmController));
app.get('/films/:id/sessions', filmController.getFilmSessions.bind(filmController));


app.listen(3000, () => {
  main().catch(err => console.log(err));
  console.log('Server running');
});