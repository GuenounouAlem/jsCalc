// ------------------- Basic functions -------------//

function add(a, b) {
    return +a + +b
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

