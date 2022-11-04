const Joke = require('../models/joke.model')

module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

module.exports.getOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.joke_id })
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

module.exports.getRandomJoke = (req, res) => {
    Joke.find()
        .then(results => {
            const randInt = Math.floor(Math.random() * results.length)
            res.json(results[randInt])
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate({ _id: req.params.joke_id }, req.body, { new: true, runValidators: true })
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.joke_id })
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}