const Product = require('../../models/Product')

class ProductController{
    //GET /admin/san-pham
    async product(req, res, next){
        const search = req.query.search || ''
        const limit = 12
        const page = req.query.page || 1
        try{
            const products = await Product.find({'name': { $regex: `.*${search}.*`, $options: 'i' }})
                .sort({updatedAt: -1})
                .skip((page - 1) * limit)
                .limit(7)
                .populate('categoryId', 'name slug')

            const total = await Product.countDocuments({'name': { $regex: `.*${search}.*`, $options: 'i' }})
            const productArr = products.map(item => item.toObject())
            
            const pagination = []
            const totalPage = Math.ceil(total / limit)
            for(let i = 1; i <= totalPage; i ++){
                const active = (i == page)
                pagination.push({page: i, active})
            }

            let next = page + 1
            if (next > totalPage) next = totalPage

            let prev = page - 1
            if (prev < 1) prev = 1
                
            res.render('admin/product/list', {
                isAdmin: true,
                shop: req.shop,
                products: productArr,
                pagination,
                next, prev, search
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

            res.redirect('back')
        }catch(error){
            next(error)
        }
        
    }
}

module.exports = new ProductController()