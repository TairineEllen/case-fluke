const Seat = require('../Seat/seat');
const { ROWS, STATUS, TICKET } = require('../utils/constants');
const { BookedSeatError, SeatNotFoundError } = require('../utils/errors');

class Theater {
  _seats;
  constructor() {
    this._seats = Array(10).fill(0).map(() => Array(10).fill(0));
    for (let i = 0; i < this._seats.length; i++) {
      for (let j = 0; j < this._seats[i].length; j++) {
        this._seats[i][j] = new Seat(i, j);
      }
    }
  }
  showAvailableSeats() {
    const availableSeats = []
    this._seats.forEach(row => row.forEach(seat => {
      if (seat.getStatus() === STATUS.AVAILABLE) {
        availableSeats.push(seat.getPosition());
      }
    }))
    return availableSeats;
  }
  _getSeat(seat) {
    let rowLetter = seat[0].toUpperCase();
    let seatNumber = seat.slice(1) - 1;
    let row;
    for (let key in ROWS) {
      if (ROWS[key] === rowLetter) {
        row = Number(key);
        break;
      }
    }
    return { row, seatNumber };
  }
  bookSeat(seat) {
    const { row, seatNumber } = this._getSeat(seat);
    const place = this._seats[row][seatNumber];
    if (place.getStatus() === STATUS.AVAILABLE) {
      place.book();
    } else {
      throw new BookedSeatError('A poltrona escolhida não está disponível. Tente novamente.');
    }
  }
  confirmBooking(seat) {
    const { row, seatNumber } = this._getSeat(seat);
    const place = this._seats[row][seatNumber];
    if (place.getStatus() !== STATUS.BOOKED) {
      throw new SeatNotFoundError('\nReserva não encontrada. Tente novamente.\n');
    } else {
      place.confirm();
    }
  }
  removeBooking(seat) {
    const { row, seatNumber } = this._getSeat(seat);
    const place = this._seats[row][seatNumber];
    if (place.getStatus() !== STATUS.AVAILABLE) {
      place.remove();
    } else {
      throw new SeatNotFoundError('\nReserva não encontrada. Tente novamente.\n');
    }
  }
  showSeatMap() {
    const seats = this._seats.map(row => row.map(seat => seat.getStatus()));
    const seatsObj = {};
    seats.forEach((seat, index) => {
      const key = ROWS[index]
      seatsObj[key] = seat
    })
    return seatsObj;
  }




  showTotal(status) {
    let total = 0;
    this._seats.forEach(row => row.forEach(seat => {
      if (seat.getStatus() === status) {
        total++;
      }
    }));
    return total;
  }
  calculateCollectedAmount() {
    const confirmedSeats = this.showTotal('C');
    const amount = confirmedSeats * TICKET.AMOUNT;
    return amount;
  }
}

module.exports = Theater;