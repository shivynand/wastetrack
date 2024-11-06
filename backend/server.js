const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/wastetrack', { useNewUrlParser: true, useUnifiedTopology: true });

// Mock API routes
app.get('/api/stats/:id', (req, res) => {
  res.json({
    totalWaste: Math.floor(Math.random() * 100),
    recyclingRate: Math.floor(Math.random() * 90 + 10)
  });
});

app.get('/api/recycling-rates', (req, res) => {
  res.json({
    'Bottles': Math.floor(Math.random() * 80 + 20),
    'Cans': Math.floor(Math.random() * 70 + 30),
    'Paper': Math.floor(Math.random() * 60 + 40)
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
