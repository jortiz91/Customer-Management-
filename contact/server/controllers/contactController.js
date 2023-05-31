exports.homepage = async (req, res) => {
  const locals = {
    title: 'About',
    description: 'Contact List'
  }

  res.render('index', locals)
}
