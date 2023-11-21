
class NewsController{
    //GET /tin-tuc
    listNews(req, res, next){
        res.render('news/listNews', {
            shop: req.shop,
            cate: req.cate,
        })
    }

    //GET /tin-tuc/:slug
    detailNews(req, res, next){
        res.render('news/detailNews', {
            shop: req.shop,
            cate: req.cate,
        })
    }
}

module.exports = new NewsController()