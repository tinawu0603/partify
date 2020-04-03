const express = require('express');
const axios = require('axios');
const auth = require('../auth');
const cors = require('cors');

const router = new express.Router;

router.get('/', async (req, res) => {
  const token = await auth.getToken();
  // TODO: Parse req.query as JSON and validate it
  const query = req.originalUrl.split('\/', 3)[2];

  const { data } = await axios({
    method: 'get',
    url: `https://api.spotify.com/v1/search${query}`,
    headers: {
      'Authorization': 'Bearer ' + token
    },
  })
    .catch((err) => res.send(err));

  // TODO: Only return the fields we actually care about
  return res.json(data);
});

router.get('/:playlistId', async (req, res) => {
  const token = await auth.getToken();
  const { playlistId } = req.params;

  const { data } = await axios({
    method: 'get',
    url: `https://api.spotify.com/v1/playlists/${playlistId}`,
    headers: {
      'Authorization': 'Bearer ' + token
    },
  })
    .catch((err) => res.send(err));

  return res.json(data);
});

module.exports = router;
