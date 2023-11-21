const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    name: {type: String}, 
    desc: {type: String},
    img: [{type: String}],
    views: {type: Number},
    slug: {type: String, unique: true, default: function(){
        return slugify(`${this.name}-${this._id.toString().slice(-5)}`, { lower: true, locale: 'vi', trim: true })
    }},
    categoryId: {type: mongoose.Types.ObjectId, ref: 'categories'}
})

module.exports = mongoose.model('products', Product)