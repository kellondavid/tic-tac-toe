// Player sign assignment function
const player = (sign) => {
  this.sign = sign;

  const createPlayer = () => {
    return sign;
  };

  return { createPlayer };
};

// Game board
const game = () => {
  const field = ["", "", "", "", "", "", "", "", ""];
};

// Restart
const restartBtn = document.getElementById("restart");

restartBtn.addEventListener("click", () => {
  window.location.reload();
});
