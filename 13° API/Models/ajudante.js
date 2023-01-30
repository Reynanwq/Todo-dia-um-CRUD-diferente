const mongoose = require('mongoose');
const ajudante = mongoose.Model('/ajudante', {
  id: Number,
  firstName: String,
  lastName: String,
  cargo: String,
  age: Number,
  height: Number,
  weight: Number
});

modules.exports = ajudante;
