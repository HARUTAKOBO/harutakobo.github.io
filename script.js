// script.js
document.addEventListener("DOMContentLoaded", function() {
    const xInput = document.getElementById("x");
    const yInput = document.getElementById("y");
    const calculateButton = document.getElementById("calculate-button");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", function() {
        const x = parseFloat(xInput.value);
        const y = parseFloat(yInput.value);
        if (!isNaN(x) && !isNaN(y)) {
            const result = (x * (1 + 0.00015282 * y)).toFixed(2);
            resultElement.textContent = `税引後<br>${result}`; // 結果を改行して表示
        } else {
            resultElement.textContent = "有効な数値を入力してください。";
        }
    });
});
