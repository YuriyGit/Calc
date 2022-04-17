const calc = document.querySelector('.wrapper_calc'),
    display = document.getElementById('display');

let operand_1 = '',
    operand_2 = '',
    operator = '',
    result = '';


//////////
calc.addEventListener('click', (e) => {
    let a = e.target;
    if (a.classList.contains('num')) {
        display.value += a.innerHTML
        console.log(display.value)
    } else if (a.classList.contains('operation')) {
        operator = a.innerHTML;
        operand_1 = display.value;
        display.value = '';
        console.log(operand_1, '"operand_1"', operator, '"operator"');
    } else if (a.id === 'calculation') {
        calculation(operator)
    } else if (a.id === 'all_clear') {
        clearAll();
    }
})

///////////
function calculation(operator) {
    operand_2 = display.value;
    switch (operator) {
        case '+':
            result = +operand_1 + +operand_2;
            break;
        case '-':
            result = +operand_1 - +operand_2;
            break;
        case '*':
            result = +operand_1 * +operand_2;
            break;
        case '÷':
            result = +operand_1 / +operand_2;
            break;
    }
    display.value = result;
    console.log(result);
}

///////////
function clearAll() {
    operand_1 = '';
    operand_2 = '';
    operator = '';
    result = '';
    display.value = '';
}


