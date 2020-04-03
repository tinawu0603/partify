const db = require('../db.js');
const express = require('express');
const cors = require('cors');

const router = new express.Router;

router.get('/me', async (req, res) => {
  const {
    spotifyId
  } = req.session;
  if (!spotifyId) {
    res.status(401).json({ error: 'Unauthenticated' })
    return;
  };

  const user = await db.get().collection('users').findOne({ spotifyId });

  if (!user) {
    return res.status(404).json(`User with id ${userId} not found...`).send();
  }
  // Dont surface access token and refresh token
  delete user.accessToken;
  delete user.refreshToken;

  return res.json(user);
});

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const user = await db.get().collection('users').findOne({ _id: userId });

  if (!user) {
    return res.status(404).json(`User with id ${userId} not found...`).send();
  }
  return res.json(user);
});

router.get('/', async (req, res) => {
  const users = await db.get().collection('users').find().toArray();

  return res.json(users);
});

module.exports = router;
