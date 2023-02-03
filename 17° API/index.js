require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DB_USER = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

app.use(express.json()); //leitura json
app.use(express.static(path.resolve(_dirname, 'public'))); //leitura de arquivos estáticos

app.use(
  express.unlencoded({
    extended: true,
  }),
)

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apirest.5yq1hjx.mongodb.net/?retryWrites=true&w=majority`)
.then(() => console.log('conexao realizada com sucesso'))
.catch((e) => console.log(e));

app.get('/home', (req, res) => {
  res.status(200).json({ message: 'Hi Student' })
});

const studentRoutes = require('./Models/Estudantes');
app.use('/student', studentRoutes);

const port = 3000;
app.listen(port, () => console.log('Server Online'));
