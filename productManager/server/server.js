// DEPENDANCIES
const express = require('express')
const cors = require('cors')

// INSTANTIATE APP
const app = express()
const PORT = 8000

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
require('./config/mongoose.config')

// ROUTES
require('./routes/product.routes')(app)  //what is this (app) doing?

// START SERVER
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))