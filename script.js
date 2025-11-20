function getComputerChoice() {
  const x = Math.floor(Math.random() * 3);
  let y = '';
  if (x === 0) {
    y = 'rock';
  } else if (x === 1) {
    y = 'paper';
  } else {
    y = 'scissors';
  }
  return console.log(y);
}

getComputerChoice();
