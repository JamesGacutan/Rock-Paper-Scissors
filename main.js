const rock = 'Rock';
const paper = 'Paper';
const scissor = 'Scissor';

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

// Function for staring round
function startRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        console.log('DRAW');
    } else if ((playerSelection === rock) && (computerSelection === scissor)) {
        console.log('Player Wins!! Rock beats Scissor.');
    } else if ((playerSelection === scissor) && (computerSelection === rock)) {
        console.log('Computer Wins!! Rock beats Scissor');
    } else if ((playerSelection === rock) && (computerSelection === paper)) {
        console.log('Computer Wins!! Paper beats Rock.');
    } else if ((playerSelection === paper) && (computerSelection === rock)) {
        console.log('Player Wins!! Paper beats Rock.');
    } else if ((playerSelection === scissor) && (computerSelection === paper)) {
        console.log('Player Wins!!  Scissor beats Paper.');
    } else if ((playerSelection === paper) && (computerSelection === scissor)) {
        console.log('Computer Wins!!  Scissor beats Paper.');
    }
}

const playerSelection = 'Rock';
const computerSelection = getComputerChoice(3);
console.log(startRound(playerSelection, computerSelection));





