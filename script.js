let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const x = Math.floor(Math.random() * 3);
  if (x === 0) return "rock";
  if (x === 1) return "paper";
  return "scissors";
}

function getHumanChoice() {
  return prompt("Выбери: rock, paper, scissors").toLowerCase();
}

function playRound(humanSelection, computerSelection) {
  if (
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    return `Ты победил раунд! ${humanSelection} побеждает ${computerSelection}. Счёт: человек ${humanScore} — компьютер ${computerScore}`;
  }

  if (humanSelection === computerSelection) {
    return `Ничья! Оба выбрали ${humanSelection}`;
  }

  computerScore++;
  return `Ты проиграл раунд! ${computerSelection} побеждает ${humanSelection}. Счёт: человек ${humanScore} — компьютер ${computerScore}`;
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const human = getHumanChoice();
    const computer = getComputerChoice();
    console.log(`Раунд ${i}:`);
    console.log(playRound(human, computer));
  }

  if (humanScore > computerScore) {
    return "Ты выиграл игру!";
  } else if (humanScore < computerScore) {
    return "Ты проиграл игру!";
  } else {
    return "Игра закончилась ничьёй!";
  }
}

console.log(playGame());
