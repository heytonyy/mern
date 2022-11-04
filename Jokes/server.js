// IMPORT DEPENDANCIES
const express = require('express')
const cors = require('cors')

// INSTANTIATE APP
const app = express()
const PORT = 8000

// MIDDLEWARE
require('./config/mongoose.config')
app.use(express.json(), express.urlencoded({ extended: true }), cors());

// ROUTES
const AllMyJokesRoutes = require('./routes/jokes.routes')
AllMyJokesRoutes(app)

// START SERVER
app.listen(PORT, () => console.log("The server is all fired up on port 8000"))