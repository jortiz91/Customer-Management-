const Contact = require('../models/contact')
const mongoose = require('mongoose')

exports.homepage = async (req, res) => {
  const locals = {
    title: 'About',
    description: 'Contact List'
  }

  res.render('index', locals)
}
exports.about = async (req, res) => {
  const locals = {
    title: 'About',
    description: 'Free NodeJs User Management System'
  }

  try {
    res.render('about', locals)
  } catch (error) {
    console.log(error)
  }
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

exports.view = async (req, res) => {
  try {
    const contact = await Contact.findOne({ _id: req.params.id })

    const locals = {
      title: 'View Contact Info',
      description: 'Contact List'
    }
    res.render('contact/view', {
      locals,
      contact
    })
  } catch (error) {
    console.log(error)
  }
}

exports.edit = async (req, res) => {
  try {
    const contact = await Contact.findOne({ _id: req.params.id })

    const locals = {
      title: 'Edit Contact Info',
      description: 'Contact List'
    }
    res.render('contact/edit', {
      locals,
      contact
    })
  } catch (error) {
    console.log(error)
  }
}

exports.editPost = async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      tel: req.body.tel,
      email: req.body.email,
      notes: req.body.notes
    })
    await res.redirect(`/edit/${req.params.id}`)

    console.log('redirected')
  } catch (error) {
    console.log(error)
  }
}

exports.deleteContact = async (req, res) => {
  try {
    await Contact.deleteOne({ _id: req.params.id })
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
}
