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


function playGame () {
// play 5 rounds of the game and declare winner at the end
  let humanScore = 0;
  let computerScore = 0;
  
  function playRound (humanChoice, computerChoice) {
    // play a round of the game and update scores
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

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log(`You won the game with ${humanScore} points! Nice.`);
  } else if (computerScore > humanScore) {
    console.log(`You lost the game with ${humanScore} points! Better luck next time.`);
  } else {
    console.log(`It's a tie with ${humanScore} and ${computerScore} points for each! Try again later.`);
  }
}

// play game
playGame();