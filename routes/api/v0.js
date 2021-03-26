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

//router.get('/api/v0/kiraGallery/:id', async (req, res) => {
  //const image = await Image.findOne((req.params.id) => {
    //res.render('pages/image')
  //})
  //try {
    //res.json(image)
  //} catch (err) {

    //response.status(404);
  //}
//})

// single images
module.exports = router;
