// import mongoose
const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [
            true,
            'First name cannot be blank'
        ],
        minLength: [3, 'First name must be at least 3 letters']
    },
    lastName: {
        type: String,
        required: [
            true,
            'Last name cannot be blank'
        ],
        minLength: [3, 'Last name must be at least 3 letters']
    }
}, { timestamps: true })

module.exports.Author = mongoose.model('Author', AuthorSchema)