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

const scoreHuman = document.getElementById("score-human");
const scoreComputer = document.getElementById("score-computer");
const text = document.getElementById("text");

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  const res = playRound(rock.value, getComputerChoice());
  scoreHuman.textContent = "Человек: " + humanScore;
  scoreComputer.textContent = "Компьютер: " + computerScore;
  text.textContent = res;
});
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  const res = playRound(scissors.value, getComputerChoice());
  scoreHuman.textContent = "Человек: " + humanScore;
  scoreComputer.textContent = "Компьютер: " + computerScore;
  text.textContent = res;
});
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  const res = playRound(paper.value, getComputerChoice());
  scoreHuman.textContent = "Человек: " + humanScore;
  scoreComputer.textContent = "Компьютер: " + computerScore;
  text.textContent = res;
});
