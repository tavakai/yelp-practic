const express = require('express');
const axios = require('axios');

const router = express.Router();

const getUrl = (endpoint) => `https://fakestoreapi.com/products/category/${endpoint}`;

router.get('/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const data = await axios.get(getUrl(category));
    res.send(data.data);
  } catch (error) {
    res.send(error).status(402);
  }
});

module.exports = router;
