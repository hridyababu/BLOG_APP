// Frontend/src/Components/BlogPoste.jsx

import React from 'react';
import { Link } from 'react-router-dom';
const BlogPoste = ({ post, onPostDelete }) => {
    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                // ... (fetch call)
                const res = await fetch(`http://localhost:5000/api/posts/${post._id}`, {
                    method: 'DELETE',
                });

                if (res.ok) {
                    alert('Post deleted successfully!');
                    
                    // 🛑 CRITICAL FIX: Check if the prop exists before calling it 🛑
                    if (onPostDelete) {
                        onPostDelete(); // Refresh the list in the Home component
                    }
                } else {
                    alert('Failed to delete the post.');
                }
            } catch (error) {
                console.error('Error deleting post:', error);
                // Keep the error handling clean here.
            }
        }
    };
    // Simple function to truncate content for the card view
    const truncateContent = (text, limit) => {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    };

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-xl border border-gray-100">
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{truncateContent(post.content, 100)}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <Link to={`/post/${post._id}`} className="text-blue-600 hover:text-blue-800 font-medium mb-2 sm:mb-0">
                        Read More &rarr;
                    </Link>
                    <div className="space-x-2">
                        <Link
                            to={`/edit/${post._id}`}
                            className="bg-yellow-500 text-white px-3 py-1 text-sm rounded hover:bg-yellow-600 transition"
                        >
                            Edit
                        </Link>
                        <button
                            onClick={handleDelete}
                            className="bg-red-400 text-blue-900 px-3 py-1 text-sm rounded hover:bg-green-600 transition"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPoste;