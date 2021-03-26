const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
)
  // show that it is connected
  .then(() => {
    console.log('Connected to DB...')
  })
  // return an error if it doesn't connect
  .catch ((err) => {
    console.log(err)
  })

module.exports = mongoose;
