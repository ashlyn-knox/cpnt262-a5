// require the mongoose package
const mongoose = require('mongoose');
// define schema
const gallerySchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    description: String,
    altText: String,
    width: String,
    height: String,
    pathURL: String,
    srcset: String
  }
);
// model
//const Dog = model('dog', gallerySchema)
// compile and export the schema
module.exports = mongoose.model('Image', gallerySchema)
