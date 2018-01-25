//defines all variables but leaves them undefined
let playerOneMoveOneType,
playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue, playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue, playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue, playerOneWins, playerTwoWins;

//function to check if the move value is correct
function getMoveValue(moveValue) {
  if ((moveValue >= 1) && (moveValue < 98)) {
    return moveValue;
  }
}

//function to check if the move type is correct
function getMoveType(moveType) {
  return (moveType === 'rock') || (moveType === 'paper') || (moveType === 'scissors');
}

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {

  //if one these is missing, the function will return 0
  if (!moveOneType || !moveTwoType || !moveThreeType || !moveOneValue || !moveTwoValue || !moveThreeValue) {
    return;
  }


  //this functions checks if the sum of the move values is bigger than 99
  if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
      return;
    }

  //this if statement checks if any one of the move values is not correct - than lets the function faill
  if (!getMoveValue(moveOneValue) || !getMoveValue(moveTwoValue) || !getMoveValue(moveThreeValue)) {
    return;
  }

  //this if statement checks if any one of the move types is not correct - than lets the function faill
  if (!getMoveType(moveOneType) || !getMoveType(moveTwoType) || !getMoveType(moveThreeType)) {
    return;
  }

  //This if statement checks for players and sets the movetypes and values depending
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


};

//this function gets the winner of the move
function getMoveWinner(playerOneMove, playerOneValue, playerTwoMove, playerTwoValue){

  //this if checks if any of the values is missing and returns null
  if (!playerOneMove || !playerOneValue || !playerTwoMove || !playerTwoValue) {
    return null;
  }

  if (playerOneMove === playerTwoMove) {
    if (playerOneValue === playerTwoValue) {
      return 'Tie';
    } else if (playerOneValue > playerTwoValue) {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  }

  if (playerOneMove === 'rock') {
    if (playerTwoMove === 'scissors') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  }

  if (playerOneMove === 'scissors') {
    if (playerTwoMove === 'paper') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  }

  if (playerOneMove === 'paper') {
    if (playerTwoMove === 'rock') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  }

}


const getRoundWinner = round => {

  switch (round) {
    case 1:
      return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
      break;
    case 2:
      return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
      break;
    case 3:
      return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
      break;
    default:
      return null;
      break;
    }

};

function getWinner(roundWinner) {
  if (roundWinner === 'Player One') {
    playerOneWins++;
  } else if (roundWinner === 'Player Two') {
    playerTwoWins++;
  } else {
  return null;
  }
  }

const getGameWinner = () => {
  //if one is missing sets the game to null
  if (!playerOneMoveOneType || !playerOneMoveTwoType ||
      !playerOneMoveThreeType || !playerOneMoveOneValue ||
      !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
      !playerTwoMoveOneType || !playerTwoMoveTwoType ||
      !playerTwoMoveThreeType || !playerTwoMoveOneValue ||
      !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
    return null;
  }

  playerOneWins = 0;
  playerTwoWins = 0;

  getWinner(getRoundWinner(1));
  getWinner(getRoundWinner(2));
  getWinner(getRoundWinner(3));


  if (playerOneWins < playerTwoWins) {
    return 'Player Two';
  } else if (playerOneWins > playerTwoWins) {
    return 'Player One';
  } else {
    return 'Tie';
  }

};

const randomNumberOneToThree = () => Math.floor(Math.random() * 3);


const setComputerMoves = () => {
  playerTwoMoveOneValue = Math.floor(Math.random() * 97) +1;
  //console.log(playerTwoMoveOneValue);
  playerTwoMoveTwoValue = Math.floor(Math.random() * (98 - playerTwoMoveOneValue)) +1;
  //console.log(playerTwoMoveTwoValue);
  playerTwoMoveThreeValue = 99 - playerTwoMoveOneValue - playerTwoMoveTwoValue;
  //console.log(playerTwoMoveThreeValue);

  let moves = ['rock','paper','scissors'];

  playerTwoMoveOneType = moves[randomNumberOneToThree()];
  playerTwoMoveTwoType = moves[randomNumberOneToThree()];
  playerTwoMoveThreeType = moves[randomNumberOneToThree()];

  

};
