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
    this.calculateAmount = this.calculateAmount.bind(this);
  }

  newBooking(req, res) {
    const { seat } = req.body;
    try {
      this._theater.bookSeat(seat);
      res.status(200).send('Reserva feita com sucesso');
    } catch (error) {
      res.status(424).send(error.message);
    }
  }
  showAvailable(req, res) {
    try {
      const seats = this._theater.showAvailableSeats();
      res.status(200).send(seats);
    } catch (error) {
      res.status(424).send(error.message);
    }
  }
  showMap(req, res) {
    try {
      const map = this._theater.showSeatMap();
      res.status(200).send(map);
    } catch (error) {
      res.status(424).send(error.message);
    }
  }
  confirmBookedSeat(req, res) {
    const { seat } = req.body;
    try {
      this._theater.confirmBooking(seat);
      res.status(200).send('Reserva confirmada com sucesso')
    } catch (error) {
      res.status(424).send(error.message);
    }
  }
  removeBookedSeat(req, res) {
    const { seat } = req.body;
    try {
      this._theater.removeBooking(seat);
      res.status(200).send('Reserva removida com sucesso');
    } catch (error) {
      res.status(424).send(error.message);
    }
  }
  getTotalSeats(req, res) {
    try {
      const available = this._theater.showTotal('L');
      const booked = this._theater.showTotal('R');
      const confirmed = this._theater.showTotal('C');
      res.status(200).send({
        livres: available,
        reservados: booked,
        confirmados: confirmed
      })
    } catch (error) {
      res.status(424).send(error.message);
    }
  }
  calculateAmount(req, res) {
    try {
      const total = this._theater.calculateCollectedAmount();
      res.status(200).send({
        totalArrecadado: total
      });
    } catch (error) {
      res.status(424).send(error.message);
    }
  }
}

module.exports = TheaterController;