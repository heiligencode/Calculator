console.log ('Hello World! \nThis is my first JS code');

let a = ''; //first number
let b = ''; //second number
let sign = ''; //signal of operation
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', 'X', '/'];

const out = document.querySelector('.display__text p'); //screen

function clearAll () {
    a = ''; //first number
    b = ''; //second number
    sign = ''; //signal of operation
    finish = false;
    console.log (a, sign, b);
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll; //clear of screen

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';

    const key = event.target.textContent;
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a = a + key;
            console.log (a, sign, b);
            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            console.log (a, sign, b);
            out.textContent = b;
        }
        else {
            b = b + key;
            console.log (a, sign, b);
            out.textContent = b;
        }
    }
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log (a, sign, b);
        return;
    }
    if (key === '=') {
        if (b === '') {
            b = a;
        }
        switch(sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'X':
                a = a * b;
                break;
            case '/':
                if (b === '0'){
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
            }
        finish = true;
        out.textContent = a;
        console.log (a, sign, b);
        }
}
