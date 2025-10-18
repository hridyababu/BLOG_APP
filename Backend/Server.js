// Backend/Server.js

const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/MongoConne');

// Connect to database
connectDB();
const app = express();
const port = process.env.PORT || 5000;
// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// CORS middleware
app.use(cors({
    origin: 'http://localhost:5173', // Must match your React app's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
// ➡️ ADD THIS ROUTE FOR SERVER CHECK
app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'Blog App API is running!!',
        availableRoutes: ['GET /api/posts', 'POST /api/posts', 'GET /api/posts/:id', 'PUT /api/posts/:id', 'DELETE /api/posts/:id']
    });
});
// API Routes
app.use('/api/posts', require('./Routes/PostRouts'));

app.listen(port, () => console.log(`Server started on port http://localhost:${port}`));