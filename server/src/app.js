const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb://localhost:27017/dashboard";
console.log('Mongo URI:', uri); // Debugging line

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connection established successfully'))
    .catch(err => console.log('MongoDB connection error: ', err));

// Import the Data model
const Data = require('../src/models/Data'); // Adjust the path to where your data model is located

// Define the /api/data route
app.get('/api/data', async (req, res) => {
    try {
        console.log('Received request to /api/data'); // Log request received
        const data = await Data.find();
        console.log('Fetched data:', data); // Log fetched data
        if (data.length === 0) {
            console.log('No data found in the collection.');
        }
        res.json(data);
    } catch (err) {
        console.error('Error fetching data:', err); // Log any errors
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
