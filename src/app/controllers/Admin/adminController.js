

class AdminController{
    //GET /admin
    dashboard(req, res, next){
        res.render('admin/dashboard', {
            isAdmin: true,
            shop: req.shop
        })
    }
}

module.exports = new AdminController()