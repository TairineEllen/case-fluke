const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function drawCircle(radius) {
  let diameter;
  (radius % 2 === 0) ? diameter = 2 * radius : diameter = (2 * radius) - 1;

  const circle = Array(diameter).fill(' ').map(() => Array(diameter).fill(' '));
  let count = 0;
  let draw = radius;

  for (let i = 0; i < circle.length; i++) {
    let startDraw = (diameter - draw) / 2;
    let endDraw = startDraw + draw - 1;

    for (let j = 0; j < circle[i].length; j++) {
      if (j >= startDraw && j <= endDraw) {
        circle[i][j] = '*';
      }
    }
    if (count < radius) {
      (draw + 2 <= diameter) ? draw += 2 : draw = diameter;
    } else {
      (draw - 2 >= radius) ? draw -= 2 : draw = radius;
    }
    if (draw === diameter) {
      count++;
    }
  }

  circle.forEach(row => {
    let rowString = '';
    row.forEach(star => {
      rowString += String(star);
    })
    console.log(rowString);
    rowString = '';
  })
}

(function question() {
  rl.question('Digite o raio: ', rad => {
    let radius = Number(rad);
    if (radius < 1 || radius > 100) {
      console.log('Por favor, digite um número de 1 a 100!');
      question();
    }
    else {
      drawCircle(radius);
      rl.close();
    }
  })
})();
