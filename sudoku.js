// 数独の盤面が適切かをチェックする関数
function isSafe(board, row, col, num) {
    for (let x = 0; x <= 8; x++) {
        if (board[row][x] == num || board[x][col] == num) {
            return false;
        }
    }
    let startRow = row - row % 3,
        startCol = col - col % 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i + startRow][j + startCol] == num) {
                return false;
            }
        }
    }
    return true;
}

// 空いているセルを見つける関数
function findEmptySpot(board) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] == 0) {
                return [row, col];
            }
        }
    }
    return [-1, -1];
}

// 数独を解く関数
function solveSudoku(board) {
    let emptySpot = findEmptySpot(board);
    let row = emptySpot[0];
    let col = emptySpot[1];

    if (row === -1) {
        return true;
    }

    for (let num = 1; num <= 9; num++) {
        if (isSafe(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board)) {
                return true;
            }
            board[row][col] = 0;
        }
    }
    return false;
}

// ページのセルを生成する関数
function createGrid() {
    const grid = document.getElementById('sudoku-grid');
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const input = document.createElement('input');
            input.id = `cell-${row}-${col}`;
            input.classList.add('cell');
            input.type = 'number';
            input.min = 1;
            input.max = 9;
            grid.appendChild(input);
        }
    }
}

// 数独を解くためのボタンがクリックされたときに呼ばれる関数
function solve() {
    let board = [];
    for (let row = 0; row < 9; row++) {
        board.push([]);
        for (let col = 0; col < 9; col++) {
            let cell = document.getElementById(`cell-${row}-${col}`);
            board[row][col] = cell.value ? parseInt(cell.value) : 0;
        }
    }

    if (solveSudoku(board)) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                document.getElementById(`cell-${row}-${col}`).value = board[row][col];
            }
        }
        alert('数独が解けました！');
    } else {
        alert('この数独は解けません。');
    }
}

// ここに先ほどの数独ソルバーのロジックが続きます...

// ページ読み込み時にグリッドを生成する
createGrid();

// 数独のグリッドをリセットする関数
function resetGrid() {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            document.getElementById(`cell-${row}-${col}`).value = '';
        }
    }
    alert('数独がリセットされました！');
}


// ページ読み込み時にグリッドを生成する
createGrid();
