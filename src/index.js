const express = require('express')
const dotenv = require('dotenv')
const hbs = require('express-handlebars')
const path = require('path')
const route = require('./routes')

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

//middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.engine('hbs', hbs.engine({
    extname: '.hbs',
})) //define and config
app.set('view engine', 'hbs') //set
app.set('views', path.join(__dirname, 'resources/views'))

//route
route(app)

//error handling

app.listen(port, () => console.log(`Website start at http://localhost:${port}`))