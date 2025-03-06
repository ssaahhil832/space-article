const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: [{
        type: {
            type: String,
            required: true
        },
        content: String,
        styles: {
            fontSize: String,
            fontFamily: String,
            textAlign: String,
            imageSize: String,
            imageAlign: String
        }
    }],
    thumbnail: String,
    readTime: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Article', articleSchema);