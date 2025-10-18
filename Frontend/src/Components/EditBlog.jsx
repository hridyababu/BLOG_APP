// Frontend/src/Components/EditBlog.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlog = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    // 1. Fetch existing post data
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/posts/${id}`);
                const data = await res.json();
                setTitle(data.title);
                setContent(data.content);
            } catch (error) {
                console.error('Error fetching post:', error);
                alert('Could not load post for editing.');
                navigate('/');
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id, navigate]);

    // 2. Handle update submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content) {
            alert('Please fill in both title and content.');
            return;
        }

        setIsSubmitting(true);
        const updatedPost = { title, content };

        try {
            const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPost),
            });

            if (res.ok) {
                alert('Post updated successfully!');
                navigate(`/post/${id}`); // Navigate back to the single post view
            } else {
                alert('Failed to update post.');
            }
        } catch (error) {
            console.error('Error updating post:', error);
            alert('An error occurred while updating the post.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) {
        return <p className="text-center text-xl mt-10">Loading post for editing...</p>;
    }

    return (
        <div className="container mx-auto max-w-2xl p-6 bg-white shadow-xl rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Edit Post</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
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
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 resize-y"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition duration-200 ${
                        isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-600 hover:bg-yellow-700'
                    }`}
                >
                    {isSubmitting ? 'Updating...' : 'Save Changes'}
                </button>
            </form>
        </div>
    );
};

export default EditBlog;