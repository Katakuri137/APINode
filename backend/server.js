const express = require("express")
const mongoose = require('mongoose')
const bookRouter= require('./routers/bookRouter')
const app = express()

app.use(express.json())
app.use(bookRouter)

app.listen(3000, (err) => {
    if (err) {
        console.error("Erreur de démarrage du serveur : ", err);
    } else {
        console.log("Serveur connecté sur le port 3000");
    }
});


app.get('/', (req, res) => {
    try {
        res.json({ message: "Bonjour, Monde !" });
    } catch (err) {
        res.json(err);
    }
});



mongoose.connect('mongodb://localhost:27017/bookDB');



// db.recettes.insertMany([
//     {
//         //     "titre": "Salade César",
//         //     "ingredients": [
//         //         "Laitue",
//         //         "Poulet grillé",
//         //         "Croutons",
//         //         "Fromage Parmesan",
//         //         "Sauce César"
//         //     ],
//         //     "instructions": "Mélangez tous les ingrédients dans un bol.",
//         //     "tempsPreparation": "10 minutes",
//         //     "tempsCuisson": "15 minutes",
//         //     "difficulte": "facile",
//         //     "categorie": "entrée",
//         //     "image": "url_de_l_image"
//         // },
// ])