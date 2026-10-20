const express = require('express');
const userRouter = require('./users');
const friendsRoutes = require('./friends');

const app = express();
const port = 3000;

app.use('/users', userRouter);
app.use('/friends', friendsRoutes);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});