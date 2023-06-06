import FilmEntity from '../../infrastructure/persistence/FilmEntity.js';

class FilmRepository {
    async findAll() {
        return FilmEntity.find();
    }
}

export default FilmRepository;