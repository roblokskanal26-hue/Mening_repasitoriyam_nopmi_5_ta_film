import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
const app = express();
const port = 3333;
const __dirname = path.resolve();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const allProducts = [];
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/salom.html');
});
app.get('/getallProducts', (req, res) => {
    res.json(allProducts);
});
app.post('/addProduct', (req, res) => {
    const { id, name, cost } = req.body;
    const newProduct = { id, name, cost };
    allProducts.push(newProduct);
    res.status(200).send('Maʼlumotlar saqlandi');
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
