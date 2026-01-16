// Frontend/src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css'; // Custom app styles (contains #root styles)
import './index.css' // Global styles (contains Tailwind CSS import)

// Render the App component to the root div in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

