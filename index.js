// made the choices a global var
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

// Make the button click-able

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');

// Add a function to listen to a click event and then assign a value for that button
function getPlayerChoice(e) {
    if (e.target === btnRock) {
        return rock;
    } else if (e.target === btnPaper){
        return paper;
    } else if (e.target === btnScissors) {
        return scissors;
    }
}

btnRock.addEventListener('click', getPlayerChoice);
btnPaper.addEventListener('click', getPlayerChoice);
btnScissors.addEventListener('click', getPlayerChoice);


// Add a function for computer choice

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

console.log(getComputerChoice(3));
