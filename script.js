function add(...args){
    let result = 0;
    for(const arg of args){
        result += Number(arg);
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
            finalResult = add(num1, num2);
            break;
        case "-":
            finalResult = substract(num1, num2);
            break;
        case "*":
            finalResult = multiply(num1, num2);
            break;
        case "/":
            finalResult = divide(num1, num2);
            break
        default:
            finalResult = "ERROR";
    }
    display(finalResult);
    resetValues();
    number2 = 0;
}

function display(value){
    res = document.querySelector(".result");
    res.innerHTML = parseFloat(Number(value).toFixed(9));
}

function resetValues(){
    displayValue = 0;
    number1 = "";
    number2 = "";
    operator = null;
    allowPoint = true;
}

function clear(){
    resetValues();
    display(displayValue);
}

function getNumber(e){
    let digit = e.target.id;
    if(digit !== "." || (digit === "." && allowPoint === true)){
        if(digit === "."){ allowPoint = false};
        if(operator === null){
            if(number1 === 0){
                number1 = digit;
            }else{
                number1 += digit;
            }
            displayValue = number1
            display(displayValue);
        }else{
            if(number2 === 0){
                number2 += digit;
            }else{
                number2 += digit;
            }
            displayValue = number2;
            display(displayValue);
        }
    }
}

function getOperator(e){
    if(number2 === ""){
        operator = e.target.id;
    }else if(number2 === 0){
        number1 = finalResult;
        operator = e.target.id;
    }else{
        operate(operator, number1, number2);
        number1 = finalResult;
        operator = e.target.id;
    }
    allowPoint = true;
}

let number1 = "";
let operator = null;
let number2 = "";
let displayValue = 0;
let finalResult = 0;
let allowPoint = true;

let cl = document.querySelector(".clear");
cl.addEventListener('click', clear);

let digit = document.querySelectorAll(".digit");
digit.forEach(num => {num.addEventListener('click', getNumber);});

let ops = document.querySelectorAll('.operator');
ops.forEach(operator => {operator.addEventListener('click', getOperator);});

let equal = document.querySelector(".equal");
equal.addEventListener('click', function() {operate(operator, number1, number2);});

function getKeyboardInput(e){
    if(e.key === "=" || e.key === "Enter"){
        document.getElementById('equal').click();
    }else if(e.key === "Delete"){
        document.getElementById('clear').click();
    }
    let keys = document.querySelectorAll("button");
    for(key of keys){
        if(e.key === key.id){
            document.getElementById(key.id).click();
        }
    }
}

window.addEventListener('keydown', getKeyboardInput);

display(displayValue);