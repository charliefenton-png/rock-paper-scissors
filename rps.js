

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
  console.log(getHumanChoice);





