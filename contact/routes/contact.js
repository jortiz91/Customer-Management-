const express = require('express')
const router = express.Router()
const passport = require('passport')
const contactController = require('../controllers/contactController')

router.get('/', contactController.homepage)
router.get('/about', contactController.about)
router.get('/add', contactController.addContact)
router.post('/add', contactController.postContact)
router.get('/view/:id', contactController.view)

router.get('/edit/:id', contactController.edit)
router.put('/edit/:id', contactController.editPost)
router.delete('/edit/:id', contactController.deleteContact)

// Google OAuth login route
router.get(
  '/auth/google',
  passport.authenticate(
    // Which passport strategy is being used?
    'google',
    {
      // Requesting the user's profile and email
      scope: ['profile', 'email']
      // Optionally force pick account every time
      // prompt: "select_account"
    }
  )
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
