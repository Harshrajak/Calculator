let buttons = document.querySelectorAll('.button');
let input = document.querySelector('input');
let inputString = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=') inputString = eval(inputString);
        else if(e.target.innerHTML == 'AC') inputString = "";
        else if(e.target.innerHTML == 'DEL') inputString = inputString.substring(0, inputString.length-1);
        else inputString += e.target.innerHTML;
        if(inputString == '0') inputString = "";
        input.value = inputString;
    });
});