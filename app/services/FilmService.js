import { Types } from 'mongoose';
import FilmRepository from '../repositories/FilmRepository.js';
import FilmsServiceModel from './FilmsServiceModel.js';


class FilmService {
    constructor() {
        this.filmRepository = new FilmRepository();
        this.filmsServiceModel = new FilmsServiceModel();
    }

    async getFilms() {
        try {
            const films = await this.filmRepository.findAll();
            return films.map(film => this.filmsServiceModel.formatFilm(film));
        } catch (error) {
            throw error;
        }
    }

    async getFilm(id) {
        try {
            const objectId = new Types.ObjectId(id);
            const film = await this.filmRepository.findById(objectId);
            if (!film) {
                throw new Error('Film not found');
            }
            return film;
        } catch (error) {
            throw error;
        }
    }
}

export default FilmService;