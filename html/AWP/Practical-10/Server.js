const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 8080;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB (change URI to your own)
mongoose.connect('mongodb://127.0.0.1:27017/userDB').then(() => {
    console.log("✅ Connected to MongoDB");
}).catch((err) => {
    console.error("❌ MongoDB connection error:", err);
});

// Use routes
app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
