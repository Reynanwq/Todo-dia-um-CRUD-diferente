const mongoose = require('mongoose');

const primeVideo = mongoose.Model('/primeVideo', {
  id: Number,
  name: String,
  lancamento: Number,
  genero: String
});

modules.exports = primeVideo;
