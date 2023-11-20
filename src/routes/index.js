const homeRouter = require('./routers/homeRouter')
const productRouter = require('./routers/productRouter')
const generalRouter = require('./routers/generalRouter')
const newsRouter = require('./routers/newsRouter')

function route(app){
    app.use('/san-pham', productRouter)
    app.use('/tin-tuc', newsRouter)
    app.use('/', generalRouter)
    app.use('/', homeRouter)
}

module.exports = route