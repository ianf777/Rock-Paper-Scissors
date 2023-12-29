let hand = "";
let playerWins = 0;
let computerWins = 0;

function computerHand(min, max) {
  let randomizer = Math.floor(Math.random() * (max - min + 1)) + min;
  hand = "";
  if (randomizer === 1) {
    hand = "rock";
  } else if (randomizer === 2) {
    hand = "paper";
  } else if (randomizer === 3) {
    hand = "scissors";
  }
  return hand;
}

function playersHand() {
  let input = prompt("Please choose rock, paper, or scissors");
  return input.toLowerCase();
}

function round(playerChoice, computersChoice) {
  /*DRAW CASE*/
  if (playerChoice === computersChoice) {
    console.log("It's a draw!");
    /* ROCK CASE */
  } else if (playerChoice === "rock" && computersChoice === "paper") {
    console.log("You lose! Paper beats rock.");
    computerWins += 1;
  } else if (playerChoice === "rock" && computersChoice === "scissors") {
    console.log("You win! Rock beats scissors.");
    playerWins += 1;
    /* PAPER CASE */
  } else if (playerChoice === "paper" && computersChoice === "rock") {
    console.log("You win! Paper beats rock.");
    playerWins += 1;
  } else if (playerChoice === "paper" && computersChoice === "scissors") {
    console.log("You lose! scissors beats paper.");
    computerWins += 1;
    /* SCISSORS CASE */
  } else if (playerChoice === "scissors" && computersChoice === "rock") {
    console.log("You lose! rock beats scissors.");
    computerWins += 1;
  } else if (playerChoice === "scissors" && computersChoice === "paper") {
    console.log("You win! scissors beats paper.");
    playerWins += 1;
  }
}

function playRounds() {
  for (let i = 0; i < 5; i++) {
    let playerChoice = playersHand(); // Move inside the loop
    let computersChoice = computerHand(1, 3); // Move inside the loop

    round(playerChoice, computersChoice);
    console.log("Round " + (i + 1));
    console.log("Player Wins: " + playerWins);
    console.log("Computer Wins: " + computerWins);
    console.log("----------------------------------------------");
  }
}

playRounds();
