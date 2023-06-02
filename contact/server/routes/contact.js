const express = require('express')
const router = express.Router()
const contactController = require('../controllers/contactController')

router.get('/', contactController.homepage)
router.get('/add', contactController.addContact)
router.post('/add', contactController.postContact)
router.get('/view/:id', contactController.view)

router.get('/edit/:id', contactController.edit)
router.put('/edit/:id', contactController.editPost)

module.exports = router
