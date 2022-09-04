// Make all variables to lowercase
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

// choice container 
let playerSelection;
let computerSelection;

// Score containers 

let pScore = 0;
let cScore = 0;

// update text like Score and choice when click

function updateText (e) {
    const playerLabel = document.querySelector('.player-label');
    const computerLabel = document.querySelector('.computer-label');

    const plyrScore = document.querySelector('.player');
    const cmpScore = document.querySelector('.computer');

    if (e.target === btnRock) {

        const plabel = document.createElement('p');
        const plabelText = document.createTextNode(`Player has chosen ${playerSelection}`);
        const clabel = document.createElement('p');
        const clabelText = document.createTextNode(`Computer has choosen ${computerSelection}`);
        const plyScore = document.createElement('p');
        const plyScoreText = document.createTextNode(pScore);
        const cmpScoree = document.createElement('p');
        const cmpScoreText = document.createTextNode(cScore);

        plabel.appendChild(plabelText);
        playerLabel.appendChild(plabel);
        clabel.appendChild(clabelText);
        computerLabel.appendChild(clabel);
        plyScore.appendChild(plyScoreText);
        plyrScore.appendChild(plyScore);
        cmpScoree.appendChild(cmpScoreText);
        cmpScore.appendChild(cmpScoree);

    } else if (e.target === btnPaper){

        const plabel = document.createElement('p');
        const plabelText = document.createTextNode(`Player has chosen ${playerSelection}`);
        const clabel = document.createElement('p');
        const clabelText = document.createTextNode(`Computer has choosen ${computerSelection}`);
        const plyScore = document.createElement('p');
        const plyScoreText = document.createTextNode(pScore);
        const cmpScoree = document.createElement('p');
        const cmpScoreText = document.createTextNode(cScore);

        plabel.appendChild(plabelText);
        playerLabel.appendChild(plabel);
        clabel.appendChild(clabelText);
        computerLabel.appendChild(clabel);
        plyScore.appendChild(plyScoreText);
        plyrScore.appendChild(plyScore);
        cmpScoree.appendChild(cmpScoreText);
        cmpScore.appendChild(cmpScoree);

    } else if (e.target === btnScissors) {

        const plabel = document.createElement('p');
        const plabelText = document.createTextNode(`Player has chosen ${playerSelection}`);
        const clabel = document.createElement('p');
        const clabelText = document.createTextNode(`Computer has choosen ${computerSelection}`);
        const plyScore = document.createElement('p');
        const plyScoreText = document.createTextNode(pScore);
        const cmpScoree = document.createElement('p');
        const cmpScoreText = document.createTextNode(cScore);
        
        plabel.appendChild(plabelText);
        playerLabel.appendChild(plabel);
        clabel.appendChild(clabelText);
        computerLabel.appendChild(clabel);
        plyScore.appendChild(plyScoreText);
        plyrScore.appendChild(plyScore);
        cmpScoree.appendChild(cmpScoreText);
        cmpScore.appendChild(cmpScoree);

    }
}

// Make the button click-able

    const btnRock = document.querySelector('.rock');
    const btnPaper = document.querySelector('.paper');
    const btnScissors = document.querySelector('.scissors');

    btnRock.addEventListener('click', function(e){
        playerSelection = btnRock.value = rock;
        computerSelection = getComputerChoice(3);
        updateText(e);
    });

    btnPaper.addEventListener('click', function(e){
        playerSelection = btnPaper.value = paper;
        computerSelection = getComputerChoice(3);
        updateText(e);
    });

    btnScissors.addEventListener('click', function(e){
        playerSelection = btnScissors.value = scissors;
        computerSelection = getComputerChoice(3);
        updateText(e);
    });



// Function for computer choice
function getComputerChoice(max) {
    let choice = Math.floor(Math.random() * max + 1);
    // Set the 3 numbers to Rock, Paper and Scissor
    if (choice === 1 ){
        return rock;
    } else if (choice === 2) {
        return paper;
    } else if (choice === 3) {
        return scissors;
    }
}

// Function for staring round and choosing the winner
// function startRound(playerSelection, computerSelection) {
    

//     if (playerSelection === computerSelection) {
//         console.log('DRAW');
//     } else if ((playerSelection === rock) && (computerSelection === scissors)) {
//         console.log('Player Wins!! Rock beats Scissor.');
//         pScore++;
//     } else if ((playerSelection === scissors) && (computerSelection === rock)) {
//         console.log('Computer Wins!! Rock beats Scissor');
//         cScore++;
//     } else if ((playerSelection === rock) && (computerSelection === paper)) {
//         console.log('Computer Wins!! Paper beats Rock.');
//         cScore++;
//     } else if ((playerSelection === paper) && (computerSelection === rock)) {
//         console.log('Player Wins!! Paper beats Rock.');
//         pScore++;
//     } else if ((playerSelection === scissors) && (computerSelection === paper)) {
//         console.log('Player Wins!!  Scissor beats Paper.');
//         pScore++;
//     } else if ((playerSelection === paper) && (computerSelection === scissors)) {
//         console.log('Computer Wins!!  Scissor beats Paper.');
//         cScore++;
//     }
// }

// Function to start a game with 5 rounds
// function game(startRound) {
//     const displayGame = document.querySelector('game h2')
//     for (let i = 0; i < 5; i++) {
//         var computerSelection = getComputerChoice(3);
//         var playerSelection =  getPlayerChoice();

//         startRound(playerSelection, computerSelection);
        
//         if (i === 4) {
//             if (pScore == cScore) {
//                 displayGame.textContent = 'Game Over, The Game is a DRAW'
//             } else if (pScore > computerScore) {
//                 displayGame.textContent = 'Game Over! PLAYER WINS!!';
//             } else if (playerScore < computerScore) {
//                displayGame.textContent = 'Game Over! COMPUTER WINS!!';
//             }
//         }
 
//     }
// }










