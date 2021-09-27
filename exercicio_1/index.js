const Theater = require('./theater');
const { BookedSeatError } = require('./utils/errors');


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const theater = new Theater();

function openMainMenu() {
  rl.question('\n========== Bem vinde ao teatro Fluke! O que deseja fazer?\n 1. Ver lugares diponíveis e realizar reserva\n 2. Gerenciar reservas existentes\n 3. Sair\n\n Escolha uma opção: ', opt => {
    switch (opt) {
      case '1':
        openBookingMenu();
        break;
      case '2':
        openManageMenu();
        break;
      case '3':
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

openMainMenu();