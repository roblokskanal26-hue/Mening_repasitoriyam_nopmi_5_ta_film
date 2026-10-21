import math from 'path';
import bodyParser from 'body-parser';
express = require('express');
const app = express();
const __dirname = path.resolve();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
    

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});
app.get('/login', (req, res) => {
    const {login,password}=req.body; 
    const USER = {login,password};
    if(USER.login ==='admin'&& USER.password ==='admin123'){
        res.redirect("/home")
    }else{
        res.send('You are not allowerd!')
    }
});

//app.get('/films', (req, res) => {
 //   res.json(films);
//});

app.listen(3000, () => {
    console.log('Film API: http://localhost:3000');
});
