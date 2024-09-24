// ------------------- Basic functions -------------//

function add(a, b) {
    return Number(a) + Number(b)
}
function sub(a, b) {
    return +a - +b
}
function div(a, b) {
    if (+b === 0) {
        alert("Bro you divide by zero it's impossible or infinite i forgot anywhos do something else !")
        return clear()
    }
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

let firstNum = 0
let operator = ''

function updateDisplay(op) {
    const display = document.querySelector('.display')
    if ( operators.includes(op)) {
        firstNum = displayValue
        displayValue = ''
        display.value = displayValue
        return
    }
    display.value = displayValue
  }

const operators = ['-', '+', '/', '*']

function clear() {
    displayValue = ""
    firstNum = ""
    operator = ""
    updateDisplay()
}

function input(val) {
    switch (val) {
        case 'C':
            clear()
            break;
        case '=':
            const result = operate(operator, firstNum, displayValue)
            displayValue = result
            if (result === undefined) {
                clear()
                break
            }
            updateDisplay()
            break;
        case '+':
            operator = '+'
            updateDisplay('+')
            break;
        case '-':
            operator = '-'
            updateDisplay('-')
            break;
        case '/':
            operator = '/'
            updateDisplay('/')
            break;
        case '*':
            operator = '*'
            updateDisplay('*')
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

