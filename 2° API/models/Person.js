const mongoose = require('mongoose'); //fazeendo a requisição da biblioteca que utiliza meus bancos de dados

const User = mongoose.model('User', { //pesquisar para que serve
    name: String,
    email: String,
    age: Number,
});

module.exports = User; //export
