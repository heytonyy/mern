// MKDIR AND CREATE JSON PACKAGE
// mkdir project-name
// npm init -y

// IMPORTANT DEPENDANCYS
const express = require('express')
const cors = require('cors')

// INSTATIATE EXPRESS SERVER
const app = express()
const PORT = 8000

// SET UP MIDDLEWARE -- what is this?
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// DEFINE ENDPOINT
app.get('/api', (req, res) => {
    console.log(req)
    res.json("HELLO")
})

app.post('/api', (req, res) => {
    //res.body --> like request.form
    console.log(req.body)
    res.json(req.body)
})

app.post('/api/:id/:id2', (req, res) => {
    //res.params --> like takes params out of path, return object of all params/vals
    console.log(req.params)
    res.json(req.params)
})

// RUN EXPRESS SERVER
app.listen(PORT, () => console.log(`STARTING SERVER ON PORT: ${PORT}`))