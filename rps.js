const options = ['rock','paper','scissors']


function getComputerChoice() {
  return options[Math.floor(Math.random()*options.length)]; 
}
  

function getHumanChoice() {
  const choice = window.prompt("rock, paper or scissors?");
  return choice.toLowerCase();
}


function playGame() {
let humanScore = 0
let computerScore = 0
    
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

    for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }

  console.log(`Final score — Human: ${humanScore}, Computer: ${computerScore}`);
}

playGame();
   


  


 

