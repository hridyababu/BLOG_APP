// Backend/models/Post.js

const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a title'],
            trim: true,
        },
        content: {
            type: String,
            required: [true, 'Please add content'],
        },
    },
    {
        
        timestamps: true, // Adds createdAt and updatedAt fields
    }
);

module.exports = mongoose.model('Post', postSchema);