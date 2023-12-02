const Shop = require("../../models/Shop")
const multer = require('multer')
const path = require('path')
const { promisify } = require('util')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/upload/webpage/')
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    },
})

const upload = multer({ storage: storage })
const uploadAsync = promisify(upload.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'mainImg', maxCount: 1 },
]))

class AdminController{
    //GET /admin
    dashboard(req, res, next){
        res.render('admin/dashboard', {
            isAdmin: true,
            shop: req.shop,
            admin: req.session.user,
        })
    }

    //POST /admin
    async updateDashboard(req, res, next){
        const {name, email, street, ward, district, city, phone, zalo, facebook, website} = req.body
        try{
            await Shop.findOneAndUpdate({_id: req.shop._id}, {
                name, email,
                address: {city, district, ward, street},
                social: {zalo, facebook, website},
                phone: phone.split('-')
            })

            res.redirect('back')
        }catch(error){
            next(error)
        }
    }

    //GET /admin/webpage
    webpage(req, res, next){
        res.render('admin/webpage', {
            isAdmin: true,
            shop: req.shop,
            admin: req.session.user,
        })
    }

    //POST /admin/webpage
    async updateWebpage(req, res, next){
        try{
            await uploadAsync(req, res)
            
            if (!req.fileValidationError && req.files) {
                const shop = await Shop.findOne({})
                if (req.files['mainImg'] && req.files['mainImg'].length > 0){
                    deleteImage(shop.mainImg)
                    req.body.mainImg = '/upload/webpage/' + req.files['mainImg'][0].filename
                } else delete req.body.mainImg

                if (req.files['logo'] && req.files['logo'].length > 0){
                    deleteImage(shop.logo)
                    req.body.logo = '/upload/webpage/' + req.files['logo'][0].filename
                } else delete req.body.logo
            }
            else {
                delete req.body.logo
                delete req.body.mainImg
            }
            await Shop.findOneAndUpdate({_id: req.shop._id}, req.body)
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

module.exports = new AdminController()