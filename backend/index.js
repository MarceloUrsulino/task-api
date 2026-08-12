const express = require('express')
require('dotenv').config()
const db = require('./db/conn')
const associations = require('./models/associations')


const app = express()
app.use(express.json())

const routes = require('./routes/Routes')
app.use(routes)

db.sync().then(()=>{

    console.log('Conectou com o banco')
    app.listen(3000)

}).catch(err => {
    console.log(err)
})