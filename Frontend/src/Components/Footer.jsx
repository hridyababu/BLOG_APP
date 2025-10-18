// Frontend/src/Components/Footer.jsx

import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white mt-10">
            <div className="container mx-auto px-4 py-6 text-center">
                <p className="text-sm">
                    &copy; {currentYear} BlogApp. All rights reserved. | Built with MERN Stack and Tailwind CSS.
                </p>
                <div className="mt-2 text-xs text-gray-400">
                    <p>Designed for responsive web development practice.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;