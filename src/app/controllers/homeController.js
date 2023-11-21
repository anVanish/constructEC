

class HomeController{
    //GET /
    home(req, res, next){
        res.render('home', {
            shop: req.shop,
            cate: req.cate,
            pageHome: true,
        })
        req.success = true
    }
}

module.exports = new HomeController()