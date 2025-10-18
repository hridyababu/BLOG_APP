// Frontend/src/Components/CreateBlog.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 1. Basic Validation
        if (!title || !content) {
            alert('Please fill in both title and content.');
            return;
        }

        setIsSubmitting(true);
        const newPost = { title, content };

        try {
            // 2. POST Request to Backend API
            const res = await fetch('http://localhost:5000/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPost),
            });

            // 3. Handle Response
            if (res.ok) {
                alert('Post created successfully!');
                navigate('/'); // Redirect to the home page to see the new post
            } else {
                // If the status code is 400 or 500
                const errorData = await res.json();
                alert(`Failed to create post: ${errorData.message || res.statusText}`);
            }
        } catch (error) {
            console.error('Error submitting post:', error);
            alert('An error occurred while connecting to the server.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto max-w-2xl p-6 bg-white shadow-xl rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Create New Post</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block text-lg font-medium text-gray-700 mb-2">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows="10"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 resize-y"
                        required
                    ></textarea>
                </div>
                {/* *** THIS IS THE SUBMIT BUTTON ***
                  Ensure this block is inside the <form> tags.
                */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-lg text-green-1000 font-semibold transition duration-200 ${
                        isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                > 
                    {isSubmitting ? 'Submitting...' : 'Publish Post'}
                </button>
            </form>
        </div>
    );
};

export default CreateBlog;