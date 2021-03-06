require("./server/config/config");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { request } = require("http");
const path = require('path')

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require("./server/routes/index"));

mongoose.connect(
    process.env.URLDB, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },

    (err, res) => {
        if (err) throw err;

        console.log("Base de datos ONLINE!");
    }
);

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto: ", process.env.PORT);
});