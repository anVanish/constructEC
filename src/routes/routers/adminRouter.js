const express = require('express')
const router = express.Router()

const authController = require('../../app/controllers/Auth/authController')
const adminController = require('../../app/controllers/Admin/adminController')
const productController = require('../../app/controllers/Admin/productController')
const authenticateUser = require('../../middlewares/authenticateUser')

router.get('/dang-nhap', authController.login)
router.post('/dang-nhap', authController.loginAdmin)

// router.use(authenticateUser)
router.get('/webpage', adminController.webpage)
router.post('/webpage', adminController.updateWebpage)

router.get('/san-pham', productController.product)
router.get('/san-pham/them', productController.addProduct)
router.post('/san-pham/them', productController.actionAddProduct)
router.get('/san-pham/sua/:slug', productController.updateProduct)
router.post('/san-pham/sua/:slug', productController.actionUpdateProduct)
router.post('/san-pham/xoa/:slug', productController.deleteProduct)

router.get('/', adminController.dashboard)
router.post('/', adminController.updateDashboard)

module.exports = router