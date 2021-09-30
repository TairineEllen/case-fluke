const Theater = require('../Theater/theater');

class TheaterController {
  _theater;

  constructor() {
    this._theater = new Theater();
    this.newBooking = this.newBooking.bind(this);
    this.showAvailable = this.showAvailable.bind(this);
    this.showMap = this.showMap.bind(this);
    this.confirmBookedSeat = this.confirmBookedSeat.bind(this);
    this.removeBookedSeat = this.removeBookedSeat.bind(this);
    this.getTotalSeats = this.getTotalSeats.bind(this);
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
  confirmBookedSeat(req, res) {
    const { seat } = req.body;
    this._theater.confirmBooking(seat);
    res.status(200).send('Reserva confirmada com sucesso')
  }
  removeBookedSeat(req, res) {
    const { seat } = req.body;
    this._theater.removeBooking(seat)
    res.status(200).send('Reserva removida com sucesso')
  }
  getTotalSeats(req, res) {
    const available = this._theater.showTotal('L');
    const booked = this._theater.showTotal('R');
    const confirmed = this._theater.showTotal('C');
    res.status(200).send({
      livres: available,
      reservados: booked,
      confirmados: confirmed
    })
  }
}

module.exports = TheaterController;