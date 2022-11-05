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







//
let firstDigit;
let secondDigit;
let operationToPerform;




const storeOperation = function (){
    firstDigit = display.innerText
    display.innerText += this.innerText
    operationToPerform = this.innerText

    if(operationToPerform !='' && secondDigit !=''){
    display.innerText = operate(firstDigit, secondDigit, operationToPerform)
    firstDigit = display.innerText
    }
    
    console.log(operationToPerform)

};



const display = document.getElementById('display');
const clear = document.getElementById('clear');

clear.addEventListener('click', clearDisplay);

function clearDisplay() {
    display.innerText = 0;
    firstDigit = 0;
    secondDigit = 0;
    operationToPerform = '';
};




const digits = document.querySelectorAll('.digit');
digits.forEach(digits=>digits.addEventListener('click', print));

const operands = document.querySelectorAll('.operand');
operands.forEach(operand=>operand.addEventListener('click', storeOperation));

const equal = document.querySelector('.equal');

equal.addEventListener('click', ()=>{
    let secondDigitIndex = display.innerText.indexOf(operationToPerform);
    secondDigit = display.innerText.substring(secondDigitIndex+1)
    console.log(firstDigit)
    display.innerText = operate(firstDigit, secondDigit, operationToPerform)
    firstDigit = display.innerText
});


function print() {
    display.innerText += this.innerText;
    console.log(this.innerText)
};



//when i type the second operand a few things have to happen

//check if there is already an operand
//if yes, call operate function passing the first, second, operand values 
//update the first digit value with the result from last step
//(on the display as well), replace the operand with the new value,
//wait for the second digit.