//aqui fazemos a requisição no banco de dados 
const mongoose = require('mongoose');

const person = mongoose.Model('/Person',{
   id: Number,
   firtsName: String,
   lastName: String,
   email: String
   telefone: Number,
   Peso: Number,
   Altura: Number
});

modules.exports = Person;
