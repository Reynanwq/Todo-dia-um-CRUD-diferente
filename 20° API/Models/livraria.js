const mongoose = require('mongoose');

const livraria = mongoose.Model('/livraria', {
    titulo: String,
    Autor: String,
    paginas: Number,
    genero: String
});

modules.exports = livraria;
