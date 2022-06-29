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

function getNumber1(e){
    number1 = e.target.id;
    result = number1
    displayResult(result);
}

function displayResult(result){
    res = document.querySelector(".result");
    res.innerHTML = result
}

let number1 = null;
let operator = null;
let number2 = null;
let result = null;
let digit = document.querySelectorAll(".digit");
digit.forEach(num => {num.addEventListener('click', getNumber1);})