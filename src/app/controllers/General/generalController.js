
class GeneralController{

    //GET /gioi-thieu
    about(req, res, next){
        // const {desc, address, phone, name} = shop
        res.render('general/about', {
            shop: req.shop,
            cate: req.cate,
            pageAbout: true
        })
        req.success = true
    }

    //GET /lien-he
    contact(req, res, next){
        res.render('general/contact', {
            shop: req.shop,
            cate: req.cate,
            pageContact: true,
        })
        req.success = true
    }

    //GET /cong-trinh
    construct(req, res, next){
        res.render('general/construct', {
            shop: req.shop,
            cate: req.cate,
            pageConstruct: true,
        })
        req.success = true
    }

    //GET /dich-vu
    service(req, res, next){
        res.render('general/service', {
            shop: req.shop,
            pageService: true,
        })
        req.success = true
    }
}

module.exports = new GeneralController()