//criando arquivo index
require('dotenv').config() //fazendo a requisição do meu arquivo detenv
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Person = require('./models/Person');

app.use(express.json());

app.use( //PESQUISAR O QUE É ISSO
    express.urlencoded({
        extended: true,
    }),
)

/* MANDAR PARA O MEU ROUTES */
const personRoutes = require('./routes/personRouter');
app.use('/person', personRoutes); //todos faram uso do /person obrigatóriamente

/* CONTRUIT ENDPOINT */

app.get('/hello', (req, res) => {
    res.status(200).json({ message: 'ENDPOINT sucesso' })
});

const port = 3000;
app.listen(port, () => console.log('O servidor está rodando normalmente'));
