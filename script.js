let hand = "";
let playerWins = 0;
let computerWins = 0;
let numRounds = 0;
let victor = "";
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

//operation that generates a random, then determines if it's rock, paper, or scissors, from the numberic results
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

//Logic that represents a real life RPS match, winner is kept record of, and depending on the winner a message is displayed, score of player or computer goes up by 1 if they win
function round(playerChoice, computersChoice) {
  /*DRAW CASE*/
  if (playerChoice === computersChoice) {
    victor = "It's a draw!";
    /* ROCK CASE */
  } else if (playerChoice === "rock" && computersChoice === "paper") {
    victor = "You lose! Paper beats rock.";
    computerWins += 1;
  } else if (playerChoice === "rock" && computersChoice === "scissors") {
    victor = "You win! Rock beats scissors.";
    playerWins += 1;
    /* PAPER CASE */
  } else if (playerChoice === "paper" && computersChoice === "rock") {
    victor = "You win! Paper beats rock.";
    playerWins += 1;
  } else if (playerChoice === "paper" && computersChoice === "scissors") {
    victor = "You lose! scissors beats paper.";
    computerWins += 1;
    /* SCISSORS CASE */
  } else if (playerChoice === "scissors" && computersChoice === "rock") {
    victor = "You lose! rock beats scissors.";
    computerWins += 1;
  } else if (playerChoice === "scissors" && computersChoice === "paper") {
    victor = "You win! scissors beats paper";
    playerWins += 1;
  }
}

// function that plays a round, accepts two parameters representing the player and the computer's hands. the results are then dynamically inserted to the body of the page
function playRound(playerChoice, computerHand) {
  round(playerChoice.toLowerCase(), computerHand(1, 3));
  const results = document.querySelector(".results");
  results.innerHTML += `round: ${(numRounds += 1)}<br>
  Player wins: ${playerWins}<br>
  Computer Wins: ${computerWins}<br>
  ${victor}<br>
  ----------------------------------------------------------------<br>
  `;
}

//event listeners that run the functions on click, depending on which button is clicked, the player's input will be determiend as rock, paper, or scissors.
rock.addEventListener("click", function () {
  playRound("rock", computerHand);
});

paper.addEventListener("click", function () {
  playRound("paper", computerHand);
});

scissors.addEventListener("click", function () {
  playRound("scissors", computerHand);
});
