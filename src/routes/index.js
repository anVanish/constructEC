const productRouter = require('./routers/productRouter')
const generalRouter = require('./routers/generalRouter')
const newsRouter = require('./routers/newsRouter')
const cateRouter = require('./routers/cateRouter')

const homeAdminRouter = require('./routers/homeAdminRouter')

const getShop = require('../middlewares/getShop')
const getCate = require('../middlewares/getCate')

function route(app){
    app.use(getShop)
    app.use(getCate)
    
    app.use('/san-pham', productRouter)
    app.use('/tin-tuc', newsRouter)
    app.use('/danh-muc', cateRouter)
    app.use('/admin', homeAdminRouter)
    app.use('/', generalRouter)
}

module.exports = route