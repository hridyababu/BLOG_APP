// Frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Components/Home.jsx';
import SinglePost from './Components/SinglePost.jsx';
import CreateBlog from "./Components/CreateBlog.jsx";
import AboutUs from './Components/AboutUs.jsx';
import ContactUs from './Components/ContactUs.jsx';
import EditBlog from './Components/EditBlog.jsx'; // For bonus edit feature
const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow p-4 md:p-8"> {/* Main content area for responsiveness */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/post/:id" element={<SinglePost />} />
                        <Route path="/create" element={<CreateBlog />} />
                        <Route path="/edit/:id" element={<EditBlog />} /> {/* Bonus */}
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/contact" element={<ContactUs />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;