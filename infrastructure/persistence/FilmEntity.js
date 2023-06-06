import mongoose from 'mongoose';

const filmSchema = new mongoose.Schema({
    nom: String,
});

const FilmEntity = mongoose.model('films', filmSchema);

export default FilmEntity;
