const Shop = require('../app/models/Shop')

async function getShop(req, res, next){
    try{
        const shop = await Shop.findOne({})
        req.shop = shop.toObject()
        next()
    } catch(error){
        next()
    }
}

module.exports = getShop