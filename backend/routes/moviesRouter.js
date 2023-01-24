const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await axios.get('https://fakestoreapi.com/products?limit=20');
    res.send(data.data);
  } catch (error) {
    res.send(error).status(402);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await axios.get(`https://fakestoreapi.com/products/${id}`);
    res.send(data.data);
  } catch (error) {
    res.send(error).status(402);
  }
});

module.exports = router;
