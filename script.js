function add(...args){
    let result = 0;
    for(const arg of args){
        result += arg;
    }
    return result;
}

function substract(num, ...args){
    let result = num;
    for(const arg of args){
        result -= arg;
    }
    return result;
}

function multiply(num, ...args){
    let result = num;
    for(const arg of args){
        result *= arg;
    }
    return result;
}

function divide(num, ...args){
    let result = num;
    for(const arg of args){
        result /= arg;
    }
    return result;
}

function operate(operator, num1, num2){
    switch(operator){
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = substract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break
        default:
            result = "ERROR";
    }
    display(result);
    resetValues();
}

function display(value){
    res = document.querySelector(".result");
    res.innerHTML = value;
}

function resetValues(){
    displayValue = "";
    number1 = "";
    number2 = "";
    operator = null;
}

function clear(){
    resetValues();
    display(displayValue);
}

function getNumber(e){
    if(operator === null){
        number1 += e.target.id;
        displayValue = number1
        display(displayValue);
    }else{
        number2 += e.target.id;
        displayValue = number2;
        display(displayValue);
    }
}

function getOperator(e){
    if(number2 === ""){
        operator = e.target.id;
    }
}

let number1 = "";
let operator = null;
let number2 = "";
let displayValue = "";

let cl = document.querySelector(".clear");
cl.addEventListener('click', clear);

let digit = document.querySelectorAll(".digit");
digit.forEach(num => {num.addEventListener('click', getNumber);});

let ops = document.querySelectorAll('.operator');
ops.forEach(operator => {operator.addEventListener('click', getOperator);});

let equal = document.querySelector(".equal");
equal.addEventListener('click', function() {operate(operator, number1, number2);});