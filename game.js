const computerDisplay = document.getElementById('computer-choice');
const playerDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
let computerScoreDisplay = document.getElementById('computerScore');
let playerScoreDisplay = document.getElementById('playerScore');
let possibleChoice = document.querySelectorAll('.choices');
const choices = ['Rock', 'Paper', 'Scissors'];
let result, playerScore = 0, computerScore = 0;


possibleChoice.forEach((p) => p.addEventListener('click', (x) => {
    // Setting player and computer values
    player = x.target.id;
    computer = computerChoice(); 
    result = getResult();

    computerDisplay.innerHTML = computer;
    playerDisplay.innerHTML = player.charAt(0).toUpperCase() + player.slice(1);
    resultDisplay.innerHTML = result;

    // Setting score table

    if (result == 'You lost!') { computerScore+=1; }
    if (result == 'You win!') { playerScore+=1; }

    computerScoreDisplay.innerHTML = computerScore ?? 0;
    playerScoreDisplay.innerHTML = playerScore ?? 0;

    // Getting the winner of an 'x' numbers of rounds.
    let winner = '', sum = 0;

    max = Math.max (playerScore, computerScore);
    sum = playerScore + computerScore;

    if (max == playerScore) { 
        winner = 'player';
    } else {
        winner = 'computer';
    }
    
    // After 5 rounds the game ends with an alert message and reseting all values on Score table.
    if (sum >= 5) {
        if (winner == 'player') {
            alert( 'YOU WIN THIS GAME!!!');
            } else {
            alert ('GAME OVER');
        }
        playerScore = 0;
        computerScore = 0;
    } 
 }));

 // Secondary functions used to simplify the code into the listener event.

function computerChoice () {
    let computer = choices[Math.floor(Math.random(choices)*3)];
    return computer;
}

function getResult(){
    let str = player + computer;

    switch (str.toUpperCase()){
        case 'ROCKROCK':
        case 'PAPERPAPER':
        case 'SCISSORSSCISSORS':
            result = 'It is a draw!';
            break;

        case 'ROCKPAPER':
        case 'PAPERSCISSORS':
        case 'SCISSORSROCK':
            result = 'You lost!';
            break;
        case 'ROCKSCISSORS':
        case 'PAPERROCK':
        case 'SCISSORSPAPER':
            result = 'You win!';
            break;
    }
    return result;
}

