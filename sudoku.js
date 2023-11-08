// JavaScript for solving Sudoku

function isSafe(board, row, col, num) {
    // Rest of the isSafe function...
}

function solveSudoku(board, n) {
    // Rest of the solveSudoku function...
}

// Initialize a Sudoku board
let board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

// Populate the Sudoku grid
const grid = document.getElementById('sudoku-grid');
for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = board[row][col] !== 0 ? board[row][col] : '';
        grid.appendChild(cell);
    }
}

// Solve the Sudoku when the script loads
solveSudoku(board, 9);
