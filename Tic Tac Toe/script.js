var cells = document.querySelectorAll(".cell");
var resetButton = document.getElementById('reset-button');
var currentPlayer = "X";
var gameActive = true;
var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
];
cells.forEach(function (cell) {
    cell.addEventListener("click", handleClick);
});
function handleClick(e) {
    var cellIndex = parseInt(e.target.id);
    if (gameActive && !cells[cellIndex].textContent) {
        cells[cellIndex].textContent = currentPlayer;
        if (checkWin()) {
            gameActive = false;
            var winnerDisplay = document.getElementById("winner-display");
            if (winnerDisplay) {
                winnerDisplay.textContent = "Player ".concat(currentPlayer, " wins!");
            }
        }
        else if (checkDraw()) {
            gameActive = false;
            var winnerDisplay = document.getElementById("winner-display");
            if (winnerDisplay) {
                winnerDisplay.textContent = "It's a draw!";
            }
        }
        else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}
function checkWin() {
    return winningCombos.some(function (combo) {
        return combo.every(function (index) { return cells[index].textContent === currentPlayer; });
    });
}
function checkDraw() {
    return Array.prototype.slice
        .call(cells)
        .every(function (cell) { return cell.textContent !== ""; });
}
if (resetButton) {
    resetButton.addEventListener('click', function () {
        cells.forEach(function (cell) {
            cell.textContent = '';
        });
        currentPlayer = 'X';
        gameActive = true;
        var winnerDisplay = document.getElementById('winner-display');
        if (winnerDisplay) {
            winnerDisplay.textContent = '';
        }
    });
}
