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

function getHumanChoice (choice) {

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
