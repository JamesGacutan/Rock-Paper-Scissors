const rock = 'Rock';
const paper = 'Paper';
const scissor = 'Scissor';

// Function for computer choice
function getComputerChoice(max) {
    let choice = Math.floor(Math.random() * max + 1);

    if (choice === 1 ){
        return rock;
    } else if (choice === 2) {
        return paper;
    } else if (choice === 3) {
        return scissor;
    }
}


