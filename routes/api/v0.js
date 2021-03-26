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
router.get('/:id', async (req, res) => {
  const image = await Images.findOne({id: req.params.id})
    try {
      res.render('pages/image')
    } catch (err) {
      res.sendStatus(404)
      console.log(err)
    }
})

module.exports = router;
