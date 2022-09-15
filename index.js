// global variable for choices 

var rock = 'Rock';
var paper = 'Paper';
var scissors = 'Scissors';

// Score container 
let pScore = 0;
let cmpScore = 0;

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

// function for getting player choice
// function getPlayerChoice(e) {

//     let playerChoice;

//     if (e.target === btnRock) {
//         btnRock.textContent = rock;
//         return playerChoice = btnRock.textContent;
//     } else if (e.target === btnPaper) {
//         btnPaper.textContent = paper;
//         return playerChoice = btnPaper.textContent;
//     } else if (e.target === btnScissors) {
//         btnScissors.textContent = scissors;
//         return  playerChoice = btnScissors.textContent;
//     }
// }

// Show computer choice in html
// function showLabel (){
//     computerLabel = document.querySelector('.computer-label')

//     compPara = document.createElement('p');
//     computerLabel.appendChild(compPara);

//     compText = document.createTextNode(`Computer have chosen ${computerChoice}`);
//     compPara.appendChild(compText);
// }


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
        console.log('DRAW');
    } else if (playerChoice === rock & computerChoice === scissors) {
        pScore += 1;
        console.log('Player Wins! Rock beats Scissors');
    } else if (playerChoice === paper & computerChoice === rock) {
        pScore += 1;
        console.log('Player Wins! Paper beats Rock');
    } else if (playerChoice === scissors & computerChoice === paper) {
        pScore += 1;
        console.log('Player Wins! Scissors beats Paper');
    } else if (computerChoice === rock & playerChoice === scissors) {
        cmpScore += 1;
        console.log('Computer Wins! Rock beats Scissors');
    } else if (computerChoice === paper & playerChoice === rock) {
        cmpScore += 1;
        console.log('Computer Wins! Paper beats Rock');
    } else if (computerChoice === scissors & playerChoice === paper) {
        cmpScore += 1;
        console.log('Computer Wins! Scissors beats Paper');
    } 
        
        console.log(pScore);
        console.log(cmpScore);
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

