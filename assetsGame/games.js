const current = document.getElementById('current')
const cells = document.querySelectorAll('.cell');
const btnOne =document.getElementById('btn-one');


const conditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [3,5,8],
    [0,4,8],
    [2,4,6]
]

let choices = ['','','','','','','','',''];
let player = 'X';
let currentStatus = false; 
startGame();

function startGame () {
    cells.forEach( cells => cells.addEventListener('click', clicked));
    btnOne.addEventListener('click', restartGame);
    current.textContent = `${player}'s turn!`;
    currentStatus = true;
}

function clicked () {
    const cellIndex = this.getAttribute('cellIndex');
    if(choices[cellIndex] != '' || !currentStatus ) {
        return;
    }
    updateCell(this, cellIndex)
    winner();
}

function updateCell (cell,index) {
    choices[index] = player;
    cell.textContent = player;
}

function changePlayer () {
    player = (player == 'X') ? "O" : 'X';
    current.textContent = `${player}'s turn!`
}

function winner () {
    let roundWon  = false;
    for ( let i = 0; i < conditions.length; i++) {
        const condition = conditions[i];
        const setOne = choices[0];
        const setTwo = choices[1];
        const setThree = choices[2];

        if(setOne == '' || setTwo == '' || setThree == ''){
            continue;
        }

        if(setOne == setTwo && setTwo == setThree){
            roundWon = true;
            break;
        }
        
    if(roundWon) {
        current.textContent = `${player} wins!`;
    } else if (!choices.includes('')){
        current.textContent = `Draw!`;
        currentStatus = false;
    } else {
        changePlayer();
    }
    }
}

function restartGame () {

}