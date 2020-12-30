let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() { return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, targetGuess) {
  const humanScore = Math.abs(targetGuess - humanGuess);
  const computerScore = Math.abs(targetGuess - computerGuess);
  return humanScore <= computerScore;
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}
