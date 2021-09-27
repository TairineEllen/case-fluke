class BookedSeatError extends Error {
  constructor(message) {
    super(message);    
  }
}

class SeatNotFoundError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = {BookedSeatError, SeatNotFoundError};