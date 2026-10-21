import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const __dirname = path.resolve();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

app.post('/login', (req, res) => {
    const { login, password } = req.body;
    const USER = { login, password };

    if (USER.login === 'admin' && USER.password === 'admin123') {
        res.redirect('/home');
    } else {
        res.send('You are not allowed!');
    }
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/dist/home.html');
});

app.listen(3000, () => {
    console.log('Film API: http://localhost:3000');
});