// // Backend/Routes/PostRouts.js

// const express = require('express');
// const router = express.Router();
// const {
//     getPosts,
//     getPost,
//     createPost,
//     updatePost,
//     deletePost,
// } = require('../controllers/PostController');

// router.route('/').get(getPosts).post(createPost);
// router.route('/:id').get(getPost).put(updatePost).delete(deletePost);

// module.exports = router;





// Backend/Routes/PostRouts.js

const express = require('express');
const router = express.Router();
const { 
    getPosts, 
    getPost, 
    createPost, 
    updatePost, 
    deletePost 
} = require('../controllers/PostController');

// The route that returns ALL posts (no ID required)
router.route('/').get(getPosts).post(createPost); 

// The routes that require a specific ID (deletePost is here)
router.route('/:id').get(getPost).put(updatePost).delete(deletePost); 
// Note: deletePost is associated with an ID parameter here.
// It will only run when a DELETE request hits /api/posts/someID

module.exports = router;