require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const DB_USER = process.env.DB_USERNAME; 
const DB_PASSWORD = process.env.DB_PASSSWORD; 

app.use(express.json());

//leitura de arquivos estáticos
app.use(express.static(path.resolve(_dirname, 'public')));

app.use(
  express.unlencoded({
    extended: true,
  }),
);

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apirest.5yq1hjx.mongodb.net/?retryWrites=true&w=majority`);
.then(() => console.log('Conexao realizada com sucesso'))
.catch((err) => console.log(err));

const regioesRouter = require('./Models/Reginal');
app.use('/', regioesRouter);

app.get('/home', (req, res) => {
   res.status(200).json({ message: 'Hi regions by league of legends'})
});

const port = 3000;
app.listen(port, () => console.log('server online'));
