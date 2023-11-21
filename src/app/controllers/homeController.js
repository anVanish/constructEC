

class HomeController{
    //GET /
    home(req, res, next){
        res.render('home', {
            shop: req.shop,
            cate: req.cate
        })
    }
}

module.exports = new HomeController()