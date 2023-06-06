import FilmRepository from '../repositories/FilmRepository.js';

class FilmService {
    constructor() {
        this.filmRepository = new FilmRepository();
    }

    async getFilms() {
        return await this.filmRepository.findAll();
    }
}

export default FilmService;