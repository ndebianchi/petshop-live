const express = require('express');
const app = express();
const petsRouter = require('./routes/petsRouter')

app.listen(3000, () => {
    console.log("Server Status: OK");
})

app.use(petsRouter);