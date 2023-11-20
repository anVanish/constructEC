const express = require('express')
const router = express.Router()
const generalController = require('../../app/controllers/General/generalController')

router.get('/gioi-thieu', generalController.about)
router.get('/lien-he', generalController.contact)
router.get('/cong-trinh', generalController.construct)
router.get('/dich-vu', generalController.service)

module.exports = router