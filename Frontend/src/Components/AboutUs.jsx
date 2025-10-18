// Frontend/src/Components/AboutUs.jsx

import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mx-auto max-w-3xl p-6 bg-white shadow-xl rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">About the BlogApp Project</h1>
            <p className="text-gray-600 mb-4">
                This is a mini-blog application built using the **MERN (MongoDB, Express, React, Node.js) stack**. 
                Its purpose is to demonstrate full-stack development capabilities, including RESTful API creation, 
                database interaction, and a modern, responsive user interface.
            </p>
            <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">Key Technologies Used</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>**Backend:** Node.js, Express, MongoDB (via Mongoose)</li>
                <li>**Frontend:** React, React Router DOM, Vite</li>
                <li>**Styling:** Tailwind CSS (for responsiveness and rapid styling)</li>
            </ul>
        </div>
    );
};

export default AboutUs;