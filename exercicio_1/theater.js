const Seat = require('./seat');

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
      if (seat.getStatus() === 'L') {
        availableSeats.push(seat.getPosition());
      }
    }))
    return availableSeats;
  }
}

module.exports = Theater;


