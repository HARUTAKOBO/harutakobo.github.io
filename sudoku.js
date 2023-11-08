// JavaScript for solving Sudoku

// Check if the current number can be placed at the position (row, col)
function isSafe(board, row, col, num) {
    // Row has the unique (row-clash)
    for (let d = 0; d < board.length; d++) {
        // If the number we are trying to place is already present in that row, return false;
        if (board[row][d] === num) {
            return false;
        }
    }

    // Column has the unique numbers (column-clash)
    for (let r = 0; r < board.length; r++) {
        // If the number we are trying to place is already present in that column, return false;
        if (board[r][col] === num) {
            return false;
        }
    }

    // Corresponding square has unique number (box-clash)
    let sqrt = Math.sqrt(board.length);
    let boxRowStart = row - row % sqrt;
    let boxColStart = col - col % sqrt;

    for (let r = boxRowStart; r < boxRowStart + sqrt; r++) {
        for (let d = boxColStart; d < boxColStart + sqrt; d++) {
            if (board[r][d] === num) {
                return false;
            }
        }
    }

    // If there is no clash, it's safe
    return true;
}

// Sudoku solver function
function solveSudoku(board, n) {
    let row = -1;
    let col = -1;
    let isEmpty = true;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) {
                row = i;
                col = j;
                isEmpty = false;
                break;
            }
        }
        if (!isEmpty) {
            break;
        }
    }

    // No empty space left
    if (isEmpty) {
        return true;
    }

    // Else for each-row backtrack
    for (let num = 1; num <= n; num++) {
        if (isSafe(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board, n)) {
                return true;
            }
            board[row][col] = 0;
        }
    }
    return false;
}

// Initialize a Sudoku board
let board = [
    // ... (initial Sudoku board setup goes here)
];

// Populate the Sudoku grid and solve the board
window.onload = function() {
    const grid = document.getElementById('sudoku-grid');
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = board[row][col] !== 0 ? board[row][col] : '';
            cell.id = `cell-${row}-${col}`;
            grid.appendChild(cell);
        }
    }

    // Call the solveSudoku function when the script loads
    if (solveSudoku(board, 9)) {
        // Update the grid with the solved board
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                let cell = document.getElementById(`cell-${row}-${col}`);
                cell.textContent = board[row][col];
            }
        }
    } else {
        alert('No solution exists for the given Sudoku');
    }
};
