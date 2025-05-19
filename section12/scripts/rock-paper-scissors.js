let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

const resetButton = document.querySelector(".js-reset-score-button");

resetButton.addEventListener("click", () => {
  (score.wins = 0),
    (score.losses = 0),
    (score.ties = 0),
    localStorage.removeItem("score");

  updateScoreElement();
  document.querySelector(".js-result").innerHTML = "";
  document.querySelector(".js-moves").innerHTML = "";
});

const rockButton = document
  .querySelector(".js-rock-button")
  .addEventListener("click", () => {
    playGame("rock");
  });

const paperButton = document
  .querySelector(".js-paper-button")
  .addEventListener("click", () => {
    playGame("paper");
  });

const scissorsButton = document
  .querySelector(".js-scissors-button")
  .addEventListener("click", () => {
    playGame("scissors");
  });

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("rock");
  } else if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("scissors");
  }
});

function playGame(playerMove) {
  computerMove = pickComputerMove();
  result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You Lose.";
    } else if (computerMove === "paper") {
      result = "You Win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You Lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You Lose.";
    } else if (computerMove === "scissors") {
      result = "You Win.";
    }
  }

  if (result === "You Win.") score.wins += 1;
  else if (result === "You Lose.") score.losses += 1;
  else if (result === "Tie.") score.ties += 1;

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();
  updateResult(result);
  updateMove(playerMove, computerMove);
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

let isAutoPlay = false;
let intervalId;
//const autoPlay = ()=>{

//}

const autoPlayButton = document.querySelector(".js-auto-play-button");

autoPlayButton.addEventListener("click", () => {
  if (!isAutoPlay) {
    intervalId = setInterval(() => {
      const computerMove = pickComputerMove();
      playGame(computerMove);
    }, 1000);
    isAutoPlay = true;
  } else {
    clearInterval(intervalId);
    isAutoPlay = false;
  }
});

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function updateResult(result) {
  document.querySelector(".js-result").innerHTML = result;
}

function updateMove(playerMove, computerMove) {
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="../images/${playerMove}-emoji.png" class="move-icon" />
    <img src="../images/${computerMove}-emoji.png" class="move-icon" />Computer
  </p>`;
}
