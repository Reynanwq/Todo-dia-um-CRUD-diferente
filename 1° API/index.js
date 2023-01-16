require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Person = require('./models/Person');

mongoose.set('strictQuery', false);

app.use(express.json()) //Facilita o uso das minha respostas em json

app.use( //PESQUISAR O QUE É ISSO
    express.urlencoded({
        extended: true,
    }),
)

/* --------- ROTAS API -------------- */

/*
const personRouter = require('./routes/personRoutes');
app.use('/person', personRouter);*/

/*  END POINT */

app.get('/home', (req, res) => {
    res.json({ message: 'Helo express' })
});

const port = 3000;
app.listen(port, () => console.log(`The Server is runnig in the port ${port}`));