
// Make the button click-able

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');

// Add a function to listen to a click event and then assign a value for that button
function getPlayerChoice(e) {
    if (e.target === btnRock) {
        const rock = 'rock';
        return rock;
    } else if (e.target === btnPaper){
        const paper = 'paper';
        return paper;
    } else if (e.target === btnScissors) {
        const scissors = 'scissors';
        return scissors;
    }
}

btnRock.addEventListener('click', getPlayerChoice);
btnPaper.addEventListener('click', getPlayerChoice);
btnScissors.addEventListener('click', getPlayerChoice);


// Add a function for computer choice


