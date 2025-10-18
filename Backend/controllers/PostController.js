// // Backend/controllers/PostController.js

// const Post = require('../models/Post');

// // @desc    Get all posts
// // @route   GET /api/posts
// // @access  Public
// const getPosts = async (req, res) => {
//     const posts = await Post.find().sort({ createdAt: -1 }); // Get latest first
//     res.status(200).json(posts);
// };

// // @desc    Get single post
// // @route   GET /api/posts/:id
// // @access  Public
// const getPost = async (req, res) => {
//     const post = await Post.findById(req.params.id);

//     if (!post) {
//         return res.status(404).json({ message: 'Post not found' });
//     }

//     res.status(200).json(post);
// };

// // @desc    Create a new post
// // @route   POST /api/posts
// // @access  Public
// const createPost = async (req, res) => {
//     const { title, content } = req.body;

//     if (!title || !content) {
//         return res.status(400).json({ message: 'Please include a title and content' });
//     }

//     const post = await Post.create({
//         title,
//         content,
//     });

//     res.status(201).json(post);
// };

// // @desc    Update a post (Bonus Feature)
// // @route   PUT /api/posts/:id
// // @access  Public
// const updatePost = async (req, res) => {
//     const post = await Post.findById(req.params.id);

//     if (!post) {
//         return res.status(404).json({ message: 'Post not found' });
//     }

//     const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
//         new: true, // Return the updated document
//     });

//     res.status(200).json(updatedPost);
// };

// // @desc    Delete a post (Bonus Feature)
// // @route   DELETE /api/posts/:id
// // @access  Public
// const deletePost = async (req, res) => {
//     const post = await Post.findById(req.params.id);

//     if (!post) {
//         return res.status(404).json({ message: 'Post not found' });
//     }

//     await Post.deleteOne({ _id: req.params.id }); // Use deleteOne or remove()

//     res.status(200).json({ id: req.params.id, message: 'Post removed' });
// };

// module.exports = {
//     getPosts,
//     getPost,
//     createPost,
//     updatePost,
//     deletePost,
// };












// Backend/controllers/PostController.js

const asyncHandler = require('express-async-handler');
const Post = require('../models/Post'); // Verify this path is correct!

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
    // Finds all documents in the Post collection
    const posts = await Post.find({}); 
    res.status(200).json(posts);
});

// @desc    Get single post
// @route   GET /api/posts/:id
// @access  Public
const getPost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
        res.status(404);
        throw new Error('Post not found');
    }

    res.status(200).json(post);
});

// @desc    Create new post
// @route   POST /api/posts
// @access  Public (or Private, if authentication is added later)
const createPost = asyncHandler(async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        res.status(400);
        throw new Error('Please add all fields: title and content');
    }

    const post = await Post.create({
        title,
        content,
    });

    res.status(201).json(post);
});

// @desc    Update a post
// @route   PUT /api/posts/:id
// @access  Public (or Private)
const updatePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
        res.status(404);
        throw new Error('Post not found');
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // Returns the updated document
    });

    res.status(200).json(updatedPost);
});

// @desc    Delete a post
// @route   DELETE /api/posts/:id
// @access  Public (or Private)
// const deletePost = asyncHandler(async (req, res) => {
//     const post = await Post.findById(req.params.id);

//     if (!post) {
//         res.status(404);
//         throw new Error('Post not found');
//     }

//     await post.deleteOne();

//     res.status(200).json({ id: req.params.id, message: 'Post removed' });
// });
// Backend/controllers/PostController.js (The deletePost function)

const deletePost = asyncHandler(async (req, res) => {
    // This line MUST be here to get the ID from the URL parameter
    const post = await Post.findById(req.params.id); 

    if (!post) {
        res.status(404);
        // ⬅️ This is the line that throws the error 
        throw new Error('Post not found'); 
    }

    await post.deleteOne(); 

    res.status(200).json({ id: req.params.id, message: 'Post removed' });
});

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
};