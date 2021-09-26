class Seat {
  _status;
  _position;
  constructor(x,y) {
    this._status = 'L';
    this._position = [x, y]
  }
}

module.exports = Seat;