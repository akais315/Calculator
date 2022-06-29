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
    let result = "ERROR"
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
            console.log("Wrong operator");
    }
    return result;
}

function display(value){
    res = document.querySelector(".result");
    res.innerHTML = value;
}

function clear(){
    displayValue = "";
    number1 = "";
    number2 = "";
    operator = null;
    display(displayValue);
}

function getNumber(e){
    if(operator === null){
        number1 += e.target.id;
        displayValue = number1
        display(displayValue);
    }else{
        number2 = e.target.id;
    }
}

let number1 = "";
let operator = null;
let number2 = "";
let displayValue = "";

let cl = document.querySelector(".clear");
cl.addEventListener('click', clear);
let digit = document.querySelectorAll(".digit");
digit.forEach(num => {num.addEventListener('click', getNumber);})