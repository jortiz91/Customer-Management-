require('dotenv').config()

const express = require('express')
const expressLayout = require('express-ejs-layouts')
const connectDB = require('./server/config/database')

const app = express()
const port = 3000 || process.abort.env.PORT

connectDB()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/', require('./server/routes/contact'))

app.listen(port, () => {
  console.log(`App listeing on port ${port}`)
})
