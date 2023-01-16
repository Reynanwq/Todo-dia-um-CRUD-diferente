require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 1010;
const personRouter = require('./routes/personRoutes');
app.use(express.json()) //Facilita o uso das minha respostas em json


app.listen(port, () => console.log(`Meu servidor está rodando na porta  ${port}`));