const express = require('express');
const router = express.Router();
const TheaterController = require('../controllers/theaterController');

const controller = new TheaterController();

router.get('/livres', controller.showAvailable);
router.post('/', controller.newBooking);

module.exports = router;