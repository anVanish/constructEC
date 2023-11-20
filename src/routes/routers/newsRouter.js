const express = require('express')
const router = express.Router()
const newsController = require('../../app/controllers/News/newsController')

router.get('/:slug', newsController.detailNews)
router.get('/', newsController.listNews)

module.exports = router