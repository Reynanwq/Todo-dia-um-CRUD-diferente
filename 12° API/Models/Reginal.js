const mongoose = require('mongoose');
const regional = mongoose.Model('/regional', {
  id: Number,
  regiao: String,
});
modules.exports = regional;
