const { Author } = require('../models/author.model')

// create
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }))
        // status 400 --> Bad request
}
// read all
module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}
// read one
module.exports.getOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.author_id })
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}
// update
module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate({ _id: req.params.author_id }, req.body, { new: true, runValidators: true })
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }))
        // status 400 --> Bad request
}
// delete
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.author_id })
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}


