const Theater = require('../Theater/theater');

class TheaterController {
  _theater;

  constructor() {
    this._theater = new Theater();
    this.newBooking = this.newBooking.bind(this);
    this.showAvailable = this.showAvailable.bind(this);
    this.showMap = this.showMap.bind(this);
  }

  newBooking(req, res) {
    const { seat } = req.body;
    this._theater.bookSeat(seat);
    res.status(200).send('Reserva feita com sucesso');
  }
  showAvailable(req, res) {
    const teste = this._theater.showAvailableSeats();
    res.status(200).send(teste);
  }
  showMap(req, res) {
    const map = this._theater.showSeatMap();
    res.status(200).send(map);
  }
}

module.exports = TheaterController;