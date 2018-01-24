
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
//test values
playerOneMoveOneType = 'rock';
playerOneMoveOneValue = 1;
playerTwoMoveOneType = 'rock';
playerTwoMoveOneValue = 48;
playerOneMoveTwoType = 'scissors';
playerOneMoveTwoValue = 48;
playerTwoMoveTwoType = 'paper';
playerTwoMoveTwoValue = 1;
playerOneMoveThreeType = 'rock';
playerOneMoveThreeValue = 50;
playerTwoMoveThreeType = 'rock';
playerTwoMoveThreeValue = 50;


//Test values
let playerOneMoveOneType = 'rock';
let playerOneMoveOneValue = 33;
let playerTwoMoveOneType = 'rock';
let playerTwoMoveOneValue = 33;
let playerOneMoveTwoType = 'rock';
let playerOneMoveTwoValue = 33;
let playerTwoMoveTwoType = 'rock';
let playerTwoMoveTwoValue = 33;
let playerOneMoveThreeType = 'rock';
let playerOneMoveThreeValue = 33;
let playerTwoMoveThreeType = 'rock';
let playerTwoMoveThreeValue = 33;



console.log(playerOneMoveOneType);
console.log(playerOneMoveOneValue);
*/

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {

  switch (moveOneType) {
    case 'rock':
    case 'paper':
    case 'scissors':
      switch (moveTwoType) {
        case 'rock':
        case 'paper':
        case 'scissors':
          switch (moveThreeType) {
            case 'rock':
            case 'paper':
            case 'scissors':
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
            break;

    default:
      break;

  }
}
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
      if (playerOneMoveThreeType === playerTwoMoveThreeType) {
        if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
          return 'Tie';
        } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      } // this part will test who won when it differs - starting with rock, scissors, paper.
      if (playerOneMoveThreeType === 'rock') {
        if (playerTwoMoveThreeType === 'scissors') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      }
      if (playerOneMoveThreeType === 'scissors') {
        if (playerTwoMoveThreeType === 'paper') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      }
      if (playerOneMoveThreeType === 'paper') {
        if (playerTwoMoveThreeType === 'rock') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      }
      break;
    default:
      return null;
      break;

  }

  //return who won the round ('Player One', 'Player Two', or 'Tie'
};

//For Testing
//console.log(getRoundWinner(1));


const getGameWinner = () => {
  //returns who won the game based on the stats and returns the winner or tie 'Player One', 'Player Two', or 'Tie'
  let playerOneWins = 0;
  let playerTwoWins = 0;
  if (getRoundWinner(1) === 'Player One') {
    playerOneWins++;
  } else if (getRoundWinner(1) === 'Player Two') {
    playerTwoWins++;
}

  if (getRoundWinner(2) === 'Player One') {
    playerOneWins++;
  } else if (getRoundWinner(2) === 'Player Two') {
    playerTwoWins++;
}

  if (getRoundWinner(3) === 'Player One') {
    playerOneWins++;
  } else if (getRoundWinner(3) === 'Player Two') {
    playerTwoWins++;
  }

  if (playerOneWins < playerTwoWins) {
    return 'Player Two';
  } else if (playerOneWins > playerTwoWins) {
    return 'Player One';
  } else {
    return 'Tie';
  }

};


const setComputerMoves = () => {}
//chooses three random moves for player two. The move type for each move should be completely random, and the move values should be random but add up to 99
;


//test Runs
/*
console.log(getGameWinner());
console.log(getRoundWinner(1));
console.log(getRoundWinner(2));
console.log(getRoundWinner(3));
*/
