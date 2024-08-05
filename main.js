let display = document.getElementById('display');
let currentInput = '';

function appendValue(value) {
    if (value === '.' && currentInput.includes('.')) return;
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function calculate() {
    try {
        currentInput = currentInput.replace('÷', '/').replace('×', '*').replace('^', '**');
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result;
    } catch {
        display.textContent = 'Error';
        currentInput = '';
    }
}
