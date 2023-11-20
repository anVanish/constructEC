const mongoose = require('mongoose')

const Shop = mongoose.Schema({
    name: {type: String},
    logo: {type: String},
    address:  {
        city: {type: String},
        district: {type: String},
        ward: {type: String},
        street: {type: String},
    },
    email: {type: String},
    phone: [{type: String}],
    desc: {type: String},
    worktime: {type: String},
    social: {
        zalo: {type: String},
        facebook: {type: String},
        website: {type: String}
    }
})

module.exports = mongoose.model('shop', Shop)