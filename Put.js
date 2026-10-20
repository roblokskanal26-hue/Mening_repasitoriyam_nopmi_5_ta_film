const express = require('express');
const app = express();
const port = 3000;

//const userRouter = require("./users");

app.use("/users", userRouter);
app.listen(port, (err) => {
    console.log('http://localhost:3000');
});