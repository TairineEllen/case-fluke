const Theater = require('./theater');

const theater = new Theater();

theater.bookSeat('f5')
theater.confirmBooking('f5')
theater.bookSeat('d5')
theater.confirmBooking('d5')
theater.bookSeat('f8')
theater.confirmBooking('f8')
console.log(theater.showTotal('L'))
console.log(theater.showTotal('C'))
console.log(theater.showTotal('R'))

console.log(theater.calculateCollectedAmount())