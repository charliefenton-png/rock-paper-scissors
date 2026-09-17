const options = ['rock','paper','scissors']

let humanScore = 0
let computerScore = 0


function getComputerChoice() {
  return options[Math.floor(Math.random()*options.length)]; 
}
  


function getHumanChoice() {
  const choice = window.prompt("rock, paper or scissors?");
  return choice.toLowerCase();
}


/* Your game will be played round by round. 
You will write a function that takes the human and computer player choices as arguments,
plays a single round, increments the round winner’s score and logs a winner announcement.
Create a new function named playRound.
Define two parameters for playRound: humanChoice and computerChoice.
Use these two parameters to take the human and computer choices as arguments.
Make your function’s humanChoice parameter case-insensitive
so that players can input “rock”, “ROCK”, “RocK”, or other variations.
Write the code for your playRound function to console.log a string value representing the round winner,
such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner. */


// make new function called playRound //
// define two parameters for playRound: humanChoice and computerChoice //
// use humanChoice and computerChoice to take the human and computer choices as arguments //
// make function's humanChoice parameter case-insensitive //
/* write code for playRound function to console.log a string value 
     representing the round winner */
// increment the humanScore or computerScore variable base on the round winner //     


const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}


console.log(`Human chose: ${humanChoice}`);
console.log(`Computer chose: ${computerChoice}`);
console.log(playRound(humanChoice, computerChoice));


  


 

