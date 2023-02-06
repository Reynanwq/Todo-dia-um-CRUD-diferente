const mongoose = require('mongoose');

const acessorioPC = mongoose.model('pc', {
  id: Number,
  name: String,
  tipe: String,
  tamanho: Number,
  peso: Number
});

modules.exports = acessorioPC;
