const options = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lose!";
  }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
  console.log(playRound("rock", getComputerChoice()));
  console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
});

paperButton.addEventListener("click", () => {
  console.log(playRound("paper", getComputerChoice()));
  console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
});

scissorsButton.addEventListener("click", () => {
  console.log(playRound("scissors", getComputerChoice()));
  console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
});

