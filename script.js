//operand functions

const add = function(a, b) {
    return a + b;
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

// const operate = function(a, b, operation){
//     return a operation b
// }

const display = document.getElementById('display');


const digits = document.querySelectorAll('.digit');
digits.forEach(digits=>digits.addEventListener('click', print))



function print() {
    console.log(this.innerText)
}