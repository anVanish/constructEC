const productRouter = require('./routers/productRouter')
const generalRouter = require('./routers/generalRouter')
const newsRouter = require('./routers/newsRouter')
const handleError = require('../middlewares/handleError')
const handleNotfound = require('../middlewares/handleNotfound')
const getShop = require('../middlewares/getShop')

function route(app){
    app.use(getShop)
    app.use('/san-pham', productRouter)
    app.use('/tin-tuc', newsRouter)
    app.use('/', generalRouter)

    //error handling
    app.use(handleError)

    //not found error
    app.use(handleNotfound)
}

module.exports = route