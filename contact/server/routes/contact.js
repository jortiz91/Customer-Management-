const express = require('express')
const router = express.Router()
const contactController = require('../controllers/contactController')

router.get('/', contactController.homepage)
router.get('/add', contactController.addContact)
router.post('/add', contactController.postContact)

module.exports = router
