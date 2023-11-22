const mongoose = require('mongoose')
const slugify = require('slugify')

const Product = new mongoose.Schema({
    name: {type: String}, 
    desc: {type: String},
    img: [{type: String}],
    views: {type: Number, default: 0},
    slug: {type: String, unique: true, default: function(){
        return slugify(`${this.name}-${this._id.toString().slice(-5)}`, { lower: true, locale: 'vi', trim: true })
    }},
    categoryId: {type: mongoose.Types.ObjectId, ref: 'categories'}
}, {
    timestamps: true,
})

module.exports = mongoose.model('products', Product)