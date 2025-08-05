function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById("results");

function playRound(humanChoice) {
    if (humanScore >= 5 || computerScore >= 5) return;

    const computerChoice = getComputerChoice();

    resultsDiv.innerHTML = '';

    const roundInfo = document.createElement("p");
    roundInfo.textContent = `You chose ${humanChoice}, Computer chose ${computerChoice}`;
    resultsDiv.appendChild(roundInfo);

    let resultText = '';

    
    if (humanChoice === computerChoice) {
        resultText = "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        resultText = "You win this round!";
    } else {
        computerScore++;
       resultText = "Computer wins this round!";
    }

    const resultMessage = document.createElement("p");
    resultMessage.textContent = resultText;
    resultsDiv.appendChild(resultMessage);

    const score = document.createElement("p");
    score.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;
    resultsDiv.appendChild(score);

    if (humanScore === 5 || computerScore === 5) {
        const winner = document.createElement("h2");
        if (humanScore === 5) {
            winner.textContent = "🎉 You win the game!";
        } else {
            winner.textContent = "💻 Computer wins the game!";
        }
        resultsDiv.appendChild(winner);
 
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// Add event listeners to the buttons
document.getElementById("rock").addEventListener("click", function () {
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", function () {
    playRound("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
    playRound("scissors");
});




// Start the game


