const mongoose = require('mongoose');

const dog = mongoose.Model('/dog', {
  id: Number,
  firstName: String,
  lastName: String,
  Age: Number,
  dog_breed: String,
  height: Number
});

modules.exports = dog;
