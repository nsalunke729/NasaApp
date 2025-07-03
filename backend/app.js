// backend/app.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const NASA_API_KEY = process.env.NASA_API_KEY || 'PBoWifPVDfqvABcPX1qMhNjo7a4Z0dew1zj44dwe';
//;

// Astronomy Picture of the Day (APOD)
app.get('/api/apod', async (req, res) => {
  try {
    const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch APOD' });
  }
});

// Mars Rover Photos
app.get('/api/mars', async (req, res) => {
  const { sol = 1000, camera = 'fhaz', rover = 'curiosity' } = req.query;
  try {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${NASA_API_KEY}`;
    const { data } = await axios.get(url);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch Mars Rover photos' });
  }
});

// EPIC (Earth imagery)
app.get('/api/epic', async (req, res) => {
  try {
    const { data } = await axios.get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${NASA_API_KEY}`);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch EPIC images' });
  }
});

// NeoWs (Near Earth Objects)
app.get('/api/neo', async (req, res) => {
  try {
    const startDate = req.query.start_date || new Date().toISOString().split('T')[0];
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&api_key=${NASA_API_KEY}`;
    const { data } = await axios.get(url);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch NEO data' });
  }
});

// NASA Image and Video Library
app.get('/api/images', async (req, res) => {
  const query = req.query.q || 'moon';
  try {
    const url = `https://images-api.nasa.gov/search?q=${query}`;
    const { data } = await axios.get(url);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch NASA images' });
  }
});


// Start server
app.listen(PORT, () => console.log(`NASA API backend running on port ${PORT}`));
