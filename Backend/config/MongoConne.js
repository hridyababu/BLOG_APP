// Backend/config/MongoConne.js (Corrected)

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // MUST read CONNECT_DB
        const conn = await mongoose.connect(process.env.CONNECT_DB); 

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
