function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    const choice = prompt("Enter your choice: rock, paper, or scissors");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;
