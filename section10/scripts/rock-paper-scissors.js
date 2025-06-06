let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  updateScoreElement();

  function resetScore() {
    (score.wins = 0),
      (score.losses = 0),
      (score.ties = 0),
      localStorage.removeItem("score");

    updateScoreElement();
    document.querySelector(".js-result").innerHTML = "";
    document.querySelector(".js-moves").innerHTML = "";
  }

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

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
              Wins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}`);
    updateScoreElement();
    updateResult(result);
    updateMove(playerMove, computerMove);
  }

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
    ).innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon" />
    <img src="images/${computerMove}-emoji.png" class="move-icon" />Computer
  </p>`;
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