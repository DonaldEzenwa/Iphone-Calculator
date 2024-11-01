let screen = document.getElementById('screen');

function clearScreen() {
    screen.innerHTML = '';
}

function changeSign() {
// if(screen.innerHTML){
//     screen.innerHTML = screen.innerHTML.charAt(0)==='-'? screen.innerHTML.slice(1) : '-' + screen.innerHTML;
// }
if(screen.innerHTML.charAt(0) === '-'){
    screen.innerHTML = screen.innerHTML.slice(1);
}
else{
    screen.innerHTML = '-' + screen.innerHTML;
}
}

function appendNumber(number) {
    screen.innerHTML += number;
}

function appendOperator(operator) {
    screen.innerHTML = screen.innerHTML + operator;
}

function delectNumber() {
    screen.innerHTML = screen.innerHTML.slice(0, -1);
}

function calculate() {
    try {
        screen.innerHTML = eval(screen.innerHTML);  
    } catch {
        screen.innerHTML = 'Error'
    }
}

function percent() {
    screen.innerHTML =  eval(screen.innerHTML) / 100;
    // appendOperator('%');
}