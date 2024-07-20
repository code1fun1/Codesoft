// scripts.js
let resultElement = document.getElementById('result');

function appendNumber(number) {
    resultElement.value += number;
}

function appendOperator(operator) {
    resultElement.value += ` ${operator} `;
}

function clearResult() {
    resultElement.value = '';
}

function deleteLast() {
    resultElement.value = resultElement.value.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(resultElement.value);
        resultElement.value = result;
    } catch (error) {
        resultElement.value = 'Error!';
    }
}
