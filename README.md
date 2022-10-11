LIVE: https://kellondavid.github.io/tic-tac-toe/

Odin Project's Tic Tac Toe Game Assignment

General Thoughts: Assignment introduced us to module patterns and factory functions, and I decided to use module patterns for my gameboard. Creating the game itself wasn't too difficult, but figuring out and writing the logic to check for game winner took quite a while. I had to do some research on Array.prototype.some(), but I was able to write the code after doing so! Additionally, I think there is a better way to code this game, because I don't think I should be relying on UI to hold the game information. In the future, I will probably come back to this project and refactor the code to rely on the state/data (e.g., `const gameBoard = ["X", "X", "O", "", "", "O", "", "", "X"];`), and make the UI to update based on the array.

What I learned:

- Factory functions and module patterns
- Array.prototype.some();
- How to remove outside borders in CSS