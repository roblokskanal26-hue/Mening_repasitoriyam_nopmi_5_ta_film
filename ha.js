const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3333;
app.use(bodyParser.json());
let family = [];
app.post('/family', (req, res) => {
    console.log("Malumot qabul qilindi");
    const newMember = {
        name: "Muhammadyunus",
        job: "Frontend",
        age: 16
    };
    family.push(newMember);
    res.json(newMember);
});
app.get('/my-family', (req, res) => {
    res.json(family);
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
