
const express = require('express');

const app = express();
const port = 3333;

app.use(express.json());

const friends = [
    //{ id: 1, name: "Muhammadyunus", age: 16 },
    { id: 2, name: "Anvar", age: 14 },
    { id: 3, name: "Jalol", age: 17 },
   // { id: 4, name: "Ali", age: 16 },
    { id: 5, name: "Javlon", age: 16 }
];

app.get('/', (req, res) => {
    res.json(friends);
});

app.post('/new-friend', (req, res) => {
    const { id, name, age } = req.body;
    const newFriend = { id, name, age };
    friends.push(newFriend);
    res.status(201).json(newFriend);
});
//app.put('/friends/:id', (req, res) => {
   // const id = Number(req.params.id);
    //const friend = friends.find(item => item.id === id);
    //if (!friend) {
      //  return res.status(404).json({
            message: "Do'st topilmadi"
      //  });
    //}
   // const { name, age } = req.body;
   // friend.name = name;
   // friend.age = age;
    //res.json(friend);
//});
//app.patch('/friends/:id', (req, res) => {
    //const id = Number(req.params.id);
   // const friend = friends.find(item => item.id === id);
   // res.json(friend);
//});

app.listen(port, () => {
    console.log(`Server http://localhost:${port} da ishlayapti`);
});
