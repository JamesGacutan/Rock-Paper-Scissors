// global variable for choices 

var rock = 'Rock';
var paper = 'Paper';
var scissors = 'Scissors';

// Score container 
let pScore = 0;
let cmpScore = 0;

const playerScore = document.querySelector('.p-score');
const computerScore = document.querySelector('.c-score');


const playerLabel = document.querySelector('.player-para');
const computerLabel = document.querySelector('.computer-para');

// Choices
let computerChoice;

// function for computer choice 
function getComputerChoice(n) {
    let choice = Math.floor(Math.random() * n + 1);
    // Set 3 numbers to Rock, Paper and Scissors
    if (choice === 1) {
        return rock;   
    } else if (choice === 2) {
        return paper;
    } else {
        return scissors; 
    }
}

// function for player choice 
let btnRock = document.querySelector('.rock');
let btnPaper = document.querySelector('.paper');
let btnScissors = document.querySelector('.scissors');


    btnRock.addEventListener('click' , () => {
        playerChoice = btnRock.textContent;
        computerChoice = getComputerChoice(3);
        game();
    });
    
    btnPaper.addEventListener('click' , () => {
        playerChoice = btnPaper.textContent;
        computerChoice = getComputerChoice(3);
    
        game();
    });
    
    btnScissors.addEventListener('click' , () => {
        playerChoice = btnScissors.textContent;
        computerChoice = getComputerChoice(3);
    
        game();
    });



    

// function for starting the game

function startRound(playerChoice, computerChoice){


    if (playerChoice === computerChoice){
        playerLabel.textContent = 'DRAW';
        computerLabel.textContent = 'DRAW';
    } else if (playerChoice === rock & computerChoice === scissors) {
        computerLabel.textContent = '';
        playerLabel.textContent = 'Rock beats Scissors, Player Wins.'
        pScore += 1;
    } else if (playerChoice === paper & computerChoice === rock) {
        computerLabel.textContent = '';
        playerLabel.textContent = 'Paper beats Rock, Player Wins.'
        pScore += 1;
    } else if (playerChoice === scissors & computerChoice === paper) {
        computerLabel.textContent = '';
        playerLabel.textContent = 'Scissors beats paper, Player Wins.'
        pScore += 1;
    } else if (computerChoice === rock & playerChoice === scissors) {
        playerLabel.textContent = '';
        computerLabel.textContent = 'Rock beats Scissors, Computer Wins.';
        cmpScore += 1;
    } else if (computerChoice === paper & playerChoice === rock) {
        playerLabel.textContent = '';
        computerLabel.textContent = 'Paper beats Rock, Computer Wins.';
        cmpScore += 1;
    } else if (computerChoice === scissors & playerChoice === paper) {
        playerLabel.textContent = '';
        computerLabel.textContent = 'Scissors beats paper, Computer Wins.';
        cmpScore += 1;
    } 
        playerScore.textContent = pScore;
        computerScore.textContent = cmpScore;
    }


function game(){

    if (pScore === 5 && cmpScore < 5) {
        announceWin('The game is over! Player Wins!!!')
        disableBtn();
        newGame();
    } else if (pScore < 5 && cmpScore === 5) {
        announceWin('The game is over! Computer Wins!!!')
        disableBtn();
        newGame();
    }  else {
        startRound(playerChoice, computerChoice);
    }
}


// function for disabling button after winning

let disableBtn = () => {
    btnPaper.disabled = true;
    btnRock.disabled = true;
    btnScissors.disabled = true;
};

// function for displaying the result

let announceWin = (winner) => {
    const container = document.querySelector('.game');

    const newH2 = document.createElement('h2');
    newH2.textContent = winner;

    container.append(newH2);
};

// function for starting a new game 

let newGame = () => {
    const newBtn = document.querySelector('.button-container');

    newBtn.style.opacity = 1;
};

