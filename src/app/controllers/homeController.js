const Product = require("../models/Product")
const Blog = require('../models/Blog')

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

            res.render('home', {
                shop: req.shop,
                cate: req.cate,
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