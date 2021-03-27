const express = require('express');
const galleryApi = require('./api/v0');
//const config = require('../../config')
const imageGallery = require('../models/gallery')

const router = express.Router();

// gallery Api middleware
router.use('/', galleryApi);

// config middlware
//router.use((req, res, next) => {
  //res.locals = config
  //next()
//})

// Home Page
router.get('/', (req, res) => {
  res.render('pages/index', {
    siteTitle: 'Good Girl Kira',
    pageTitle: 'Home Page',
    author: 'Ashlyn Knox',
  });
});

// Login Page
router.get('/login', (req, res) => {
  res.render('pages/login', {
    siteTitle: 'Good Girl Kira',
    pageTitle: 'Login Page',
    formTitle: 'Login',
    author: 'Ashlyn Knox',
  });
});

// Register Page
router.get('/register', (req, res) => {
  res.render('pages/register', {
    siteTitle: 'Good Girl Kira',
    pageTitle: 'Registration Page',
    formTitle: 'Register',
    author: 'Ashlyn Knox',
  });
});

// Single Image
router.get('/:id', async (req, res, next) => {
  try {
    const image = await imageGallery.findOne({id: req.params.id})
    res.render('pages/image', {
      siteTitle: 'Good Girl Kira',
      pageTitle: 'Image Page',
      author: 'Ashlyn Knox',
    })
  } catch (err) {
    return next(err)
  }
})

module.exports = router;
