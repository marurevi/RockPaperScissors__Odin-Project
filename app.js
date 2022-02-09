const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    yourChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
} ));

function generateComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3 +1) ;
    switch(randomNumber){
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;        
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if (userChoice == computerChoice){
        result = 'It is a draw!';
    }
    if (userChoice == 'rock' && computerChoice == 'paper'){
        result = 'You lost!';
    }
    if (userChoice == 'rock' && computerChoice == 'scissors'){
        result = 'You win!';
    }
    if (userChoice == 'paper' && computerChoice == 'rock'){
        result = 'You win!';
    }
    if (userChoice == 'paper' && computerChoice == 'scissors'){
        result = 'You lost!';
    }
    if (userChoice == 'scissors' && computerChoice == 'rock'){
        result = 'You lost!';
    }
    if (userChoice == 'scissors' && computerChoice == 'paper'){
        result = 'You win!';
    }
    resultDisplay.innerHTML = result;
}