
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

console.log(playerOneMoveOneType);
console.log(playerOneMoveOneValue);

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
//this should set the values for all global values and players
};

setPlayerMoves('Player One', 'rock', 50);
console.log(playerOneMoveOneType);
console.log(playerOneMoveOneValue);
console.log(playerTwoMoveOneValue);

const getRoundWinner = round => {


  //return who won the round ('Player One', 'Player Two', or 'Tie'
};

const getGameWinner = () => {
  //returns who won the game based on the stats and returns the winner or tie 'Player One', 'Player Two', or 'Tie'
};

const setComputerMoves = () => {}
//chooses three random moves for player two. The move type for each move should be completely random, and the move values should be random but add up to 99
;
