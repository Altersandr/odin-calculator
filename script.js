//operand functions

const add = function(a, b) {
    return parseFloat(a) + parseFloat(b);
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
let storedValue = '';

const storeOperation = function (){
    dot.disabled = false;
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
display.style.color = 'gray';
const clear = document.getElementById('clear');

clear.addEventListener('click', clearDisplay);

function clearDisplay() {
    display.innerText = 0;
    display.style.color = 'gray';
    firstDigit = '';
    secondDigit = '';
    operationToPerform = '';
    storedValue = '';
};

function eraser(){
    display.innerText = display.innerText.slice(0, -1)
    storedValue = storedValue.slice(0, -1)
}

const erase = document.getElementById('CE');
erase.addEventListener('click',eraser)

const digits = document.querySelectorAll('.digit');

digits.forEach(digits=>digits.addEventListener('click', print));

const dot = document.getElementById('dot');
dot.addEventListener('click', print)

const operands = document.querySelectorAll('.operand');
operands.forEach(operand=>operand.addEventListener('click', storeOperation));

const equal = document.querySelector('.equal');

function equality(){
    secondDigit = storedValue
    display.innerText = Math.round(operate(firstDigit, secondDigit, operationToPerform)*100)/100;
    if(display.innerText === "Infinity"){
        display.innerText = "Nice try"
    }
    parseFloat(display.innerText).toFixed(2)
    equalize()

}

equal.addEventListener('click', equality);

function print() {   
    display.style.color = '#001e33';
    storedValue += this.innerText;
    if(storedValue.includes('.')){
        dot.disabled = true
    }
    if(display.innerText == '0' && this.innerText != '.'){
        display.innerText = this.innerText; 
    }else{
    display.innerText += this.innerText;
    }
};

function equalize(){
    firstDigit = display.innerText;
    operationToPerform = '';
    storedValue = firstDigit;
    secondDigit = '';

}

window.addEventListener('keydown', function (e){
   if(e.key ==='Escape'){
    clearDisplay()
   }else if(e.key ==='Backspace'){
    eraser()
   }else if(e.key === 'Enter'){
    equality()
   }
   else if(e.key === '/' ||e.key === '*' ||e.key === '-' ||e.key === '+'){
    dot.disabled = false;
    if(storedValue.includes(e.key)){
        return
    }
        if(firstDigit!='' && operationToPerform!=''){
            secondDigit = storedValue;
            storedValue = '';
            firstDigit = Math.round(operate(firstDigit, secondDigit, operationToPerform)*100)/100;
            operationToPerform = event.key;
            display.innerText += operationToPerform;

            }else{
                firstDigit = storedValue;
                storedValue = '';
                operationToPerform = event.key;
                display.innerText += operationToPerform;
                }
                }
    else if(e.key ==='0' ||e.key ==='1' || e.key ==='2' || e.key ==='3' || e.key ==='4' ||
    e.key ==='5' || e.key ==='6' || e.key ==='7' || e.key ==='8' || e.key ==='9' || e.key ==='.'){
        if(e.key ==='.' && storedValue.includes('.')){
            return
        }
        display.style.color = '#001e33';
        storedValue += e.key;
        if(display.innerText == '0' && event.key != '.'){
            display.innerText = event.key; 
    }else{
        display.innerText += event.key;
        }
   }else{
    return
   }
})