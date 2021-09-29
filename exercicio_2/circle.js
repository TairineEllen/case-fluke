function drawCircle(radius) {
  let diameter;
  if (radius % 2 === 0) {
    diameter = 2 * radius;
  } else {
    diameter = (2 * radius) - 1;
  }
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
      if (draw + 2 <= diameter) {
        draw += 2;
      } else {
        draw = diameter;
      }
    } else {
      if (draw - 2 >= radius) {
        draw -= 2;
      } else {
        draw = radius;
      }
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

drawCircle(5)