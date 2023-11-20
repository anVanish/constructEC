const express = require('express')
const router = express.Router()
const productController = require('../../app/controllers/Product/productController')

router.get('/:id', productController.detailProduct)
router.get('/', productController.listProduct)

module.exports = router