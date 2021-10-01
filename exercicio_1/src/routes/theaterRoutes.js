const express = require('express');
const router = express.Router();
const TheaterController = require('../controllers/theaterController');

const controller = new TheaterController();

router.get('/livres', controller.showAvailable);
router.get('/mapa', controller.showMap);
router.get('/total', controller.getTotalSeats);
router.get('/arrecadacao', controller.calculateAmount)
router.post('/reservar', controller.newBooking);
router.put('/confirmar', controller.confirmBookedSeat);
router.put('/retirar', controller.removeBookedSeat);

module.exports = router;