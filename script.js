var operators = ['+', '-', '*', '/'];
var formule_el = document.getElementById("formule");
var result_el = document.getElementById("result");

function click_touch(value) {
    if (result_el.textContent.length > 0) {
        formule_el.value = "";

        if (operators.indexOf(value) !== -1) {

            formule_el.value = result_el.textContent;
        }

        result_el.textContent = "";
    }

    formule_el.value += value;
}

function egal() {
    var expression = formule_el.value;
    if (operators.indexOf(expression.charAt(expression.length - 1)) !== -1) {
        formule_el.value = expression.substring(0, expression.length - 1);
    }
    
    switch (true) {
        case expression.includes('+'):
            result_el.textContent = addition(expression);
            break;
        case expression.includes('-'):
            result_el.textContent = soustraction(expression);
            break;
        case expression.includes('*'):
            result_el.textContent = multiplication(expression);
            break;
        case expression.includes('/'):
            result_el.textContent = division(expression);
            break;
        default:
            result_el.textContent = "Erreur";
            break;
    }
}

function erase() {
    formule_el.value = "";
    result_el.textContent = "";
}0 

function addition(expression) {
    var numbers = expression.split('+');
    return parseFloat(numbers[0]) + parseFloat(numbers[1]);
}

function soustraction(expression) {
    var numbers = expression.split('-');
    return parseFloat(numbers[0]) - parseFloat(numbers[1]);
}

function multiplication(expression) {
    var numbers = expression.split('*');
    return parseFloat(numbers[0]) * parseFloat(numbers[1]);
}

function division(expression) {
    var numbers = expression.split('/');
    return parseFloat(numbers[0]) / parseFloat(numbers[1]);
}

function click_touch(value) {
    if (result_el.textContent.length > 0) {
        formule_el.value = "";

        if (operators.indexOf(value) !== -1) {
            formule_el.value = result_el.textContent;
        }

        result_el.textContent = "";
    }

    if (value === '.' && formule_el.value.includes('.')) {
        return;
    }

    formule_el.value += value;
}
