// Display screen
const resultDisplay = document.getElementById('result');
let expression = "";

// Num buttons!
const numButtons = document.querySelectorAll('.num-btns');

// Operators buttons
const opButtons = document.querySelectorAll('.operations');

// Special buttons
const equalBtn = document.getElementById('equal-btn');
const acBtn = document.getElementById('ac-btn');
const delBtn = document.getElementById('del-btn');

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        expression += button.getAttribute('data-value');
        resultDisplay.textContent = expression;
    });
});

// Helper to check if last character is operator
function isOperator(char) {
    return ['+', '-', '*', '/', '%'].includes(char);
}

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        // Prevent multiple operators in a row
        if (expression !== "" && !isOperator(expression.slice(-1))) {
            expression += value;
            resultDisplay.textContent = expression;
        }
    });
});


equalBtn.addEventListener('click', () => {
    try {
    // Evaluate safely
    let result = eval(expression);
    resultDisplay.textContent = result;
    expression = result.toString(); // Let user continue calculation
    } catch (e) {
    resultDisplay.textContent = "Error";
    expression = "";
    }
});

acBtn.addEventListener('click', () => {
    expression = "";
    resultDisplay.textContent = "0";
});

delBtn.addEventListener('click', () => {
    expression = expression.slice(0, -1);
    resultDisplay.textContent = expression || "0";
});