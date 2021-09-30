const Theater = require('../Theater/theater');

class TheaterController {
  _theater;

  constructor() {
    this._theater = new Theater();
  }
}
module.exports = TheaterController;