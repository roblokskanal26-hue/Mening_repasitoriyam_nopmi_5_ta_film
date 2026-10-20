const express = require('express');
const ServerlessHttp = require('serverless-http');
const app = express();
const films = [
    {
        nomi: "Interstellar",
        janr: "Fantastika",
        yil: 2014,
        reyting: 8.7
    },
    {
        nomi: "Inception",
        janr: "Fantastika",
        yil: 2010,
        reyting: 8.8
    },
    {
        nomi: "Titanic",
        janr: "Romantika",
        yil: 1997,
        reyting: 7.9
    },
    {
        nomi: "The Dark Knight",
        janr: "Jangari",
        yil: 2008,
        reyting: 9.0
    },
    {
        nomi: "Avatar",
        janr: "Fantastika",
        yil: 2009,
        reyting: 7.9
    }
];
app.get('/', (req, res) => {
    res.send("Salom");
});
app.get('/films', (req, res) => {
    res.json(films);
});

module.exports.handler = ServerlessHttp(app);