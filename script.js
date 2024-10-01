"use strict";

function getComputerChoice () {
// get the computer choice at random
  let choice = Math.round((Math.random() * 10) / 3);

  if (!choice|| choice == 1) {
    return 'rock';
  } else if (choice == 2) {
    return 'paper';
  }

  return 'scissors';
}

function getHumanChoice () {
// get the player choice with prompt
  let choice = prompt('Rock, paper or scissors: ');

  switch (choice.toLowerCase()) {

    case '0':
    case '1':
    case 'r':
    case 'rock':
      return 'rock';

    case '2':
    case 'p':
    case 'paper':
      return 'paper';

    case '3':
    case 's':
    case 'scissors':
      return 'scissors';

    default:
      return 'rock';
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
  
  if (humanChoice == 'rock' && computerChoice == 'scissors') {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (humanChoice == 'paper' && computerChoice == 'rock') {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (humanChoice == computerChoice) {
    console.log(`It's a draw! ${humanChoice} and ${computerChoice} is a tie`);
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}
