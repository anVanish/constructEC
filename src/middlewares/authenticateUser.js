
function authenticateUser(req, res, next){
    if (req.session.user) return next()

    res.redirect('/admin/dang-nhap')
}

module.exports = authenticateUser