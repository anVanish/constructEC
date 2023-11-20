

class ProductController{
    
    //GET /san-pham
    listProduct(req, res, next){
        res.render('product/listProduct')
    }

    //GET /san-pham/:id
    detailProduct(req, res, next){
        res.render('product/detailProduct')
    }
}

module.exports = new ProductController()