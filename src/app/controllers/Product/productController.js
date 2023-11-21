

class ProductController{
    
    //GET /san-pham
    listProduct(req, res, next){
        res.render('product/listProduct', {
            shop: req.shop,
            cate: req.cate,
        })
    }

    //GET /san-pham/:slug
    detailProduct(req, res, next){
        res.render('product/detailProduct', {
            shop: req.shop,
            cate: req.cate,
        })
    }
}

module.exports = new ProductController()