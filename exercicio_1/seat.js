class Seat {
  _status;
  _position;
  constructor(x,y) {
    this._status = 'L';
    this._position = [x, y]
  }
  getStatus() {
    return this._status;
  }
  getPosition() {
    return this._position;
  }
}

module.exports = Seat;