module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      // User is authenticated, allow access to the next middleware or route handler
      return next()
    }
    // User is not authenticated, redirect them to the login page
    res.redirect('/login')
  }
}
