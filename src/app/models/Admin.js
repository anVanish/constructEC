const mongoose = require('mongoose')

const Admin = new mongoose.Schema({
    name: {type: String},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model('admins', Admin)