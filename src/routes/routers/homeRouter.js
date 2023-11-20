const express = require('express')
const router = express.Router()
const homeRouter = require('../../app/controllers/homeController')

router.get('/', homeRouter.home)

module.exports = router