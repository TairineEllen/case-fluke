const Seat = require('./seat');
const { ROWS, STATUS } = require('./utils/constants');

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
      console.log('\nLugar não disponível. Tente novamente\n');     
    }
  }
  confirmBooking(seat) {
    const { row, seatNumber } = this._getSeat(seat);
    const place = this._seats[row][seatNumber];
    if (place.getStatus() !== STATUS.BOOKED) {
      console.log('Reserva não encontrada. Tente novamente\n');      
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
      console.log('Reserva não encontrada. Tente novamente\n') ;  
    }
  }
  showSeatMap() {
    const seats = this._seats.map(row => row.map(seat => seat.getStatus()));
    console.table(seats);
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
    const amount = confirmedSeats * 20;
    return amount;
  }
} 

module.exports = Theater;


