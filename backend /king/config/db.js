const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://localhost:27017/king').then(() => {
    console.log("connected to data user")

})
 
module.exports = connection

