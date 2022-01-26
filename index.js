/// Javascript 

//
const options = document.querySelectorAll('.options');

let playerScore = 0;
let computerScore = 0;


// Obtaining the value of the inputs
options.forEach(option => {
    console.log(option);

    // Transfering the input from the button click into a variable
    option.addEventListener("click", function() { // Might be able to turn this into an arrow function
        const playerInput = this.textContent;

        const computerOptions = ["Rock", "Paper", "Scissors"];
        const computerInput = computerOptions[Math.floor(Math.random() * 3)];

        compareInputs(playerInput, computerInput);
        updateScore();

        if (checkWinner()) {    // Send a prompt asking if they want to play again rather then just resetting the system.
            if (confirm('Do you want to play again?')) {
                playerScore = computerScore = 0;
                updateScore();
            }
        }
    });
});


/// Determining the Winner
function compareInputs(playerInput, computerInput) {
    const currentMatch = `${playerInput} vs ${computerInput}`;


    // Check if the scores have not been reset
    if (checkWinner()) {
        alert('To restart the match the score will be reset to 0');
        playerScore = computerScore = 0;
        updateScore();
        return;
    }

    // Checking for a Tie
    if(playerInput === computerInput) {
        alert(`${currentMatch} is a Tie`);
        return;
    }

    // Rock
    if(playerInput === 'Rock') {
        if(computerInput === 'Scissors') {
            alert(`${currentMatch} = You Win!`);
            playerScore++;
        } else {
            alert(`${currentMatch} = You Lose`);
            computerScore++;
        }
    }
    // Paper
    else if(playerInput === 'Paper') {
        if(computerInput === 'Rock') {
            alert(`${currentMatch} = You Win!`);
            playerScore++;
        } else {
            alert(`${currentMatch} = You Lose`);
            computerScore++;
        }
    }
    // Scissors
    else if (playerInput === "Scissors") {
        if (computerInput === 'Paper') {
            alert(`${currentMatch} = You Win!`);
            playerScore++;
        }
        else {
            alert(`${currentMatch} = You Lose`);
            computerScore++;
        }
    }
}

function updateScore() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}



function checkWinner() {
    if(playerScore === 5 || computerScore === 5) {
        const winner = 
        playerScore === 5
            ? "You win the game! Congratulations!"
            : "The computer wins the game! Better luck next time!";
        
        alert(winner);
        return true;
    }
    return false;
}
