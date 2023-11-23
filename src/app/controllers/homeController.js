const Product = require("../models/Product")
const Blog = require('../models/Blog')
const Category = require('../models/Category')

class HomeController{
    //GET /
    async home(req, res, next){
        try{
            const popProducts = await Product.find({})
                .sort({views: -1})
                .limit(8)
            const popProductsArr = popProducts.map(item => item.toObject())

            const newBlogs = await Blog.find({})
                .sort({updatedAt: -1})
                .limit(8)
            const newBlogsArr = newBlogs.map(item => item.toObject())
            const [latest, ...otherBlogs] = newBlogsArr

            const cate = await Category.find({})
                .limit(6)

            const cateArr = cate.map(item => item.toObject())

            res.render('home', {
                shop: req.shop,
                cate: cateArr,
                pageHome: true,
                popProducts: popProductsArr,
                latest, otherBlogs,
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new HomeController()