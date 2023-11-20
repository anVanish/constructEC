
class NewsController{
    //GET /tin-tuc
    listNews(req, res, next){
        res.render('news/listNews', {
            shop: req.shop,
        })
    }

    //GET /tin-tuc/:slug
    detailNews(req, res, next){
        res.render('news/detailNews', {
            shop: req.shop
        })
    }
}

module.exports = new NewsController()