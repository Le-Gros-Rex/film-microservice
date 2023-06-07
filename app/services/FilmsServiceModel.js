class FilmsServiceModel {
    createFilm(id, name) {
        return {
            id,
            name
        };
    }

    formatFilm(film) {
        const id = film._id;
        const name = film.nom;

        return this.createFilm(id, name);
    }
}

export default FilmsServiceModel;