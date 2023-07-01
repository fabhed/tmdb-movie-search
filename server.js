const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.static('public'));

app.get('/search', async (req, res) => {
  const query = req.query.q;
  const response = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.TMDB_API_KEY}&query=${query}`);
  res.json(response.data.results);
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
