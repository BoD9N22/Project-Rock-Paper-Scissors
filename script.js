let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const x = Math.floor(Math.random() * 3);
  if (x === 0) return "rock";
  if (x === 1) return "paper";
  return "scissors";
}

function playRound(humanSelection, computerSelection) {
  if (
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    return `Ты победил раунд! ${humanSelection} побеждает ${computerSelection}.`;
  }

  if (humanSelection === computerSelection) {
    return `Ничья! Оба выбрали ${humanSelection}`;
  }

  computerScore++;
  return `Ты проиграл раунд! ${computerSelection} побеждает ${humanSelection}.`;
}

function checkingWinner(humanScore, computerScore) {
  if (humanScore === 5) {
    alert("Ты победил!!!");
    resetGame();
  } else if (computerScore === 5) {
    alert("Ты проиграл(, компьютер круче тебя!");
    resetGame();
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  scoreHuman.textContent = "Человек: 0";
  scoreComputer.textContent = "Компьютер: 0";
  text.textContent = "Игра началась! Сделай выбор!";
}

const scoreHuman = document.getElementById("score-human");
const scoreComputer = document.getElementById("score-computer");
const text = document.getElementById("text");

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  const res = playRound(rock.value, getComputerChoice());
  scoreHuman.textContent = "Человек: " + humanScore;
  scoreComputer.textContent = "Компьютер: " + computerScore;
  text.textContent = res;
  checkingWinner(humanScore, computerScore);
});
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  const res = playRound(scissors.value, getComputerChoice());
  scoreHuman.textContent = "Человек: " + humanScore;
  scoreComputer.textContent = "Компьютер: " + computerScore;
  text.textContent = res;
  checkingWinner(humanScore, computerScore);
});
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  const res = playRound(paper.value, getComputerChoice());
  scoreHuman.textContent = "Человек: " + humanScore;
  scoreComputer.textContent = "Компьютер: " + computerScore;
  text.textContent = res;
  checkingWinner(humanScore, computerScore);
});
