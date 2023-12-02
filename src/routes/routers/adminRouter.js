const express = require('express')
const router = express.Router()

const authController = require('../../app/controllers/Auth/authController')
const adminController = require('../../app/controllers/Admin/adminController')
const productController = require('../../app/controllers/Admin/productController')
const authenticateUser = require('../../middlewares/authenticateUser')
const blogController = require('../../app/controllers/Admin/blogController')
const cateController = require('../../app/controllers/Admin/cateController')

router.get('/dang-nhap', authController.login)
router.post('/dang-nhap', authController.loginAdmin)

router.use(authenticateUser)
router.get('/webpage', adminController.webpage)
router.post('/webpage', adminController.updateWebpage)

router.get('/cong-trinh', productController.product)
router.get('/cong-trinh/them', productController.addProduct)
router.post('/cong-trinh/them', productController.actionAddProduct)
router.get('/cong-trinh/sua/:slug', productController.updateProduct)
router.post('/cong-trinh/sua/:slug', productController.actionUpdateProduct)
router.post('/cong-trinh/xoa/:slug', productController.deleteProduct)

router.get('/tin-tuc', blogController.listBlogs)
router.get('/tin-tuc/them', blogController.addBlog)
router.get('/tin-tuc/sua/:slug', blogController.updateBlog)
router.post('/tin-tuc/xoa/:slug', blogController.deleteBlog)
router.post('/tin-tuc/them', blogController.actionAddBlog)
router.post('/tin-tuc/sua/:slug', blogController.actionUpdateBlog)

router.get('/danh-muc', cateController.listCates)
router.get('/danh-muc/them/', cateController.addCate)
router.get('/danh-muc/sua/:slug', cateController.updateCate)
router.post('/danh-muc/them/', cateController.actionAddCate)
router.post('/danh-muc/sua/:slug', cateController.actionUpdateCate)
router.post('/danh-muc/xoa/:slug', cateController.deleteCate)

router.get('/dang-xuat', authController.logout)

router.get('/', adminController.dashboard)
router.post('/', adminController.updateDashboard)

module.exports = router