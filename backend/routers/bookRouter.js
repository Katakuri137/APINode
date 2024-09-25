const bookModel = require('../models/bookModel')
const bookRouter = require('express').Router()

bookRouter.post('/books', async (req, res) => {
    try {
        const newBook = new bookModel(req.body);
        await newBook.save()
        res.json({ message: "Le livre à été crée." })
    } catch (error) {
        res.json({ message: "Impossible de crée le livre." })
    }
});

bookRouter.get('/books', async (req, res) => {
    try {
        const books = await bookModel.find();
        res.json(books);
    } catch (error) {
        res.json({ message: "Impossible d'obtenir le livre." })
    }
});

bookRouter.get('/book/:id', async (req, res) => {
    try {
        const book = await bookModel.findById(req.params.id);
        if (!book) {
            return res.json({ message: "Le livre est introuvable !" })
        }
        res.json(book);
    } catch (error) {
        res.json(error.message);
    }
});


bookRouter.put('/book/:id', async (req, res) => {
    try {
        const updatedBook = await bookModel.findByIdAndUpdate(req.params.id, req.body,
            { new: true, runValidators: true });
        if (!updatedBook) {
            return res.json({ message: "Le livre est introuvable !" })
        }
        res.json(updatedBook);
    } catch (error) {
        res.json(error.message);
    }
});

bookRouter.delete('/book/:id', async (req, res) => {
    try {
        const deleteBook = await bookModel.findByIdAndDelete(req.params.id, req.body,
            { new: true, runValidators: true });
        if (!deleteBook) {
            return res.json({ message: "Le livre à été supprimer !" })
        }
        res.json(updatedBook);
    } catch (error) {
        res.json(error.message);
    }
});


module.exports = bookRouter
