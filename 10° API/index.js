//requisitções
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const MONGO_USERNAME = process.env.DB_USERNAME;
const MONGO_PASSWORD = process.env.DB_PASSWORD;

//leitura de arquivos estáticos
app.use(express.static(path.resolve(_dirname, 'public')));

//facilitar leitura de um arquivo json
app.use(express.json());

//enlercoded

app.use(
  express.urlencoded({
        extended: true,
    }),
)

//banco de dados
mongoose.connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@apirest.5yq1hjx.mongodb.net/?retryWrites=true&w=majority`);
.then(() => console.log('Conectamos ao banco de dados MongoDB'))
.catch((err) => console.log(err));

//enviar uma mensagem
app.get('/home', (req, res) => {
  res.status(200).json({ message: 'Hello Dog' })
});

//rota api
const dogRoutes = require('./Models/Dog');
app.use('/dog', dogRoutes);

//ler
const port = 3000;
app.listen(port, () => console.log('Server Dog online'));
