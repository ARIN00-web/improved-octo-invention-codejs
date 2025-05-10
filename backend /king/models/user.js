const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    
})

const usermodel = mongoose.model('user', userSchema)

module.exports = usermodel;
