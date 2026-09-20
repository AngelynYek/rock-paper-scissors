let getHumanChoice = () => {
  return prompt("Rock, Paper or Scissors?: ");
};

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  let playRound = (humanChoice, computerChoice) => {
    if (!humanChoice) return;
    humanChoice = humanChoice.toLowerCase();

    // Handles user typing "scissor" without an "s"
    if (humanChoice === "scissor") {
      humanChoice = "scissors";
    }

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
    }
    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
  };

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  console.log("FINAL RESULTS");
  if (humanScore > computerScore) {
    console.log(`Congratulations! You won the game ${humanScore} to ${computerScore}!`);
  } else if (computerScore > humanScore) {
    console.log(`Game over! The computer won ${computerScore} to ${humanScore}!`);
  } else {
    console.log(`It's a draw! Final score: ${humanScore} to ${computerScore}.`);
  }
}

// Start the game
playGame();