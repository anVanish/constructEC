const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

//middlewares

//route
app.get('/', function(req, res){
    res.json('hello world')
})

//error handling

app.listen(port, () => console.log(`Website start at http://localhost:${port}`))