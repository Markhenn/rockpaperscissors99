
//initiliazing global variables for players

let playerOneMoveOneType = undefined;
let playerOneMoveOneValue = undefined;
let playerTwoMoveOneType = undefined;
let playerTwoMoveOneValue = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveTwoValue = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveTwoValue = undefined;
let playerOneMoveThreeType = undefined;
let playerOneMoveThreeValue = undefined;
let playerTwoMoveThreeType = undefined;
let playerTwoMoveThreeValue = undefined;

/*
console.log(playerOneMoveOneType);
console.log(playerOneMoveOneValue);
*/

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  if (player === 'Player One') {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  }
//needs to update for edge cases

};

/*
For testing
setPlayerMoves('Player One', 'rock', 50);
console.log(playerOneMoveOneType);
console.log(playerOneMoveOneValue);
console.log(playerTwoMoveOneValue);
*/

const getRoundWinner = round => {
  switch (round) {
    //this is for round One
    case 1:
      if (playerOneMoveOneType === playerTwoMoveOneType) {
        if (playerOneMoveOneValue === playerTwoMoveOneValue) {
          return 'Tie';
        } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      } // this part will test who won when it differs - starting with rock, scissors, paper.
      if (playerOneMoveOneType === 'rock') {
        if (playerTwoMoveOneType === 'scissors') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      }
      if (playerOneMoveOneType === 'scissors') {
        if (playerTwoMoveOneType === 'paper') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      }
      if (playerOneMoveOneType === 'paper') {
        if (playerTwoMoveOneType === 'rock') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      }
      break;
    case 2:
      if (playerOneMoveTwoType === playerTwoMoveTwoType) {
        if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
          return 'Tie';
        } else if (playerTwoMoveOneValue > playerTwoMoveTwoValue) {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      } // this part will test who won when it differs - starting with rock, scissors, paper.
      if (playerOneMoveTwoType === 'rock') {
        if (playerTwoMoveTwoType === 'scissors') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      }
      if (playerOneMoveTwoType === 'scissors') {
        if (playerTwoMoveTwoType === 'paper') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      }
      if (playerOneMoveTwoType === 'paper') {
        if (playerTwoMoveTwoType === 'rock') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      }
      break;
    case 3:
      if (playerOneMoveTwoType === playerTwoMoveTwoType) {
        if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
          return 'Tie';
        } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      } // this part will test who won when it differs - starting with rock, scissors, paper.
      if (playerOneMoveTwoType === 'rock') {
        if (playerTwoMoveTwoType === 'scissors') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      }
      if (playerOneMoveTwoType === 'scissors') {
        if (playerTwoMoveTwoType === 'paper') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      }
      if (playerOneMoveTwoType === 'paper') {
        if (playerTwoMoveTwoType === 'rock') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      }
      break;
    default:

      break;

  }

  //return who won the round ('Player One', 'Player Two', or 'Tie'
};

//For Testing
//console.log(getRoundWinner(1));


const getGameWinner = () => {
  //returns who won the game based on the stats and returns the winner or tie 'Player One', 'Player Two', or 'Tie'
};

const setComputerMoves = () => {}
//chooses three random moves for player two. The move type for each move should be completely random, and the move values should be random but add up to 99
;
