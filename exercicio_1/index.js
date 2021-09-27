const Theater = require('./theater');


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

openMainMenu();