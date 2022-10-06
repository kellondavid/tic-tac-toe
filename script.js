// Player sign assignment function
const player = (sign) => {
  this.sign = sign;

  const createPlayer = () => {
    return sign;
  };

  return { createPlayer };
};

// Game board
const gameBoard = () => {
  const gameField = document.querySelectorAll("data-cell");
};

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
