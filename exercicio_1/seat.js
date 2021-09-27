const { ROWS } = require('./utils/constants');

class Seat {
  _status;
  _position;
  constructor(x,y) {
    this._status = 'L';
    this._position = `${ROWS[x]}${y + 1}`;
  }
  getStatus() {
    return this._status;
  }
  getPosition() {
    return this._position;
  }
  book() {
    this._status = 'R';
  }
  confirm() {
    this._status = 'C';
  }
  remove() {
    this._status = 'L';
  }
}

module.exports = Seat;