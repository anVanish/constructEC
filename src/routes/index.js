const homeRouter = require('./routers/homeRouter')

function route(app){
    app.use(homeRouter)
}

module.exports = route