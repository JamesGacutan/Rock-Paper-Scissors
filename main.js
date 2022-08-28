// Make all variables to lowercase
const rock = 'rock';
const paper = 'paper';
const scissor = 'scissor';

// Score containers 
var playerScore = 0;
var computerScore = 0;


// Function for computer choice
function getComputerChoice(max) {
    let choice = Math.floor(Math.random() * max + 1);
    // Set the 3 numbers to Rock, Paper and Scissor
    if (choice === 1 ){
        return rock;
    } else if (choice === 2) {
        return paper;
    } else if (choice === 3) {
        return scissor;
    }
}

// Function for staring round and choosing the winner
function startRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
        console.log('DRAW');
    } else if ((playerSelection === rock) && (computerSelection === scissor)) {
        console.log('Player Wins!! Rock beats Scissor.');
        playerScore++;
    } else if ((playerSelection === scissor) && (computerSelection === rock)) {
        console.log('Computer Wins!! Rock beats Scissor');
        computerScore++;
    } else if ((playerSelection === rock) && (computerSelection === paper)) {
        console.log('Computer Wins!! Paper beats Rock.');
        computerScore++;
    } else if ((playerSelection === paper) && (computerSelection === rock)) {
        console.log('Player Wins!! Paper beats Rock.');
        playerScore++;
    } else if ((playerSelection === scissor) && (computerSelection === paper)) {
        console.log('Player Wins!!  Scissor beats Paper.');
        playerScore++;
    } else if ((playerSelection === paper) && (computerSelection === scissor)) {
        console.log('Computer Wins!!  Scissor beats Paper.');
        computerScore++;
    }
}

// Function to start a game with 5 rounds
function game(startRound) {
    for (let i = 0; i < 5; i++) {
        var computerSelection = getComputerChoice(3);
        var playerSelection =  getPlayerChoice();

        startRound(playerSelection, computerSelection);

        console.log('PLAYER: ' + playerScore + ' COMPUTER: ' + computerScore);
        if (i === 4) {
            if (playerScore == computerScore) {
                console.log('Game Over, The Game is a DRAW');
            } else if (playerScore > computerScore) {
                console.log('Game Over! PLAYER WINS!! SCORE \n' + 'PLAYER: ' + playerScore + '\n' + 'COMPUTER: ' + computerScore);
            } else if (playerScore < computerScore) {
                console.log('Game Over! COMPUTER WINS!! \n' + 'SCORE \n' + 'PLAYER: ' + playerScore + '\n' + 'COMPUTER: ' + computerScore);
            }
        }
 
    }
}
// Function for Player Choice
function getPlayerChoice(playerSelection) {
    var playerSelection = prompt('Rock, Paper or Scissor?');

    if (playerSelection.toLowerCase() === rock) {
        return playerSelection = rock;
    } else if (playerSelection.toLowerCase() === paper) {
        return playerSelection = paper;
    } else if (playerSelection.toLowerCase() === scissor) {
        return playerSelection = scissor;
    } else {
        alert('Rock, Paper or Scissor only!!');
        getPlayerChoice();
    }
}

game(startRound);







