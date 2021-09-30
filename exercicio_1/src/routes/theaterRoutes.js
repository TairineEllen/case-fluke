const express = require('express');
const router = express.Router();
const TheaterController = require('../controllers/theaterController');

const controller = new TheaterController()



module.exports = router;