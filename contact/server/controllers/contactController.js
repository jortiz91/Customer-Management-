exports.homepage = async (req, res) => {
  const locals = {
    title: 'About',
    description: 'Contact List'
  }

  res.render('index', locals)
}

exports.addContact = async (req, res) => {
  const locals = {
    title: 'Add New Contact',
    description: 'Contact List'
  }

  res.render('contact/add', locals)
}
