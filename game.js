const computerDisplay = document.getElementById('computer-choice');
const playerDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
let computerScoreDisplay = document.getElementById('computerScore');
let playerScoreDisplay = document.getElementById('playerScore');
let possibleChoice = document.querySelectorAll('.choices');
const choices = ['Rock', 'Paper', 'Scissors'];
let result, playerScore = 0, computerScore = 0;


possibleChoice.forEach((p) => p.addEventListener('click', (e) => {
    player = e.target.id;
    computer = computerChoice(); 
    computerDisplay.innerHTML = computer;
    playerDisplay.innerHTML = player.charAt(0).toUpperCase() + player.slice(1);
    result = getResult();
    resultDisplay.innerHTML = result;
    if (result == 'You lost!') { computerScore+=1; }
    if (result == 'You win!') { playerScore+=1; }
    computerScoreDisplay.innerHTML = computerScore ?? 0;
    playerScoreDisplay.innerHTML = playerScore ?? 0;
    
}))
game()


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


// Creation of Score Table

function game () {
    let winner = '';
    let sum = 0;
    possibleChoice.forEach((p) => p.addEventListener('click', (e) => {
        e = Math.max (playerScore, computerScore);
        sum = playerScore + computerScore;

        if (e == playerScore) { 
            winner = 'player';
        }else {
            winner = 'computer';
        }
        
        if (sum >= 5) {
            if (winner == 'player') {
               setTimeout(alert( 'YOU WIN THIS GAME!!!'), 5000);
            } else {
                setTimeout(alert ('GAME OVER'), 5000);
            }
            playerScore = 0;
            computerScore = 0;
        } 
    }) )
}



