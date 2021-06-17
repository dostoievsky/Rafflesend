const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const cors = require('cors');
const app = express();

mongoose.connect('?');

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*")
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    next()
});

module.exports = app