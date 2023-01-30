const mongoose = require('mongoose');
const player = mongoose.Model('/player', {
  id: Number,
  nickName: String,
  lane: String,
  team: String,
  nationality: String
});

modules.exports = player;
