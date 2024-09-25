const mongoose = require ('mongoose')
const bookSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "le titre du film est requis"]
    },
    author : {
        type: String,
        required: [true, "l'autheur du film est requis"]
    },
    years : {
        type: Number,
        required: [true, "l'année du film est requis"]
    },
    genre : {
        type: String,
        required: [true, "le genre est requis"]
    },
})

const bookModel = mongoose.model('book', bookSchema);
module.exports = bookModel
