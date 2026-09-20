let humanScore = 0;
let computerScore = 0;

// DOM Element Selectors
const roundResult = document.querySelector("#round-result");
const scoreDisplay = document.querySelector("#score");
const finalWinner = document.querySelector("#final-winner");
const buttons = document.querySelectorAll("#buttons button");

let getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

let playRound = (humanChoice, computerChoice) => {

  if (humanScore >= 5 || computerScore >= 5) return;

  if (humanChoice === computerChoice) {
    roundResult.textContent = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    roundResult.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    roundResult.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
  }

 
  scoreDisplay.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;

 
  if (humanScore === 5) {
    finalWinner.textContent = "Congratulations! You won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    finalWinner.textContent = "Game over! The computer won the game!";
    disableButtons();
  }
};

let disableButtons = () => {
  buttons.forEach((btn) => (btn.disabled = true));
};


document.querySelector("#rock").addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

document.querySelector("#paper").addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

document.querySelector("#scissors").addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});