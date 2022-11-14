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

function startGame()
{
    
    resetGrid();

    (document.getElementsByClassName("scoreX"))[1].innerHTML = xPoints;
    (document.getElementsByClassName("scoreO"))[1].innerHTML = oPoints;
    

    for (let i = 0; i < 9; i++) {
        box[i].addEventListener("click", markSymbol);
    }
}

function markSymbol() {
  if (currentTurn === "X" && this.innerText === "") {
    this.innerHTML = "X";
    
  } else if (currentTurn === "O" && this.innerText === "") {
    this.innerHTML = "O"
    
  }

  checkResults()
  switchTurns()
}

function checkWinner() {
  for (let i = 0; i < winningCombinations.length; i++) {
    if (
      box[winningCombinations[i][0]].innerHTML === currentTurn &&
      box[winningCombinations[i][1]].innerHTML === currentTurn &&
      box[winningCombinations[i][2]].innerHTML === currentTurn
    ) {
      
      winner = currentTurn;
      let finishGameDisplay = document.getElementsByClassName("winningMessage");
      finishGameDisplay[0].innerHTML = "Game Over!<br> " + currentTurn + " is the Winner ";
      document.getElementById("finishGame").classList.add("endgame");
      document.getElementById("resetButton").addEventListener("click",resetGame);
      updateScores();
      // let finishGameDisplay = document.getElementById("winningMsg");
      // finishGameDisplay[0].innerHTML = "Game Over!<br> " + winner + " is the Winner ";
      

      return true
    }
  }
  return false;
}

function resetGame()
{
    startGame();
    let winnerAnnouncement = document.getElementsByClassName("endgame");
    winnerAnnouncement[0].style.display = "none";

}

function resetGrid()
{
    for(let i =0;i<9; i++)
    {
        box[i].innerHTML = "";
       
        
    }
    let turnMsg = document.getElementsByTagName("h3");
    turnMsg[0].innerHTML = "Start the game with X's turn first"
    currentTurn = "X";
}

function checkResults()
{
    let ifWinner = checkWinner();
    let gameFinished = true;
    let finishGameDisplay = document.getElementsByClassName("winningMessage");
    if(!ifWinner)
    {
        for(let i = 0; i<9 && (gameFinished); i++)
        {
            if(box[i].innerHTML === "")
            {
                gameFinished = false;
            }
        }

        if(gameFinished)
        {
           
            // finishGameDisplay[0].innerHTML = "Game Over!<br> It was a Draw. ";
            // let winnerAnnouncement = document.getElementsByClassName("endgame");
            //  winnerAnnouncement[0].style.display = "flex";
             document.getElementById("resetButton").addEventListener("click",resetGame);
        }


    }


      
}

function switchTurns()
{

  if(currentTurn === "X")
  {
    currentTurn = "O"
    let turnMsg = document.getElementsByTagName("h3");
    turnMsg[0].innerHTML = "It is O's turn now"
  }
  else{
    currentTurn = "X"
    let turnMsg = document.getElementsByTagName("h3");
    turnMsg[0].innerHTML = "It is X's turn now"
  }
}

function showWinningCombination(i)
{
  box[winningCombinations[i][0]].style.background = "red"
  box[winningCombinations[i][1]].style.background = "red"
  box[winningCombinations[i][2]].style.background = "red"
}

function updateScores()
{
  if(winner === "X")
  {
    xPoints++;
  }
  else if(winner === "O")
  {
    oPoints++;
  }
}