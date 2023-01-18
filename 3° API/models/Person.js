//tem que fazer a conexão com o banco de dados, entao usamos o mongoose
const mongoose = require('mongoose');
//const { name, age, approved } = req.body;

const Person = mongoose.Model('/Person', {
    //add name and type
    name: String,
    age: Number,
    approved: Boolean,
});

modules.exports =  Person;