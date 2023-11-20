const Shop = require('../../models/Shop')

class GeneralController{

    //GET /gioi-thieu
    about(req, res, next){
        // const {desc, address, phone, name} = shop
        res.render('general/about', {
            shop: req.shop
        })
    }

    //GET /lien-he
    contact(req, res, next){
        res.render('general/contact', {
            shop: req.shop
        })
    }

    //GET /cong-trinh
    construct(req, res, next){
        res.render('general/construct', {
            shop: req.shop
        })
    }

    //GET /dich-vu
    service(req, res, next){
        res.render('general/service', {
            shop: req.shop
        })
    }
}

module.exports = new GeneralController()