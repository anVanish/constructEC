

class GeneralController{

    //GET /gioi-thieu
    about(req, res, next){
        res.render('general/about')
    }

    //GET /lien-he
    contact(req, res, next){
        res.render('general/contact')
    }

    //GET /cong-trinh
    construct(req, res, next){
        res.render('general/construct')
    }

    //GET /dich-vu
    service(req, res, next){
        res.render('general/service')
    }


}

module.exports = new GeneralController()