const choices = ["rock", "paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    // getting a random computer choice
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = ""; // will be empty intially

    if(playerChoice === computerChoice){
        result = "IT'S A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "Scissors") ? "You win" : "You Lose";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win" : "You Lose";
                break;
            case "Scissors":
                result = (computerChoice === "paper") ? "You win" : "You Lose";
                break;
        }
    }

    // we now need to update te text on the screen
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "You win":
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            resultDisplay.classList.add("greenText");
            break;
        case "You Lose":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            resultDisplay.classList.add("redText");
            break;
    }
}