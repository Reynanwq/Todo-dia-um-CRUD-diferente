const mongoose = require('mongoose');

const team = mongoose.Model('/team', {
  id: Number,
  name: String,
  year: Number
});

modules.exports = team;
