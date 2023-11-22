const Shop = require("../../models/Shop")


class AdminController{
    //GET /admin
    dashboard(req, res, next){
        res.render('admin/dashboard', {
            isAdmin: true,
            shop: req.shop,
            admin: req.session.user,
        })
    }

    //POST /admin
    async updateDashboard(req, res, next){
        const {name, email, street, ward, district, city, phone, zalo, facebook, website} = req.body
        try{
            await Shop.findOneAndUpdate({_id: req.shop._id}, {
                name, email,
                address: {city, district, ward, street},
                social: {zalo, facebook, website},
                phone: phone.split('-')
            })

            res.redirect('back')
        }catch(error){
            next(error)
        }
    }
}

module.exports = new AdminController()