// require connections
const mongoose = require('./_connection')

// import data from seeds
const dbSeed = require('./seeds/kiraGallery')

// import the model
const GalleryImage = require('./model/gallery')

// insert into the model
GalleryImage.insertMany(dbSeed, (error, image) => {
  if (error) {
    console.log(error)
  }
  console.log('Data Import Complete.')
  mongoose.connection.close()
})
