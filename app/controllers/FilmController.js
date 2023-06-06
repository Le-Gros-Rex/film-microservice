import FilmService from '../services/FilmService.js';

class FilmController {
    constructor() {
        this.filmService = new FilmService();
    }

    async getFilms(req, res) {
        const films = await this.filmService.getFilms();
        res.send(films);
    }
}

export default FilmController;