const express = require('express')
const path = require("path");


const app = express()


app.set('view engine', 'ejs')
app.set('views', './views')


app.use(express.static('public'))

app.use('/',(req, res) => {
    res.render('home')
})

app.listen(8081)