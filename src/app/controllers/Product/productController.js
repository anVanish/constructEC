

class ProductController{
    
    //GET /san-pham
    listProduct(req, res, next){
        res.render('product/listProduct', {
            shop: req.shop,
        })
    }

    //GET /san-pham/:id
    detailProduct(req, res, next){
        res.render('product/detailProduct', {
            shop: req.shop,
        })
    }
}

module.exports = new ProductController()