const Product = require('../../models/Product')
const multer = require('multer')
const path = require('path')
const { promisify } = require('util')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/upload/products/')
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

class ProductController{
    //GET /admin/cong-trinh
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

    //GET /admin/cong-trinh/them
    addProduct(req, res, next){
        res.render('admin/product/update', {
            isAdmin: true,
            shop: req.shop,
            cate: req.cate,
            title: 'Thêm sản phẩm',
            isAdd: true
        })
    }

    //POST /admin/cong-trinh/them
    async actionAddProduct(req, res, next){
        try{
            await uploadAsync(req, res)

            if (req.fileValidationError) {
                throw new Error()
            } else if (!req.file) {
                throw new Error()
            }

            const product = new Product(req.body)
            product.img = '/upload/products/' + req.file.filename

            await product.save()
            res.redirect('/admin/cong-trinh')
            res.json(req.body)
        }catch(error){
            next(error)
        }
    }

    //GET /admin/cong-trinh/xoa/:slug
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
            await uploadAsync(req, res)
            
            if (!req.fileValidationError && req.file) {
                const productExist = await Product.findOne({slug: req.params.slug})
                if (productExist.img !== '/upload/products/' + req.file.filename)
                    deleteImage(productExist.img)
                req.body.img = '/upload/products/' + req.file.filename
            }
            else {
                delete req.body.img
            }

            const product = await Product.findOneAndUpdate({slug: req.params.slug}, req.body ,{new: true})
            if (!product) return next()
            res.redirect('/admin/cong-trinh')
        }catch(error){
            next(error)
        }
    }

    //POST /admin/cong-trinh/sua/:slug
    async deleteProduct(req, res, next){
        try{
            const product = await Product.findOneAndDelete({slug: req.params.slug})
            deleteImage(product.img)
            if (!product) return next()

            res.redirect('back')
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

module.exports = new ProductController()