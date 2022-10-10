// Game board
const gameBoard = (() => {
  const gameField = document.querySelectorAll(".squares");
  gameField.forEach((square) => {
    square.addEventListener("click", handleClick, { once: true });
  });
  let currentPlayer = "x"
  
  function handleClick(e) {
    const square = e.target
    if (currentPlayer === "x") {
      currentPlayer = "o"
      square.textContent = "X"
      console.log(currentPlayer)
    }else if (currentPlayer === "o") {
      currentPlayer = "x"
      square.textContent = "O"
      console.log(currentPlayer)
    }
  }
})();

// Check winner
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Restart
const restartBtn = document.getElementById("restart");

restartBtn.addEventListener("click", () => {
  window.location.reload();
});
