// ------------------- Basic functions -------------//

function add(a, b) {
    return Number(a) + Number(b)
}
function sub(a, b) {
    return +a - +b
}
function div(a, b) {
    return +a / +b
}
function mult(a, b) {
    return +a * +b
}

// -------------------- Handle operations ------------ //

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b)
            break;
        case '-':
            return sub(a, b)
            break;
        case '/':
            return div(a, b)
            break;
        case '*':
            return mult(a, b)
            break;
        default:
            return 0
            break;
    }
}

// ----------------- Handle Display ----------------- //

const keys = document.querySelector('.keys')

keys.addEventListener('click', clicKey)

let displayValue = ""

function updateDisplay() {
    const display = document.querySelector('.display')
    display.value = displayValue
  }

const operators = ['-', '+', '/', '*']

function clear() {
    displayValue = ""
    updateDisplay()
}

function getOperator(str) {
    for (const char of str) {
        if (operators.includes(char)) return char
    }
}

function getNums(str, operator) {
    return str.split(operator)
}

function input(val) {
    switch (val) {
        case 'C':
            clear()
            break;
        case '=':
            const operator = getOperator(displayValue)
            console.log(operator);
            
            const [firstNum, secondNum] = getNums(displayValue, operator)
            console.log(firstNum);
            console.log(secondNum);
            
            
            const result = operate(operator, firstNum, secondNum)
            console.log(result);
            
            displayValue = result
            updateDisplay()
            break;
        default:
            displayValue += val
            updateDisplay()
            break;
    }
}

function clicKey(event) {
    let target = event.target
    input(target.innerText)
    
}

