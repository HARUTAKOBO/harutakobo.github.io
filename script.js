document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("calculator-form");
    const calculateButton = document.getElementById("calculate-button");
    const resultDiv = document.getElementById("result");
    const resultSpan = document.getElementById("calculation-result");

    calculateButton.addEventListener("click", function() {
        const x = parseFloat(document.getElementById("x").value);
        const y = parseFloat(document.getElementById("y").value);

        if (!isNaN(x) && !isNaN(y)) {
            const result = (x * (1 + 0.00015282 * y)).toFixed(2);
            resultSpan.textContent = result;
            resultDiv.classList.remove("hidden");
        }
    });
});
