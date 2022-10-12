// Globals
let playerDisplay = document.querySelector(".playerTurn");
playerDisplay.textContent = "Player X's turn!";

// Game board
const gameBoard = (() => {
  const gameField = document.querySelectorAll(".squares");
  gameField.forEach((square) => {
    square.addEventListener("click", handleClick, { once: true });
  });
  let currentPlayer = "X";
  let prevPlayer = "O";

  function handleClick(e) {
    const square = e.target;
    if (currentPlayer === "X") {
      currentPlayer = "O";
      prevPlayer = "X";
      square.textContent = "X";
      square.classList.add(currentPlayer);
      playerDisplay.textContent = "Player O's turn!";
    } else if (currentPlayer === "O") {
      currentPlayer = "X";
      prevPlayer = "O";
      this.style.color = "white";
      square.textContent = "O";
      square.classList.add(currentPlayer);
      playerDisplay.textContent = "Player X's turn!";
    }
    if (checkWin(currentPlayer)) {
      playerDisplay.textContent = "Player " + prevPlayer + " won!";
      gameField.forEach((square) => {
        square.removeEventListener("click", handleClick);
      });
    } else if (checkDraw()) {
      playerDisplay.textContent = "It's a draw!";
    }
  }

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

  function checkWin(currentPlayer) {
    return winCombos.some((combinations) => {
      return combinations.every((index) => {
        return gameField[index].classList.contains(currentPlayer);
      });
    });
  }

  //Check draw
  function checkDraw() {
    return [...gameField].every((square) => {
      return square.classList.contains("X") || square.classList.contains("O");
    });
  }
})();

// Restart
const restartBtn = document.getElementById("restart");

restartBtn.addEventListener("click", () => {
  window.location.reload();
});
