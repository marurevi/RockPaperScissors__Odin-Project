const compDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('.choices');


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
            compChoice = 'rock';
            break;
        case 2:
            compChoice = 'paper';
            break;
        case 3:
            compChoice = 'scissors';
            break;        
    }
    compDisplay.innerHTML = compChoice;
}

function getResult(){
    switch (userChoice + compChoice){
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            result = 'It is a draw!';
            break;

        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            result = 'You lost!';
            break;
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            result = 'You win!';
            break;
    }
    resultDisplay.innerHTML = result;
}

