var a = null;
var b = null;
var result = null;
var oper = null;
var temp = '';

function setOperand(value) {
    if (result === null) {
        if (a === null) {
            a = parseInt(value);
        } else if (b == null){
            b = parseInt(value);
        }    
    } else {
        a = result;
        b = parseInt(value);
    }
}

function setOperator(op) {
    oper = op;
}

function getResult() {
    if (oper === '+') {
        result = a + b;
    } else if (oper === '-') {
        result = a - b;
    } else if (oper === '*') {
        result = a * b;
    } else if (oper === '/') {
        result = a / b;
    }
    a = null;
    b = null;
    return result.toString();
}

function calcKeyPressed(key) {
    var displayValue = '0';
    if (key === '=') {
        if (temp !== '') {
            setOperand(temp);
        }
        if (a !== null && b !== null) {
            displayValue = getResult();
        }
        temp = '';
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        if (temp !== '') {
            setOperand(temp);
        }
        if (a !== null && b !== null) {
            displayValue = getResult();
        }
        setOperator(key);
        temp = '';
    } else if (key === 'C') {
        a = null;
        b = null;
        result = null;
        oper = null;
        temp = '';
        displayValue = '0';
    } else {
        temp = temp + key;
        displayValue = temp;
    }
    var display = document.getElementById('display');
    display.value = displayValue;

    console.log('----------------------');
    console.log('temp', temp);
    console.log('a', a);
    console.log('oper', oper);
    console.log('b', b);
    console.log('result', result);
}