const Theater = require('../Theater/theater');

class TheaterController {
  _theater;

  constructor() {
    this._theater = new Theater();
    this.newBooking = this.newBooking.bind(this);
  }

  newBooking(req, res) {
    const { seat } = req.body;
    this._theater.bookSeat(seat);
    res.status(200).send('Reserva feita com sucesso');
  }
}
module.exports = TheaterController;