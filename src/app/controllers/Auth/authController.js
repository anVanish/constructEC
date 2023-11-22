const Admin = require('../../models/Admin')
const bcript = require('bcryptjs')

class AuthController{
    //GET /admin/dang-nhap
    login(req, res, next){
        const message = req.session.message
        delete req.session.message

        res.render('admin/login', {
            isAdmin: true,
            isLogin: true,
            shop: req.shop,
            message,
        })
    }

    //POST /admin/dang-nhap
    async loginAdmin(req, res, next){
        const {email, password} = req.body
       
        let message = ''
        try{
            if (!email) message = 'Vui lòng nhập email'
            if (!password) message = 'Vui lòng nhập mật khẩu'

            const admin = await Admin.findOne({email})
            
            if (!admin) message = 'Email không chính xác'
            else if (!bcript.compareSync(password, admin.password)){
                message = 'Mật khẩu không chính xác'
            }
            
            if (message){
                req.session.message = message
                return res.redirect('back')
            }

            req.session.user = {
                name: admin.name,
                email: admin.email
            }
            res.redirect('/admin')
        } catch(error){
            next(error)
        }
    }

    //GET /admin/quen-mat-khau
    forgotPassword(req, res, next){
        res.render('admin/forgotPassword')
    }

    //GET /admin/dang-xuat
    logout(req, res, next){
        res.render('admin/logout')
    }
}

module.exports = new AuthController()