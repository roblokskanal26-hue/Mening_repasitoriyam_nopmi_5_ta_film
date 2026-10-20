
const express = require('express');
const app = express();
const port = 3333;

const users = [
    { id: 1, name: "Islom" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Vali" },
    { id: 4, name: "Anvar" }
];
app.get('/users/:id', (req, res) => {
    const user_id = Number(req.params.id);
    const user = users.find(person => person.id === user_id);
    res.json(user);
});
app.get('/search', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;

    const search = [
        { id: 1, name: "Islom", age: 14 },
        { id: 2, name: "Ali", age: 17 },
        { id: 3, name: "Vali", age: 19 },
        { id: 4, name: "Anvar", age: 12 }
    ];


    const foundUser = search.find(person =>
        person.name.toLowerCase() === name.toLowerCase() &&
        (age === undefined || person.age === Number(age))
    );
    res.json(foundUser);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});