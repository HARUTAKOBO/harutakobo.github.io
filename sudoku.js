// 数独グリッドの各セルを生成する関数
function createSudokuGrid() {
  const gridContainer = document.getElementById('sudokuGrid');

  for (let i = 0; i < 81; i++) {
    const cell = document.createElement('div');
    cell.classList.add('sudoku-cell');
    gridContainer.appendChild(cell);
  }
}

// ページのロードが完了したら数独グリッドを生成する
window.onload = createSudokuGrid;
