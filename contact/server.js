require('dotenv').config()

const express = require('express')
const expressLayout = require('express-ejs-layouts')
const methodOverride = require('method-override')
const connectDB = require('./config/database')
const Contact = require('./models/contact')
const passport = require('passport')

// new code below
const session = require('express-session')

const app = express()
const port = 3000 || process.env.PORT

connectDB()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.use(express.static('public'))
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
)

// app.use(session({... code above
app.use(passport.initialize())
app.use(passport.session())
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  Contact.find({})
    .exec()
    .then((contacts) => {
      res.render('index', { contact: contacts })
    })
    .catch((err) => {
      console.error(err)
      res.render('error')
    })
})

app.use('/', require('./routes/contact'))

app.listen(port, () => {
  console.log(`App listeing on port ${port}`)
})
