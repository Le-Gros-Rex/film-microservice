import mongoose from 'mongoose';

const filmSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nom: String,
});

const FilmEntity = mongoose.model('films', filmSchema);

export default FilmEntity;
