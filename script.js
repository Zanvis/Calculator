const btnC = document.getElementById('btnC');
const btnBackspace = document.getElementById('btnbackspace');
const btnPower = document.getElementById('btnpower');
const btnRoot = document.getElementById('btnroot');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btnDivide = document.getElementById('btndivide');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btnMultiply = document.getElementById('btnmultiply');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btnMinus = document.getElementById('btnminus');
const btn0 = document.getElementById('btn0');
const btnDot = document.getElementById('btndot');
const btnEqual = document.getElementById('btnequal');
const btnPlus = document.getElementById('btnplus');
const screen = document.getElementById('screen');
let result = 0;
let screenText = '';
let currentOperator = '';
let lastClickedOperator = '';

btnC.addEventListener('click', function () {
    clearScreen();
    currentOperator = '';
    lastClickedOperator = '';
    console.log('C button clicked');
});

btnBackspace.addEventListener('click', function () {
    console.log('Backspace button clicked');
    if (screenText.length > 0) {
        screenText = screenText.slice(0, -1);
        updateScreen();
    }
});

btnPower.addEventListener('click', function () {
    if(screen.textContent == '')
        screen.textContent = 'Error';
    else{
        applyOperator();
        screenText = (Math.pow(parseFloat(screenText), 2)).toString();
        result = parseFloat(screenText);
        updateScreen();
    }
    console.log('Power button clicked');
});

btnRoot.addEventListener('click', function () {
    if(screen.textContent == '')
        screen.textContent = 'Error';
    else{
        applyOperator();
        screenText = (Math.sqrt(parseFloat(screenText))).toString();
        result = parseFloat(screenText);
        updateScreen();
    }
    console.log('Root button clicked');
});

btn7.addEventListener('click', function () {
    appendToScreen('7');
    console.log('7 button clicked');
});

btn8.addEventListener('click', function () {
    appendToScreen('8');
    console.log('8 button clicked');
});

btn9.addEventListener('click', function () {
    appendToScreen('9');
    console.log('9 button clicked');
});

btnDivide.addEventListener('click', function () {
    if(screen.textContent != '')
        handleOperatorClick('/');
    else
        screen.textContent = 'Error';
    console.log('Divide button clicked');
});

btn4.addEventListener('click', function () {
    appendToScreen('4');
    console.log('4 button clicked');
});

btn5.addEventListener('click', function () {
    appendToScreen('5');
    console.log('5 button clicked');
});

btn6.addEventListener('click', function () {
    appendToScreen('6');
    console.log('6 button clicked');
});

btnMultiply.addEventListener('click', function () {
    if(screen.textContent != '')
        handleOperatorClick('*');
    else
        screen.textContent = 'Error';
    console.log('Multiply button clicked');
});

btn1.addEventListener('click', function () {
    appendToScreen('1');
    console.log('1 button clicked');
});

btn2.addEventListener('click', function () {
    appendToScreen('2');
    console.log('2 button clicked');
});

btn3.addEventListener('click', function () {
    appendToScreen('3');
    console.log('3 button clicked');
});

btnMinus.addEventListener('click', function () {
    if(screen.textContent != '')
        handleOperatorClick('-');
    else
    screen.textContent = 'Error';
    console.log('Minus button clicked');
});

btn0.addEventListener('click', function () {
    appendToScreen('0');
    console.log('0 button clicked');
});

btnDot.addEventListener('click', function () {
    appendToScreen('.');
    console.log('Dot button clicked');
});

btnEqual.addEventListener('click', function () {
    if(screen.textContent != ''){
    applyOperator();
    lastClickedOperator = '=';
    }
    else
        screen.textContent = 'Error';
    console.log('Equal button clicked');
});

btnPlus.addEventListener('click', function () {
    if(screen.textContent != '')
        handleOperatorClick('+');
    else
        screen.textContent = 'Error';
    console.log('Plus button clicked');
});

function handleOperatorClick(newOperator) {
    if (lastClickedOperator === '=') {
        result = parseFloat(screenText);
    } else {
        applyOperator();
    }
    screenText = '';
    currentOperator = newOperator;
    lastClickedOperator = newOperator;
    console.log(result);
}

function applyOperator() {
    const num = parseFloat(screenText);
    if (currentOperator === '+') {
        result += num;
        if(!parseInt(num))
            result = 'Error';
    } else if (currentOperator === '-') {
        result -= num;
        if(!parseInt(num))
            result = 'Error';
    } else if (currentOperator === '*') {
        result *= num;
        if(!parseInt(num))
            result = 'Error';
    } else if (currentOperator === '/') {
        if (num !== 0) {
            result /= num;
            if(!parseInt(num))
                result = 'Error';
        } else {
            result = 'Division by zero';
        }
    } else {
        result = num;
    }
    screenText = result.toString();
    currentOperator = '';
    lastClickedOperator = '';
    updateScreen();
}

function appendToScreen(value) {
    if (lastClickedOperator === '=') {
        clearScreen();
    }
    screenText += value;
    updateScreen();
}

function updateScreen() {
    if(screenText.length < 26)
        screen.textContent = screenText;
}

function clearScreen() {
    screenText = '';
    updateScreen();
}