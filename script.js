"use strict";

function getComputerChoice () {
  let choice = Math.round((Math.random() * 10) / 3);

  if (!choice|| choice == 1) {
    return 'rock';
  } else if (choice == 2) {
    return 'paper';
  }

  return 'scissors';
}


function playGame () {
  let humanScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  const btns = document.querySelector('div.buttons');
  const results = document.querySelector('div.results');
  const topPara = document.querySelector('#topPara');

  const resultsText = document.createElement('p');
  results.appendChild(resultsText);
  const resultsHuman = document.createElement('p');
  results.appendChild(resultsHuman);
  const resultsComputer = document.createElement('p');
  results.appendChild(resultsComputer);


  function updateScores(newHumanScore, newComputerScore) {
  
    resultsHuman.textContent = `Player Score: ${newHumanScore}`;
    resultsComputer.textContent = `Computer Score: ${newComputerScore}`;

    if (++roundsPlayed >= 5) {
      btns.removeEventListener('click', playRound);
      if (humanScore > computerScore) {
        topPara.textContent = 'You win!';
      } else {
        topPara.textContent = 'Better luck next time!';
      }
    }
  }


  function playRound(event) {

    let computerChoice = getComputerChoice();
    let humanChoice = event.target.id;

    if (humanChoice == 'rock' && computerChoice == 'scissors') {
      resultsText.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      updateScores(++humanScore, computerScore);
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
      resultsText.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      updateScores(++humanScore, computerScore);
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
      resultsText.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      updateScores(++humanScore, computerScore);
    } else if (humanChoice == computerChoice) {
      resultsText.textContent = `It's a draw! ${humanChoice} and ${computerChoice} is a tie`;
      updateScores(humanScore, computerScore);
    } else {
      resultsText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      updateScores(humanScore, ++computerScore);
    }
  }

  btns.addEventListener('click', playRound);
}

playGame();