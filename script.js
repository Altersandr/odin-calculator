//operand functions

const add = function(a, b) {
    return parseInt(a) + parseInt(b);
};

const subtract = function(a, b) {
    return a - b;
};


const divide = function(a, b) {
    return a / b;
};

const multiply = function(a, b) {
    return a * b;
};

const operate = function(a, b, operation){
    if(operation=='-'){
        return subtract(a,b)
    }else if(operation=='+'){
        return add(a,b)
    }else if(operation=='/'){
        return divide(a,b);
    }else return multiply(a,b)
};


let firstDigit = '';
let secondDigit = '';
let operationToPerform = '';


const storeOperation = function (){
    if(firstDigit!='' && operationToPerform!=''){
        secondDigit = storedValue;
        storedValue = '';
        firstDigit = Math.round(operate(firstDigit, secondDigit, operationToPerform)*100)/100;
        operationToPerform = this.innerText;
        display.innerText += operationToPerform;

    }else{
    firstDigit = storedValue;
    storedValue = '';
    operationToPerform = this.innerText;
    display.innerText += operationToPerform;
    }
};


const display = document.getElementById('displayValue');
const clear = document.getElementById('clear');

clear.addEventListener('click', clearDisplay);

function clearDisplay() {
    display.innerText = 0;
    firstDigit = '';
    secondDigit = '';
    operationToPerform = '';
    storedValue = '';
};



const erase = document.getElementById('CE');
erase.addEventListener('click',()=>{
    display.innerText = display.innerText.slice(0, -1)
    storedValue = storedValue.slice(0, -1)

})

const digits = document.querySelectorAll('.digit');

digits.forEach(digits=>digits.addEventListener('click', print));


const operands = document.querySelectorAll('.operand');
operands.forEach(operand=>operand.addEventListener('click', storeOperation));

const equal = document.querySelector('.equal');

equal.addEventListener('click', ()=>{
    secondDigit = storedValue
    display.innerText = Math.round(operate(firstDigit, secondDigit, operationToPerform)*100)/100;
    equalize()
});


let storedValue = '';

function print() {
    
    storedValue += this.innerText;
    display.innerText += this.innerText;
};

function equalize(){
    firstDigit = display.innerText;
    operationToPerform = '';
    storedValue = firstDigit;
    secondDigit = '';

}
