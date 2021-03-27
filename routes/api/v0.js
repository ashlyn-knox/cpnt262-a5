const mongoose = require('../../_connection')
const express = require('express');
const Image = require('../../models/gallery')

// router
const router = express.Router();

// gallery
router.get('/api/v0/kiraGallery', async (req, res) => {
  try {
  const imageGallery = await Image.find({})
    res.json(imageGallery)
  } catch (err) {
      res.sendStatus(404)
  }
});

module.exports = router;
