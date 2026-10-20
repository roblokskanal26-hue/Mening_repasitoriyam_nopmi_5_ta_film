const express = require('express');
const app = express();
const port = 3333;

app.use(express.json());

app.get('/', (req, res) => {
    throw new Error("Suniy xato");
});
const students = [
    { id: 1, name: "Islom", age: "16" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Vali", age: "13" },
    { id: 4, name: "Anvar" }
];
app.get('/student/:id', (req, res) => {
    const student_id = Number(req.params.id);

    if (req.params.id != student_id) {
        return res.status(400).json({
            error: "ID son bo'lishi kerak"
        });
    } else {
        const foundStudent = students.find(
            person => person.id === student_id
        );
        if (!foundStudent) {
            return res.status(404).json({
                error: "Talaba topilmadi"
            });
        }
        res.json(foundStudent);
    }
});
app.post('/register', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    if (!name || age === undefined || age === null || age === '') {
        return res.status(400).json({
            success: false,
            message: "Name va age majburiy."
        });
    } else {
        res.status(200).json({
            success: true,
            message: "Royxatdan muvaffaqiyatli o'tildi",
            user: {
                name: name,
                age: age
            }
        });
    }
});
app.use((err, req, res, next) => {
    console.error('Xato:', err.message);

    res.status(500).json({
        error: 'Serverda xatolik'
    });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});