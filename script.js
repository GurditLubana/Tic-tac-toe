let currentTurn = "X";
let box = document.getElementsByClassName("boxes");
console.log(box);
for (let i = 0; i < 9; i++) {
  box[i].addEventListener('click', markSymbol);
}

function markSymbol() {
  if (currentTurn === "X") 
  {
    this.innerHTML = "X"
    currentTurn = "O"
  }
  else{
    this.innerHTML = "O"
    currentTurn = "X"
  }
}
