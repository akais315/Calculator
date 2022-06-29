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
}

function clear(){
    resetValues();
    display(displayValue);
}

function getNumber(e){
    if(operator === null){
        if(number1 === 0){
            number1 = e.target.id;
        }else{
            number1 += e.target.id;
        }
        displayValue = number1
        display(displayValue);
    }else{
        if(number2 === 0){
            number2 += e.target.id;
        }else{
            number2 += e.target.id;
        }
        displayValue = number2;
        display(displayValue);
    }
}

function getOperator(e){
    if(number2 === ""){
        operator = e.target.id;
    }else if(number2 === 0){
        number1 = finalResult;
        console.log(number1);
        operator = e.target.id;
    }else{
        operate(operator, number1, number2);
        number1 = finalResult;
        console.log(number1);
        operator = e.target.id;
    }
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