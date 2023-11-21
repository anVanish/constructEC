const productRouter = require('./routers/productRouter')
const generalRouter = require('./routers/generalRouter')
const newsRouter = require('./routers/newsRouter')
const cateRouter = require('./routers/cateRouter')
const handleError = require('../middlewares/handleError')
const handleNotfound = require('../middlewares/handleNotfound')
const getShop = require('../middlewares/getShop')
const getCate = require('../middlewares/getCate')

function route(app){
    app.use(getShop)
    app.use(getCate)
    
    app.use('/san-pham', productRouter)
    app.use('/tin-tuc', newsRouter)
    app.use('/danh-muc', cateRouter)
    app.use('/', generalRouter)

    //error handling
    app.use(handleError)

    //not found error
    app.use(handleNotfound)
}

module.exports = route