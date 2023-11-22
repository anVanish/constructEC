const Category = require('../../models/Category')

class CateController{
    //GET /admin/danh-muc
    async listCates(req, res, next){
        try{
            const cates = await Category.find({})
                .sort({updatedAt: -1})
            const cateArr = cates.map(item => item.toObject())

            res.render('admin/cate/list', {
                isAdmin: true,
                shop: req.shop,
                cates: cateArr
            })
        }catch(error){
            next(error)
        }
    }

    //GET /admin/danh-muc/them
    addCate(req, res, next){
        try{
            res.render('admin/cate/update', {
                isAdmin: true,
                shop: req.shop,
                isAdd: true,
                title: 'Thêm đanh mục',
            })
        }catch(error){
            next(error)
        }
    }

    //POST /admin/danh-muc/them
    async actionAddCate(req, res, next){
        try{
            const cate = new Category(req.body)
            await cate.save()

            res.redirect('/admin/danh-muc')
        } catch(error){
            next(error)
        }
    }

    //GET /admin/danh-muc/sua/:slug
    async updateCate(req, res, next){
        try{
            const cate = await Category.findOne({slug: req.params.slug})
            if (!cate) return next()
            
            res.render('admin/cate/update', {
                isAdmin: true,
                shop: req.shop,
                title: 'Cập nhật tin tức',
                cate: cate.toObject()
            })
        }catch(error){
            next(error)
        }
    }

    //POST /admin/danh-muc/sua/:slug
    async actionUpdateCate(req, res, next){
        try{
            const cate = await Category.findOneAndUpdate({slug: req.params.slug}, req.body, {new: true})
            if (!cate) return next()

            res.redirect('/admin/danh-muc')
        }catch(error){
            next(error)
        }
    }

    //POST /admin/danh-muc/xoa/:slug
    async deleteCate(req, res, next){
        try{
            const cate = await Category.findOneAndDelete({slug: req.params.slug})
            if (!cate) return next()

            res.redirect('/admin/danh-muc')
        }catch(error){  
            next(error)
        }
    }
}

module.exports = new CateController()