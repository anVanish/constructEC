const Product = require('../../models/Product')

class ProductController{
    //GET /admin/san-pham
    async product(req, res, next){
        try{
            const products = await Product.find({})
                .sort({updatedAt: -1})
                .populate('categoryId', 'name slug')
                .limit(7)
            const productArr = products.map(item => item.toObject())
                
            res.render('admin/product/list', {
                isAdmin: true,
                shop: req.shop,
                products: productArr
            })
        }catch(error){
            next(error)
        }

    }

    //GET /admin/san-pham/them
    addProduct(req, res, next){
        res.render('admin/product/update', {
            isAdmin: true,
            shop: req.shop,
            cate: req.cate,
            title: 'Thêm sản phẩm',
            isAdd: true
        })
    }

    //POST /admin/san-pham/them
    async actionAddProduct(req, res, next){
        try{
            const product = new Product(req.body)
            await product.save()
            res.redirect('/admin/san-pham')
        }catch(error){
            next(error)
        }
    }

    //GET /admin/san-pham/xoa/:slug
    async updateProduct(req, res, next){
        const slug = req.params.slug
        try{
            const product = await Product.findOne({slug})
            if (!product) return next()

            res.render('admin/product/update', {
                isAdmin: true,
                shop: req.shop,
                cate: req.cate,
                title: 'Cập nhật sản phẩm',
                product: product.toObject()
            })
        }catch(error){
            next(error)
        }
    }
    async actionUpdateProduct(req, res, next){
        try{
            const product = await Product.findOneAndUpdate({slug: req.params.slug}, req.body ,{new: true})
            if (!product) return next()
            res.redirect('/admin/san-pham')
        }catch(error){
            next(error)
        }
    }

    //POST /admin/san-pham/sua/:slug
    async deleteProduct(req, res, next){
        try{
            const product = await Product.findOneAndDelete({slug: req.params.slug})
            if (!product) return next()

            res.redirect('/admin/san-pham')
        }catch(error){
            next(error)
        }
        
    }
}

module.exports = new ProductController()