
class GeneralController{

    //GET /gioi-thieu
    about(req, res, next){
        res.render('about', {
            shop: req.shop,
            cate: req.cate,
            pageAbout: true
        })
        
    }

    //GET /lien-he
    contact(req, res, next){
        res.render('contact', {
            shop: req.shop,
            cate: req.cate,
            pageContact: true,
        })
        
    }

    //GET /cong-trinh
    construct(req, res, next){
        res.render('construct', {
            shop: req.shop,
            cate: req.cate,
            pageConstruct: true,
        })
        
    }

    //GET /dich-vu
    service(req, res, next){
        res.render('service', {
            shop: req.shop,
            pageService: true,
        })
    }
}

module.exports = new GeneralController()