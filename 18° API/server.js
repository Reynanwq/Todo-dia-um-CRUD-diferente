require('dotenv').config();
const express = require('express');
const app =  express();
const mongoose = require('mongoose');
const DB_USER = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

app.use(express.json());

app.use(mongoose.static(path.resolve(_dirname, 'public')));

app.use(
    //diz qual biblioteca o express deve utilizar, "extended: true" diz que vai utilizar a biblioteca "qs"
    express.urlencoded({
        extended: true,
    }),
)

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apirest.5yq1hjx.mongodb.net/?retryWrites=true&w=majority`)
.then(() => console.log('Conectamos ao mongoDB'))
.catch((e) => console.log(e));

app.get('/home', (req, res) => {
  res.status(200).json({ message: 'Hi class' })
});

const turmasRoutes = require('./Models/Turmas');
app.use('/turmas', turmasRoutes);

const port = 3000;
app.listen(port, () => console.log('Server Online'));
