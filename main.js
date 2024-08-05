let display = document.getElementById('display');
let currentInput = '';
let resultDisplayed = false;

function appendValue(value) {
    if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
    }

    if (value === '.' && currentInput.includes('.')) return;

    // Prevent multiple operators in a row
    const operators = ['+', '-', '*', '/', '**', '%'];
    if (operators.includes(value)) {
        if (currentInput === '' || operators.includes(currentInput.slice(-1))) return;
    }

    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function calculate() {
    try {
        // Replace display-friendly operators with eval-compatible ones
        let expression = currentInput.replace(/÷/g, '/').replace(/×/g, '*').replace(/\^/g, '**');

        // Handle percentage calculation
        expression = expression.replace(/(\d+)\s*%/g, '($1 / 100)');

        // Evaluate the expression
        const result = eval(expression);

        // Display result and set flag
        display.textContent = result;
        currentInput = result.toString();
        resultDisplayed = true;
    } catch {
        display.textContent = 'Error';
        currentInput = '';
    }
}
