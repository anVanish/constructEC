const Category = require('../../models/Category')
const Product = require('../../models/Product')

class CateController{
    //get danh-muc/:slug
    async listProductsByCate(req, res, next){
        const slug = req.params.slug
        const page = req.query.page || 1
        const limit = 12
        try{
            const cate = await Category.findOne({slug})
            if (!cate) next()

            const products = await Product.find({categoryId: cate._id})
                .skip((page - 1) * 12)
                .limit(limit)
            const total = await Product.countDocuments({categoryId: cate._id})
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
                next, last,
                isCate: true,
                currentCate: cate.toObject(),
            })
        }catch(error){
            next(error)
        }
    }

}

module.exports = new CateController()