const cells: NodeListOf<Element> = document.querySelectorAll(".cell");
const resetButton: HTMLButtonElement | null = document.getElementById('reset-button') as HTMLButtonElement;

let currentPlayer: string = "X";
let gameActive: boolean = true;


const winningCombos: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});

function handleClick(e: Event): void {
  const cellIndex: number = parseInt((e.target as HTMLElement).id);
  if (gameActive && !(cells[cellIndex] as HTMLElement).textContent) {
    (cells[cellIndex] as HTMLElement).textContent = currentPlayer;
    if (checkWin()) {
      gameActive = false;
      const winnerDisplay: HTMLElement | null =
        document.getElementById("winner-display");
      if (winnerDisplay) {
        winnerDisplay.textContent = `Player ${currentPlayer} wins!`;
      }
    } else if (checkDraw()) {
      gameActive = false;
      const winnerDisplay: HTMLElement | null =
        document.getElementById("winner-display");
      if (winnerDisplay) {
        winnerDisplay.textContent = "It's a draw!";
      }
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin(): boolean {
  return winningCombos.some((combo) => {
    return combo.every(
      (index) => (cells[index] as HTMLElement).textContent === currentPlayer
    );
  });
}

function checkDraw(): boolean {
  return Array.prototype.slice
    .call(cells)
    .every((cell) => (cell as HTMLElement).textContent !== "");
}


if (resetButton) {
  resetButton.addEventListener('click', () => {
    cells.forEach(cell => {
      (cell as HTMLElement).textContent = '';
    });

    currentPlayer = 'X';
    gameActive = true;

    const winnerDisplay: HTMLElement | null = document.getElementById('winner-display');
    if (winnerDisplay) {
      winnerDisplay.textContent = '';
    }
  });
}
