// coding using windows 10, asus

if(process.env.NODE_END == 'development') {
    require("dotenv").config()
}


const express = require('express')

const app = express()


const router = require('./routes/index')
const errHandler = require('./middleware/errHandler')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(router)
app.use(errHandler)

module.exports = app