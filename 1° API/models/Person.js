const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
    name: String,
    email: String,
    salary: Number,
    idade: Number,
    approved: Boolean,
});

module.exports = Person; //exportando