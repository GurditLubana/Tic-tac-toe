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

let currentTurn;
let box = document.getElementsByClassName("boxes");



startGame();

function startGame()
{
    
    resetGrid();

    for (let i = 0; i < 9; i++) {
        box[i].addEventListener("click", markSymbol);
    }
}

function markSymbol() {
  if (currentTurn === "X" && this.innerText === "") {
    this.innerHTML = "X";
    checkWinner(currentTurn);
    currentTurn = "O";
  } else if (currentTurn === "O" && this.innerText === "") {
    this.innerHTML = "O";
    checkWinner(currentTurn);
    currentTurn = "X";
  }
}

function checkWinner(currentTurn) {
  for (let i = 0; i < winningCombinations.length; i++) {
    if (
      box[winningCombinations[i][0]].innerHTML === currentTurn &&
      box[winningCombinations[i][1]].innerHTML === currentTurn &&
      box[winningCombinations[i][2]].innerHTML === currentTurn
    ) {
      let finishGameDisplay = document.getElementsByClassName("winningMessage");
      finishGameDisplay[0].innerHTML = "Game Over!<br> " + currentTurn + " is the Winner ";
      let winnerAnnouncement = document.getElementsByClassName("show");
      winnerAnnouncement[0].style.display = "flex";
      document.getElementById("resetButton").addEventListener("click",resetGame);

    }
  }
}

function resetGame()
{
    startGame();
    let winnerAnnouncement = document.getElementsByClassName("show");
    winnerAnnouncement[0].style.display = "none";

}

function resetGrid()
{
    for(let i =0;i<9; i++)
    {
        box[i].innerHTML = "";
    }
    currentTurn = "X";
}