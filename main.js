let display = document.getElementById('display');
let currentInput = '';
let resultDisplayed = false;

function appendValue(value) {
    if (resultDisplayed) {
        if (!isNaN(value) || value === '.') {
            currentInput = '';
        }
        resultDisplayed = false;
    }

    if (value === '.' && currentInput.includes('.')) return;

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
        let expression = currentInput.replace(/÷/g, '/').replace(/×/g, '*').replace(/\^/g, '**');

        expression = expression.replace(/(\d+)\s*%/g, '($1 / 100)');

        const result = eval(expression);

        display.textContent = result;
        currentInput = result.toString();
        resultDisplayed = true;
    } catch {
        display.textContent = 'Error';
        currentInput = '';
    }
}
