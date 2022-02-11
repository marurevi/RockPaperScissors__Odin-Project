const computerDisplay = document.getElementById('computer-choice');
const playerDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const choices = ['Rock', 'Paper', 'Scissors'];
let result;


document.addEventListener('click', (e) => {
    player = e.target.id;
    computer = computerChoice(); 
    computerDisplay.innerHTML = computer;
    playerDisplay.innerHTML = player.charAt(0).toUpperCase() + player.slice(1);
    resultDisplay.innerHTML = getResult();
})

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