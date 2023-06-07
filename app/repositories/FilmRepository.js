import FilmEntity from './FilmEntity.js';

class FilmRepository {
    async findAll() {
        return FilmEntity.find();
    }

    async findById(filmId) {
        return FilmEntity.findById(filmId);
    }
}

export default FilmRepository;