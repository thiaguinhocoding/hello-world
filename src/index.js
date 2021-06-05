'use strict';
require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

const SERVER_PORT = process.env.SERVER_PORT || 8080;

app.get('/', async (req, res) => {
    res.json({ hello: 'world' });
})

app.listen(
    SERVER_PORT,
    () => console.log(`Server ready at *:${SERVER_PORT}`)
);
