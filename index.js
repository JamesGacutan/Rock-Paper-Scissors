// global variable for choices 
var sword = 'Sword';
var axe = 'Axe';
var lance = 'Lance';

// Score container 
let pWins = 0;
let cWins = 0;

// place scores in game
const playerScore = document.querySelector('.player');
const computerScore = document.querySelector('.enemy');

const battleEndDesc = document.querySelector('.battle-end-description');

// Choices
let computerChoice;

// function for computer choice 
function getComputerChoice(n) {
    let choice = Math.floor(Math.random() * n + 1);
    // Set 3 numbers to Sword, Axe and Lance
    if (choice === 1) {
        return sword;   
    } else if (choice === 2) {
        return axe;
    } else {
        return lance; 
    }
}

// place computer weapon in game
function placeWeapon(weapon, player, container) {
    if (weapon == sword) {
        player.src  = 'images/sword.png'
        player.className = 'images'
        container.append(player); 
    } else if (weapon == axe) {
        player.src  = 'images/axe.png'
        player.className = 'images'
        container.append(player); 
    } else {
        player.src  = 'images/spear.png'
        player.className = 'images'
        container.append(player); 
    }
}

// variable for choice image
let playerImage = document.createElement('img');
let enemyImage = document.createElement('img');
let pWeapon = document.querySelector(".player-weapon");
let cWeapon = document.querySelector(".enemy-weapon");

// function for player choice 
let btnSword = document.querySelector('.swords');
let btnAxe = document.querySelector('.axes');
let btnLance = document.querySelector('.lances');

btnSword.addEventListener('click' , () => {
    playerChoice = sword;
    computerChoice = getComputerChoice(3);
    // place choices in game
    placeWeapon(playerChoice, playerImage, pWeapon);
    placeWeapon(computerChoice, enemyImage, cWeapon);
    game();
});
    
btnAxe.addEventListener('click' , () => {
    playerChoice = axe;
    computerChoice = getComputerChoice(3);
    // place choices in game
    placeWeapon(playerChoice, playerImage, pWeapon);
    placeWeapon(computerChoice, enemyImage, cWeapon);
    game();
});
    
btnLance.addEventListener('click' , () => {
    playerChoice = lance;
    computerChoice = getComputerChoice(3);
    // place choices in game
    placeWeapon(playerChoice, playerImage, pWeapon);
    placeWeapon(computerChoice, enemyImage, cWeapon);
    game();
});

// function for starting the game
function startRound(playerChoice, computerChoice){
    const battleDraw = '2 same weapons clashing, Its a Draw!!';
    const swordWin = 'Sword versus Axe, Sword is superior!';
    const axeWin = 'Axe versus Lance, Axe is superior';
    const lanceWin = 'Lance versus Sword, Lance is superior';

    if (playerChoice === computerChoice){
        battleEndDesc.textContent = battleDraw;
    } else if (playerChoice === sword & computerChoice === axe) {
        battleEndDesc.textContent  = `${swordWin}. You win this round.`
        pWins += 1;
    } else if (playerChoice === lance & computerChoice === sword) {
        battleEndDesc.textContent  = `${lanceWin}. You win this round.`
        pWins += 1;
    } else if (playerChoice === axe & computerChoice === lance) {
        battleEndDesc.textContent  = `${axeWin}. You win this round.`
        pWins += 1;
    } else if (computerChoice === sword & playerChoice === axe) {
        battleEndDesc.textContent  = `${swordWin}. You lost this round.`
        cWins += 1;
    } else if (computerChoice === lance & playerChoice === sword) {
        battleEndDesc.textContent  = `${lanceWin}. You lost this round.`
        cWins += 1;
    } else if (computerChoice === axe & playerChoice === lance) {
        battleEndDesc.textContent  = `${axeWin}. You lost this round.`
        cWins += 1;
    } 
        playerScore.textContent = `Your Wins: ${pWins}`;
        computerScore.textContent = `Enemy Wins: ${cWins}`;
    }

// check for winners 
function game() {
    if (pWins == 5) {
        disableBtn();
        const playerWinBattle = document.querySelector('.player-win');
        playerWinBattle.style = 'display: flex';
    } else if (cWins == 5) {
        const enemyWinBattle = document.querySelector('.enemy-win');
        enemyWinBattle.style = 'display: flex';
        disableBtn();
    } else {
        startRound(playerChoice, computerChoice);
    }
}

// function for disabling button after winning
let disableBtn = () => {
    btnSword.disabled = true;
    btnAxe.disabled = true;
    btnLance.disabled = true;
};


