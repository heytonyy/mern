const { Product } = require('../models/product.model')

// create
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}
// read all
module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}
// read one
module.exports.getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.product_id })
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}
// update
module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate({ _id: req.params.product_id }, req.body, { new: true, runValidators: true })
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}
// delete
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.product_id })
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}


