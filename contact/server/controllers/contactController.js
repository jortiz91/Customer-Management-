const Contact = require('../models/contact')
const mongoose = require('mongoose')

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

exports.postContact = async (req, res) => {
  console.log(req.body)
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    notes: req.body.notes,
    tel: req.body.tel,
    email: req.body.email
  }

  try {
    await Contact.create(newContact)

    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
}
