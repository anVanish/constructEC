
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
        const shop = req.shop
        const address = `${shop.address.street}, ${shop.address.ward}, ${shop.address.district}, ${shop.address.city}`
        const encodedAddress = encodeURIComponent(address);
        const googleMapsURL = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

        res.render('contact', {
            shop: req.shop,
            cate: req.cate,
            pageContact: true,
            googleMapsURL,
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