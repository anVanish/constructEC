const mongoose = require('mongoose')
const slugify = require('slugify')

const Categories = new mongoose.Schema({
    name: {type: String},
    slug: {type: String, unique: true, default: function(){
        return slugify(`${this.name}-${this._id.toString().slice(-5)}`, { lower: true, locale: 'vi', trim: true })
    }},
})


module.exports = mongoose.model('categories', Categories)