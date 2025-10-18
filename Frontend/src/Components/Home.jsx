// // Frontend/src/Components/Home.jsx

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import BlogPost from './BlogPoste.jsx'; // Assuming this renders a single post card

// const Home = () => {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchPosts();
//     }, []);

//     const fetchPosts = async () => {
//         try {
//             const res = await fetch('http://localhost:5000/api/posts');
//             const data = await res.json();
//             setPosts(data);
//             setLoading(false);

//         } catch (error) {
//             console.error('Error fetching posts:', error);
//             setLoading(false);
//         }
//     };
// console.log(posts);

//     if (loading) {
//         return <p className="text-center text-xl mt-10">Loading posts...</p>;
//     }

//     return (
//         <div className="container mx-auto">
//             <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Latest Blog Posts</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {posts.length > 0 ? (
//                     posts.map(post => (
//                         <BlogPost key={post._id} post={post} onPostDelete={fetchPosts} />
//                     ))
//                 ) : (
//                     <p className="col-span-full text-center text-gray-500">No posts yet. Be the first to create one!</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Home;








// Frontend/src/Components/Home.jsx

import React, { useState, useEffect } from 'react';
// Assuming you have a component like this to display each post
import BlogPoste from './BlogPoste.jsx'; 

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // 🛑 THIS IS THE CRITICAL FETCH CALL THAT MUST SUCCEED 🛑
                const res = await fetch('http://localhost:5000/api/posts'); 
                
                if (!res.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await res.json();
                setPosts(data); // Store the retrieved array of posts
            } catch (error) {
                console.error("Error fetching posts:", error);
                // The network error you are seeing is caught here
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []); // Runs once when the component mounts

    if (loading) return <h2 className="text-center mt-10">Loading Posts...</h2>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-8 text-center">Latest Blog Posts</h1>
            
            {/* 🛑 THIS LOGIC RENDERS THE POSTS IF THE ARRAY IS NOT EMPTY 🛑 */}
            <div className="space-y-6">
                {posts.length > 0 ? (
                    posts.map(post => (
                        // Replace 'BlogPoste' with whatever component you use to display a single post
                        <BlogPoste key={post._id} post={post} /> 
                    ))
                ) : (
                    <p className="text-center text-xl mt-10">No posts yet. Be the first to create one!</p>
                )}
            </div>
        </div>
    );
};

export default Home;