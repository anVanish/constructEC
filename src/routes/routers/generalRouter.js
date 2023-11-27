const express = require('express')
const router = express.Router()
const generalController = require('../../app/controllers/General/generalController')
const homeController = require('../../app/controllers/homeController')

router.get('/gioi-thieu', generalController.about)
router.get('/lien-he', generalController.contact)
router.get('/dich-vu', generalController.service)
router.get('/', homeController.home)

module.exports = router