const mongoose = require('mongoose');

const Person = mongoose.model({
    name: String,
    email: String,
    Salary: Number,
    idade: Number,
    approved: Boolean,

})

module.exports = Person; //exportando