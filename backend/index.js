const express = require('express');
const cors = require('cors');
const connectToDB = require('./config/dbConnection');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET, POST, PATCH, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  }));

app.use(express.json());

connectToDB()
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

app.get('/ping', (req, res) => {
    res.send("pong");
});

app.listen(port, () => {
    console.log(`🚀 Server running on PORT: ${port}`);
});

