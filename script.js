let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

let xPoints = 0;
let oPoints = 0;
let winner;
let currentTurn;
let box = document.getElementsByClassName("boxes");


startGame();

function startGame() {
  resetGrid();
  document.getElementsByClassName("scoreX")[1].innerHTML = xPoints;
  document.getElementsByClassName("scoreO")[1].innerHTML = oPoints;

  for (let i = 0; i < 9; i++) {
    box[i].addEventListener("click", markSymbol);
    box[i].addEventListener("mouseover",mouseoverBox);
    box[i].addEventListener("mouseout",mouseOutBox);
  }
}

function mouseoverBox()
{
  if(this.style.background !== "red" )
  this.style.background = "rgb(173, 117, 173)";
}
function mouseOutBox()
{
  if(this.style.background !== "red" )
  this.style.background = "radial-gradient(167.91% 1263% at 3.94% 100%,#0c1b52 0%,#7b0770 100%)";
}

function markSymbol() {
  if (currentTurn === "X" && this.innerText === "") {
    this.innerHTML = "X";
    checkResults();
    switchTurns();
  } else if (currentTurn === "O" && this.innerText === "") {
    this.innerHTML = "O";
    checkResults();
    switchTurns();
  }
}

function checkWinner() {
  for (let i = 0; i < winningCombinations.length; i++) {
    if (
      box[winningCombinations[i][0]].innerHTML === currentTurn &&
      box[winningCombinations[i][1]].innerHTML === currentTurn &&
      box[winningCombinations[i][2]].innerHTML === currentTurn
    ) {
      winner = currentTurn;
      displayWinningMsg(winner, i);
      updateScores();

      return true;
    }
  }
  return false;
}

function resetGame() {
  let turnMsg = document.getElementsByTagName("h3");
  turnMsg[0].innerHTML = "Start the game with X's turn first";
  document.getElementById("winningStrokeLine").classList.remove("line");
  document.getElementById("finishGame").classList.remove("endgame");
  let finishGameDisplay = document.getElementsByClassName("winningMessage");
  finishGameDisplay[0].innerHTML = "";
  startGame();
}

function resetGrid() {
  for (let i = 0; i < 9; i++) {
    box[i].innerHTML = "";
    box[i].style.background = 
    "radial-gradient(167.91% 1263% at 3.94% 100%,#0c1b52 0%,#7b0770 100%)";
    // box[i].style.backgroundColor= "white"
    
  }
  currentTurn = "X";
}

function checkResults() {
  let ifWinner = checkWinner();
  let gameFinished = true;
  if (!ifWinner) {
    for (let i = 0; i < 9 && gameFinished; i++) {
      if (box[i].innerHTML === "") {
        gameFinished = false;
      }
    }

    if (gameFinished) {
      displayWinningMsg();
    }
  }
}

function switchTurns() {
  if (currentTurn === "X") {
    currentTurn = "O";
    let turnMsg = document.getElementsByTagName("h3");
    turnMsg[0].innerHTML = "It is O's turn now";
  } else {
    currentTurn = "X";
    let turnMsg = document.getElementsByTagName("h3");
    turnMsg[0].innerHTML = "It is X's turn now";
  }
}

function updateScores() {
  if (winner === "X") {
    xPoints++;
  } else if (winner === "O") {
    oPoints++;
  }
}

function displayWinningMsg(result, winningIndex) {
  let winningMessage = "";
  if (result === "X" || result === "O") {
    winningMessage = "Game Over!<br> " + winner + " is the Winner ";
    displayWinningLine(winningIndex);
  } else {
    winningMessage = "Game Over!<br> It was a Draw ";
  }
  

  let finishGameDisplay = document.getElementsByClassName("winningMessage");
  finishGameDisplay[0].innerHTML = winningMessage;
  document.getElementById("finishGame").classList.add("endgame");
  document.getElementById("resetButton").addEventListener("click", resetGame);
}

function displayWinningLine(i) {
  for (let x = 0; x < 3; x++) {
    box[winningCombinations[i][x]].style.background = "red";
  }
}
