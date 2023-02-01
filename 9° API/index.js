require('dotenv').config(); //reuqisição do dotenv
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Person = require('./Models/Person');
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = encodeURIComponent(precess.env.DB_PASSWORD);

app.use(express.json()); //forma para facilitar o uso do json

app.use(
    express.urlencoded({
        extended: true,
    }),
)

// ROTAS DA API
const personRoutes = require('./routes/personRoutes'); 
app.use('/person', personRoutes);

//ROTA INICIAL
app.get('/home', (req, res) => {
  res.status(200).json({ message: 'Hi 9° api'})
});

//fazendo conexao no mongoDB
mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@apirest.5yq1hjx.mongodb.net/?retryWrites=true&w=majority`);
.then(() => {
  console.log('Conectando com o Banco de Dados');
})
.catch((err) => console.log(err));

const port = 3000;
app.listan(port, () => console.log('Server Online'));
