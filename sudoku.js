// 数独グリッドの各セルを生成する関数
function createSudokuGrid() {
  const sudoku = document.getElementById('sudoku');

  for (let i = 0; i < 81; i++) {
    const cell = document.createElement('div');
    cell.classList.add('sudoku-cell');
    sudoku.appendChild(cell);
  }
}

// ページのロードが完了したら数独グリッドを生成する
window.onload = createSudokuGrid;
