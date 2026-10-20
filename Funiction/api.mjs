const express = require('express');
import ServerlessHttp from 'serverless-http';
const app = express();


app.get('/', (req, res) => {
    res.send(Salom);
});
app.get('/About', (req, res) => {
    res.json({
        name:"Muhammadyunus",
        age:"16",
        hobbiy:{
            "1":"Gaming",
            "2":"Coding"
        }
    });
});

export const handler = ServerlessHttp(app)