require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const DB_USER = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

app.use(express.json());

app.use(
  express.unlencoded({
    extended: true,
  }),
);

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apirest.5yq1hjx.mongodb.net/?retryWrites=true&w=majority`)
.then(() => console.log('conexao realizada com sucesso'))
.catch((err) => console.log(err));

const vcsRoutes = require('./Models/team');
app.use('/', vcsRoutes);

app.get('/home', (req, res) => {
  res.status(200).json({ message: 'Hi vcs' })
});

const port = 5050 || 3000;
app.listen(port, () => console.log('Server vcs Online'));
