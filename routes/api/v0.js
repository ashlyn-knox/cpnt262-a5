const mongoose = require('../../_connection')
const express = require('express');
const Image = require('../../models/gallery')

// router
const router = express.Router();

// gallery
router.get('/api/v0/kiraGallery', async (req, res) => {
  const images = await Image.find({})
  try {
    res.json(images)
  } catch (err) {

      res.sendStatus(404)
  }
});

// single images
router.get('/api/v0/kiraGallery/:id', async (req, res) => {
  const id = await Images.find({id: req.params.id}, (err, images) => {
    try {
      res.render('pages/image')
    } catch (err) {
      res.sendStatus(404)
    }
  })
})

module.exports = router;
