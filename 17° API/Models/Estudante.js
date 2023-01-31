const mongoose = require('mongoose');

const estudante = mongoose.Model('/estudante', {
  registration: Number,
  name: Sring,
  age: Number,
  course: String,
  email: String
});

modules.exports = estudante;
