const mongoose = require('mongoose')
const slugify = require('slugify')

const BLog = new mongoose.Schema({
    title: {type: String},
    slug: {type: String,  unique: true, default: function(){
        return slugify(`${this.title}-${this._id.toString().slice(-5)}`, { lower: true, locale: 'vi', trim: true })
    }},
    img: {type: String},
    content: [{
        header: {type: String},
        paragraph: {type: String},
    }]
}, {
    timestamps: true,
})

module.exports = mongoose.model('blogs', BLog)