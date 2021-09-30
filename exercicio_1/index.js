const Theater = require('./src/Theater/theater');
const { BookedSeatError, SeatNotFoundError } = require('./utils/errors');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const theater = new Theater();

function openMainMenu() {
  rl.question('\n========== Bem vinde ao teatro Fluke! O que deseja fazer?\n 1. Ver lugares diponíveis e realizar reserva\n 2. Gerenciar reservas existentes\n 3. Visualizar valor arrecadado\n 4. Sair\n\n Escolha uma opção: ', opt => {
    switch (opt) {
      case '1':
        openBookingMenu();
        break;
      case '2':
        openManageMenu();
        break;
      case '3':
        const total = theater.calculateCollectedAmount();
        console.log(`\nO teatro arrecadou R$${total},00.\n`);
        openMainMenu();
        break;
      case '4':
        console.log('\nObrigada e volte sempre!');
        rl.close();
        break;
      default:
        console.log('\nOpção inválida!\n');
        openMainMenu();
    }
  })
}

function openBookingMenu() {
  console.log('\n========== Lugares Disponíveis\n')
  console.log(theater.showAvailableSeats());
  rl.question('\n========== Realizar reserva\n 1. Reservar poltrona\n 2. Voltar \n\n Escolha uma opção: ', opt => {
    switch (opt) {
      case '1':
        rl.question('\nEscolha a poltrona (ex: A1): ', opt => {
          try {
            theater.bookSeat(opt);
            console.log(`\nPoltrona ${opt.toUpperCase()} reservada com sucesso!`);
            openMainMenu();
          } catch (error) {
            error instanceof BookedSeatError
              ? console.log(error.message)
              : console.log('\nEntrada inválida. Tente novamente.\n');
            openBookingMenu();
          }
        })
        break;
      case '2':
        openMainMenu();
        break;
      default:
        console.log('\nEntrada inválida. Tente novamente.\n');
        openBookingMenu();
    }
  })
}

function openManageMenu() {
  console.log('\n========== Gerenciar Reservas Existentes\n')
  const availables = theater.showTotal('L');
  const booked = theater.showTotal('R');
  const confirmed = theater.showTotal('C');
  console.log(`
    No momento temos: 
    - ${availables} poltronas disponíveis
    - ${booked} lugares reservados
    - ${confirmed} lugares confirmados\n`);
  console.table(theater.showSeatMap());

  rl.question('\n 1. Confirmar reserva\n 2. Retirar reserva\n 3. Voltar\n\n Escolha uma opção: ', opt => {
    switch (opt) {
      case '1':
        rl.question('\nReserva a confirmar (ex: A1): ', opt => {
          try {
            theater.confirmBooking(opt);
            console.log(`\nReserva da poltrona ${opt.toUpperCase()} confirmada com sucesso!\n`);
            console.table(theater.showSeatMap());
            openMainMenu();
          } catch (error) {
            error instanceof SeatNotFoundError
              ? console.log(error.message)
              : console.log('\nEntrada inválida. Tente novamente.\n');
            openManageMenu();
          }
          openMainMenu();
        })
        break;
      case '2':
        rl.question('\nReserva a retirar (ex: A1): ', opt => {
          try {
            theater.removeBooking(opt);
            console.log(`\nReserva da poltrona ${opt.toUpperCase()} retirada com sucesso!\n`);
            console.table(theater.showSeatMap());
            openManageMenu();
          } catch (error) {
            error instanceof SeatNotFoundError
              ? console.log(error.message)
              : console.log('\nEntrada inválida. Tente novamente.\n');
            openManageMenu();
          }
        })
        break;
      case '3':
        openMainMenu();
        break;
    }
  })
}

openMainMenu();