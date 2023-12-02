const Blog = require('../../models/Blog')
const multer = require('multer')
const path = require('path')
const { promisify } = require('util')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/upload/blogs/')
    },
    filename: function (req, file, cb) {
        const productSlug = req.params.slug
        const ext = path.extname(file.originalname)
        const filename = productSlug + ext
        cb(null, filename)
    },
})
const upload = multer({ storage: storage })
const uploadAsync = promisify(upload.single('img'))

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
            await uploadAsync(req, res)

            if (req.fileValidationError) {
                throw new Error()
            } else if (!req.file) {
                throw new Error()
            }

            req.body.img = '/upload/blogs/' + req.file.filename

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
            await uploadAsync(req, res)

            if (!req.fileValidationError && req.file) {
                const blogExist = await Blog.findOne({slug: req.params.slug})
                if (blogExist.img !== '/upload/blogs/' + req.file.filename)
                    deleteImage(blogExist.img)
                req.body.img = '/upload/blogs/' + req.file.filename
            }
            else {
                delete req.body.img
            }

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
            deleteImage(blog.img)

            res.redirect('/admin/tin-tuc')
        }catch(error){  
            next(error)
        }

    }
}

function deleteImage(img){
    const imagePath = path.join(__dirname, '../../../public/', img)
    if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath)
    }
}

module.exports = new BlogController()