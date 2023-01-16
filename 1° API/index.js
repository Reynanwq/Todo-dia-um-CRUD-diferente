require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Person = require('./models/Person');
const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;


mongoose.set('strictQuery', false);

app.use(express.json()) //Facilita o uso das minha respostas em json

app.use( //PESQUISAR O QUE É ISSO
    express.urlencoded({
        extended: true,
    }),
)

/* --------- ROTAS API -------------- */

const personRouter = require('./routes/personRoutes');
app.use('/person', personRouter);


mongoose.connect(`mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@firtsapi.z0iev5l.mongodb.net/?retryWrites=true&w=majority
`)



/*  END POINT */

app.get('/home', (req, res) => {
    res.json({ message: 'Helo express, I am Reynan ' })
});

const port = 3000;
app.listen(port, () => console.log(`The Server is runnig in the port ${port}`));
//utilizar uma porta valida
