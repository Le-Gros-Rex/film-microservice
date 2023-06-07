import axios from 'axios';
import FilmService from '../services/FilmService.js';
class FilmController {
    constructor() {
        this.filmService = new FilmService();
    }
    async getFilms(request, response) {
        try {
            const films = await this.filmService.getFilms();
            response.status(200).json(films);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        }
    }

    async getFilm(request, response) {
        const filmId = request.params.id;

        try {
            const film = await this.filmService.getFilm(filmId);
            response.status(200).json(film);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        }
    }

    async getFilmSessions(request, response) {
        const filmId = request.params.id;

        try {
            const film = await this.filmService.getFilm(filmId);

            // replace with good api
            const sessionsResponse = await axios.get(`https://random-data-api.com/api/v2/addresses?size=10`);
            const sessions = sessionsResponse.data;

            response.status(200).json(sessions);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        }
    }
}

export default FilmController;