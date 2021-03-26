const express = require('express');
const router = express.Router();
const galleryApi = require('./api/v0');

// gallery Api middleware
router.use('/', galleryApi);

// config middlware
// TODO Replace all site title's and authors to reduce code

// Home Page
router.get('/', (req, res) => {
  res.render('pages/index', {
    siteTitle: 'Good Girl Kira',
    pageTitle: 'Home Page',
    author: 'Ashlyn Knox',
  });
});

router.get('/:id', (req, res) => {
  const image = Image.find((image) => {
    return item.id === parseInt(request.params.id)
  })
  if (!image) {
    response.status(404);
    return response.send('Invalid ID')
  }
  res.render('gallery-image', image)
})

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

module.exports = router;
