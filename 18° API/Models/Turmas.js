const mongoose = require('mongoose');

const turmas = mongoose.Model('/turmas', {
  id: Number,
  sala: String,
  professor: String,
  alunos: String,
});

modules.exports = turmas;
