const options = ['rock', 'paper', 'scissors'];
const finalResultsDiv = document.querySelector("#finalResults")

let humanScore = 0;
let computerScore = 0;




function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Draw";
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

const results = document.querySelector("#results");

function handleClick(humanChoice) {
  const computerChoice = getComputerChoice();
  const outcome = playRound(humanChoice, computerChoice);
  results.textContent = `${outcome} Human: ${humanScore}, Computer: ${computerScore}`;

  if (humanScore >= 5) {
    finalResultsDiv.textContent = "You win!";
  } else if (computerScore >= 5) {
    finalResultsDiv.textContent = "You lose!";
  }
}
  


document.querySelector("#rock").addEventListener("click", () => handleClick("rock"));
document.querySelector("#paper").addEventListener("click", () => handleClick("paper"));
document.querySelector("#scissors").addEventListener("click", () => handleClick("scissors"));





/* Two things you may want to handle next:

The game keeps going after 5. Players can still click and push the score to 6, 7, and so on. 
You could disable the buttons when someone reaches 5, or reset the scores
 and clear the message when a new game starts.
Checking for a winner is a good candidate for its own function, 
e.g. checkWinner(), called from handleClick. It keeps handleClick short as the game grows. */