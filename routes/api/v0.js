const mongoose = require('../../_connection')
const express = require('express');
const Image = require('../../models/gallery')

// router
const router = express.Router();

// gallery
router.get('/api/v0/kiraGallery', (req, res) => {
  Image.find((err, images) => {
    if (err) {
      res.sendStatus(404)
    }
    res.json(images)
  })
});

// single images
router.get('/api/v0/kiraGallery/:id', (req, res) => {
  Image.find({id: req.params.id}, (err, images) => {
    if (err) {
      res.sendStatus(404)
    }
    res.json(images)
  })
})

module.exports = router;
