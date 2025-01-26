const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const db = require('./config/database');
db.connect();


// Import routes
const {getAllQuestions, getSpecificQuestion} = require('./controllers/UserDetails');


// Routes
app.get('/questions', getAllQuestions);
app.post('/specific-que', getSpecificQuestion);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

