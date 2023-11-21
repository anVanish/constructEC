const express = require('express')
const router = express.Router()
const cateController = require('../../app/controllers/Product/cateController')

router.get('/:slug', cateController.listProductsByCate)

module.exports = router