const express = require('express')
const router = express.Router()

const authController = require('../../app/controllers/Auth/authController')
const adminController = require('../../app/controllers/Admin/adminController')
const authenticateUser = require('../../middlewares/authenticateUser')

router.get('/dang-nhap', authController.login)
router.post('/dang-nhap', authController.loginAdmin)

// router.use(authenticateUser)
router.get('/webpage', adminController.webpage)
router.post('/webpage', adminController.updateWebpage)

router.get('/', adminController.dashboard)
router.post('/', adminController.updateDashboard)

module.exports = router