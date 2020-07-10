const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        default: 'N/A'
    },
    pages: {
        type: String,
        default: 'N/A'
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    price: {
        type: String,
        default: 'N/A'
    },
    // references the user collection and saves the current user as ownerId
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true})

const Book = mongoose.model('Book', bookSchema);

module.exports = {Book};