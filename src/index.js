const express = require('express')
const dotenv = require('dotenv')
const hbs = require('express-handlebars')
const path = require('path')
const route = require('./routes')
const db = require('./config/db')
const morgan = require('morgan')

const handleError = require('./middlewares/handleError')
const handleNotfound = require('./middlewares/handleNotfound')

const app = express()
const port = process.env.PORT || 3000

dotenv.config()
db.connect()

//view engine
app.use(express.static(path.join(__dirname, 'public')))
app.engine('hbs', hbs.engine({
    extname: '.hbs',
    helpers: {
        shortDate: (date) => {
            if (!date) return 'unknown'
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();

            return `${day}-${month}-${year}`;
        },
        shortDatetime: (date) => {
            if (!date) return 'unknown'
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');

            return `${day}/${month}/${year} ${hours}:${minutes}`;
        },
        showAddr: (addr) => {
            if (!addr) return 'unknown'

            return `${addr.street}, ${addr.ward}, ${addr.district}, ${addr.city}`
        },
        showPhone: (phone) => {
            if (!phone) return 'unknown'
            let string = ''
            for (let i = 0; i < phone.length; i++){
                string += phone[i].toString()
                if (i !== phone.length - 1)
                    string += ' - '
            }
            return string
        }
    }
})) //define and config
app.set('view engine', 'hbs') //set
app.set('views', path.join(__dirname, 'resources/views'))


//middlewares
app.use(morgan('short'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//route
route(app)

 //error handling
 app.use(handleError)

 //not found error
 app.use(handleNotfound)

app.listen(port, () => console.log(`Website start at http://localhost:${port}`))