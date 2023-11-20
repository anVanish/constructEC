const {shop} = require('./data/shop')
const Shop = require('./src/app/models/Shop')
const dotenv = require('dotenv')
const db = require('./src/config/db')

dotenv.config()
db.connect()

const newShop = new Shop(shop)
newShop.save()
.then(() => {
    console.log('Shop info imported')
})
.catch((error) => {
    console.log(error)
    console.log('Shop info import failure')
})