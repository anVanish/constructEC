const Product = require("../../models/Product")
const pageProduct = true

class ProductController{
    
    //GET /san-pham
    async listProduct(req, res, next){
        const page = req.query.page || 1
        const limit = 12
        const search = req.query.search || ''
        const filter = {'name': { $regex: `.*${search}.*`, $options: 'i' }}
        try{
            const products = await Product.find(filter)
                .skip((page - 1) * 12)
                .limit(limit)
            const total = await Product.countDocuments(filter)
            const productArr = products.map(item => item.toObject())
            
            const pagination = []
            const totalPage = Math.ceil(total / limit)
            for(let i = 1; i <= totalPage; i ++){
                const active = (i == page)
                pagination.push({page: i, active})
            }

            let next = page + 1
            if (next > totalPage) next = totalPage

            let last = totalPage

            res.render('product/listProduct', {
                shop: req.shop,
                cate: req.cate,
                products: productArr,
                pagination,
                next, last, search, pageProduct
            })
        }catch(error){
            next(error)
        }       
    }

    //GET /san-pham/:slug
    async detailProduct(req, res, next){
        const slug = req.params.slug
        try{
            const product = await Product.findOne({slug})
                .populate('categoryId', 'name slug')
            if (!product) return next()

            product.views += 1
            await product.save()
            
            const sameProducts = await Product.find({categoryId: product.categoryId, _id: {$ne: product._id}}).limit(4)

            const sameProductsArr = sameProducts.map(item => item.toObject())

            res.render('product/detailProduct', {
                shop: req.shop,
                cate: req.cate,
                product: product.toObject(),
                sameProducts: sameProductsArr, pageProduct,
            })

            // res.json(product)
        } catch (error){
            next(error)
        }        
    }
}

module.exports = new ProductController()