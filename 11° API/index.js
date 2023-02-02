require('dotenv').config();;
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const DB_USER = process.env.DB_USERNAME;
const DB_PASSWORD  = process.env.DB_PASSWORD;

app.use(express.json());

//leitura de arquuivos estáticos
app.use(express.static(path.resolve((_dirname, 'public')));

app.use(
  express.urlencoded({
        extended: true,
    }),
);

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@apirest.5yq1hjx.mongodb.net/?retryWrites=true&w=majority`);
.then(() => consolee.log('conexao com o MongoDb realizada com sucesso'))
.catch((err) => console.log(err));

const catRoutes = require('./Models/Cat');
app.use('/', catRoutes);

app.get('/home', (req, res) => {
  res.status(200).json({ message: 'Hi litle Cat'})
});

const port = 3000;
app.listen(port, () => console.log('Server Cat online'));
