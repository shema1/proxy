const express = require('express');
const cors = require('cors');
// const fetch = require('node-fetch');
const app = express();

app.use(cors());

app.get('/proxy', async (req, res) => {
  const url = req.query.url; 

  if (!url) {
    return res.status(400).send('Missing URL parameter');
  }

  try {
    const response = await fetch(url);
    const data = await response.text();

    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching the URL');
  }
});

app.listen(5000, () => {
  console.log('Proxy server running on http://localhost:5000');
});
