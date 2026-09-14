

/* Create a new function named getComputerChoice.
Write the code so that getComputerChoice 
will randomly return one of the following string values: “rock”, “paper” or “scissors”.
Hint: The Math.random method returns a random number that’s greater than or equal to 0
and less than 1. Think about how you can use this
to conditionally return one of the multiple choices. */



// create function called getComputerChoice //
// getComputeChoice randomly return one of following string values "rock", "paper" or "scissors" //
// use Math.random method to conditionally return of of "rock", "paper" or "scissors" //


const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const options = ['rock','paper','scissors']

getComputerChoice = options[Math.floor(Math.random()*options.length)]
console.log(getComputerChoice + " computers choice")



/* Create a new function named getHumanChoice.
Write the code so that getHumanChoice will return one of the valid choices
depending on what the user inputs.
Hint: Use the prompt method to get the user’s input.
You do not need to handle reprompting if the user enters an invalid input, 
as that would require things we will teach later. For now, 
just assume the user will always enter a valid choice.
Test what your function returns by using console.log. */



// create function getHumanChoice //
/* make getHumanChoice return rock, paper or scissors using prompt method to return
     user input choice */
// assume user will always enter valid choice, don't handle reprompting //
// test what getHumanChoice returns with console.log //   


getHumanChoice = window.prompt("rock, paper or scissors?");
  console.log(getHumanChoice + " humans choice");





/* Declare the players score variables
Your game will keep track of the players score. 
You will write variables to keep track of the players score.
Create two new variables named humanScore and computerScore in the global scope.
Initialize those variables with the value of 0. */


let humanScore = 0
let computerScore = 0





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



function playRound(humanChoice,computerChoice) {
     
}



