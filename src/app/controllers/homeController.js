

class HomeController{
    //GET /
    home(req, res){
        res.render('home')
    }
}

module.exports = new HomeController()