//methods for basic math operations.

//addition:
let add = (a, b) => a + b;

//subtraction
let subtract = (a, b) => a - b;

//division
let divide = (a, b) => a / b;

//multiple
let multiple = (a, b) => a * b;


let entry = prompt("Enter an expression")

//expression function
function expression(eval) {
    let a = parseInt(eval[0]);
    let b = parseInt(eval[2]);
    let operator = eval[1];
    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return subtract(a, b);
    } else if (operator == "/") {
        return divide(a, b);
    } else if (operator == "*") {
        return multiple(a, b);
    }
}

console.log(expression(entry));

