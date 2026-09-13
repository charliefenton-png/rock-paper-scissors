

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










console.log(getComputerChoice)


















console.log("Hello World")