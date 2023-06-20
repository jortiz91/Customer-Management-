const express = require('express')
const router = express.Router()
const passport = require('passport')
const contactController = require('../controllers/contactController')
const { ensureAuthenticated } = require('../middlewares/auth')

router.get('/', contactController.homepage)
router.get('/about', contactController.about)

// Add Contact Route (Restricted to authenticated users)
router.get('/add', ensureAuthenticated, contactController.addContact)
router.post('/add', ensureAuthenticated, contactController.postContact)

router.get('/view/:id', contactController.view)

router.get('/edit/:id', ensureAuthenticated, contactController.edit)
router.put('/edit/:id', ensureAuthenticated, contactController.editPost)
router.delete('/edit/:id', ensureAuthenticated, contactController.deleteContact)

// Google OAuth login route
router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

// Google OAuth callback route
router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/contacts',
    failureRedirect: '/contacts'
  })
)

// OAuth logout route
router.get('/logout', function (req, res) {
  req.logout(function (err) {
    if (err) {
      console.error(err)
      return res.redirect('/')
    }
    res.redirect('/')
  })
})

module.exports = router
