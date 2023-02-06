const mongoose = require('mongoose');

const continentes = mongoose.Model('/continentes', {
  id: Number,
  country: String,
  population: Number
});

modules.exports = continentes;
