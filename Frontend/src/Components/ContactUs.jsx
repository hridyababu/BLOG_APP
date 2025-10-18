// Frontend/src/Components/ContactUs.jsx

import React from 'react';

const ContactUs = () => {
    return (
        <div className="container mx-auto max-w-3xl p-6 bg-white shadow-xl rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-gray-600 mb-6">
                Thank you for your interest in the BlogApp! Since this is a portfolio project, the contact form is simulated.
            </p>
            
            <div className="space-y-4">
                <div className="border p-4 rounded-lg bg-gray-50">
                    <h2 className="text-xl font-semibold text-gray-700">Developer Contact</h2>
                    <p className="text-gray-600 mt-1">**Email:** developer@example.com</p>
                    <p className="text-gray-600">**GitHub:** [Your GitHub Profile]</p>
                </div>
                
                {/* Simulated Contact Form */}
                <form className="bg-white p-6 border rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Send a Message (Simulated)</h2>
                    <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg mb-3 focus:ring-blue-500" required />
                    <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg mb-3 focus:ring-blue-500" required />
                    <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-lg mb-4 focus:ring-blue-500" required></textarea>
                    <button type="submit" className="w-full bg-blue-600 text-green-1000 p-3 rounded-lg font-medium hover:bg-blue-700 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;