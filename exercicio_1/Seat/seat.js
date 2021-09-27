const { ROWS, STATUS } = require('../utils/constants');

class Seat {
  _status;
  _position;
  constructor(x,y) {
    this._status = STATUS.AVAILABLE;
    this._position = `${ROWS[x]}${y + 1}`;
  }
  getStatus() {
    return this._status;
  }
  getPosition() {
    return this._position;
  }
  book() {
    this._status = STATUS.BOOKED;
  }
  confirm() {
    this._status = STATUS.CONFIRMED;
  }
  remove() {
    this._status = STATUS.AVAILABLE;
  }
}

module.exports = Seat;