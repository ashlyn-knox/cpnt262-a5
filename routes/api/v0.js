const express = require('express');
const kiraGallery = require('../../data/kiraGallery');

const router = express.Router();

router.get('/api/v0/kiraGallery', (req, res) => {
  res.json(kiraGallery);
});

module.exports = router;
