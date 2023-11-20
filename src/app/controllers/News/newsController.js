
class NewsController{
    //GET /tin-tuc
    listNews(req, res, next){
        res.render('news/listNews')
    }

    //GET /tin-tuc/:slug
    detailNews(req, res, next){
        res.render('news/detailNews')
    }
}

module.exports = new NewsController()