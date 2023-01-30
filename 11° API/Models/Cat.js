//Fazendo conexão com o banco de dados com o mongoose
const mongoose = require('mongoose');

const cat = mongoose.Model('/cat', {
   id: Number,
   firstName: String,
   lastName: String,
   cat_breed: Srting,
   age: Number,
   weight: Number,
   height: Number
});

modules.exports = cat;
