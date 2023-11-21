const express = require('express')
const router = express.Router()


router.get('/', function(req, res, next){
    res.render('admin/login', {
        isLogin: true,
        isAdmin: true,
        shop: req.shop
    })
})

module.exports = router