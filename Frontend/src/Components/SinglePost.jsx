// Frontend/src/Components/SinglePost.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const SinglePost = () => {
    const { id } = useParams(); // Get the post ID from the URL
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/posts/${id}`);
                if (!res.ok) {
                    throw new Error('Post not found');
                }
                const data = await res.json();
                setPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return <p className="text-center text-xl mt-10">Loading post details...</p>;
    }

    if (error) {
        return <p className="text-center text-red-600 text-xl mt-10">Error: {error}</p>;
    }

    if (!post) {
        return <p className="text-center text-gray-600 text-xl mt-10">Post not available.</p>;
    }

    return (
        <div className="container mx-auto max-w-4xl p-6 bg-white shadow-xl rounded-lg">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-6">Published on: {new Date(post.createdAt).toLocaleDateString()}</p>
            
            <div className="prose max-w-none text-gray-800 leading-relaxed whitespace-pre-wrap">
                {/* Use 'whitespace-pre-wrap' to handle line breaks in the content */}
                <p>{post.content}</p>
            </div>

            <div className="mt-8 flex space-x-4">
                <Link
                    to={`/edit/${post._id}`}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                    Edit Post
                </Link>
                <Link
                    to="/"
                    className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg font-medium hover:bg-gray-300 transition"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default SinglePost;