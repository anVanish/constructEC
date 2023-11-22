const Blog = require('../../models/Blog')

class BlogController{
    //GET /admin/tin-tuc
    async listBlogs(req, res, next){
        try{
            const blogs = await Blog.find({})
                .sort({updatedAt: -1})
                .limit(7)

            const blogArr = blogs.map(item => item.toObject())
            res.render('admin/blog/list', {
                isAdmin: true,
                shop: req.shop,
                blogs: blogArr
            })
        }catch(error){
            next(error)
        }
    }

    //GET /admin/tin-tuc/them
    addBlog(req, res, next){
        try{
            res.render('admin/blog/update.hbs', {
                isAdmin: true,
                shop: req.shop,
                isAdd: true,
                title: 'Đăng tin tức',

            })
        }catch(error){
            next(error)
        }
    }

    //POST /admin/tin-tuc/them
    async actionAddBlog(req, res, next){
        try{
            const content = [];
            for (let i = 0; i < req.body.header.length; i++){
                const obj = {
                    header: req.body.header[i],
                    paragraph: req.body.paragraph[i]
                }
                content.push(obj)
            }

            const blog = new Blog({...req.body, content})
            await blog.save()

            res.redirect('/admin/tin-tuc')
        } catch(error){
            next(error)
        }
    }

    //GET /admin/tin-tuc/sua/:slug
    async updateBlog(req, res, next){
        try{
            const blog = await Blog.findOne({slug: req.params.slug})
            if (!blog) return next()
            
            res.render('admin/blog/update', {
                isAdmin: true,
                shop: req.shop,
                title: 'Cập nhật tin tức',
                blog: blog.toObject()
            })
        }catch(error){
            next(error)
        }
    }

    //POST /admin/tin-tuc/:slug/sua
    async actionUpdateBlog(req, res, next){
        try{
            const content = [];
            for (let i = 0; i < req.body.header.length; i++){
                const obj = {
                    header: req.body.header[i],
                    paragraph: req.body.paragraph[i]
                }
                content.push(obj)
            }

            const blog = await Blog.findOneAndUpdate({slug: req.params.slug}, {...req.body, content}, {new: true})
            if (!blog) return next()

            res.redirect('/admin/tin-tuc')
        }catch(error){
            next(error)
        }
    }

    //POST /admin/tin-tuc/:slug/xoa
    async deleteBlog(req, res, next){
        try{
            const blog = await Blog.findOneAndDelete({slug: req.params.slug})
            if (!blog) return next()

            res.redirect('/admin/tin-tuc')
        }catch(error){  
            next(error)
        }

    }
}

module.exports = new BlogController()