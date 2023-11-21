const Blog = require("../../models/Blog")
const pageBlog = true

class NewsController{
    //GET /tin-tuc
    async listNews(req, res, next){
        try{
            const blogs = await Blog.find({})
            const blogsArr = blogs.map(item => item.toObject())

            res.render('news/listNews', {
                shop: req.shop,
                cate: req.cate,
                blogs: blogsArr,
                pageBlog,
            })
        }catch(error){
            next(error)
        }

    }

    //GET /tin-tuc/:slug
    async detailNews(req, res, next){
        const slug = req.params.slug
        try{
            const blog = await Blog.findOne({slug})
            if (!blog) next()

            const blogObject = {
                ...blog.toObject(),
                content: blog.content.map(item => ({
                    ...item.toObject(),
                    paragraph: item.toObject().paragraph.split('\n')
                }))
            }

            const otherBlogs = await Blog.find({_id: {$ne: blog._id}}).limit(4)
            const otherBlogsArr = otherBlogs.map(item => item.toObject())

            res.render('news/detailNews', {
                shop: req.shop,
                cate: req.cate,
                blog: blogObject,
                otherBlogs: otherBlogsArr, pageBlog
            })
        } catch(error) {
            next(error)
        }

    }
}

module.exports = new NewsController()