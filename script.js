//import { calculate } from './calculator.js';

// TODO: Faire la manipulation du DOM dans ce fich

// seclect elements 
const inputButton = document.getElementById('input');
const calcul = document.getElementById('calcul');

const digits = document.getElementsByClassName('digit');
const theOperator = document.querySelectorAll('#minus, #times, #divideby, #plus');

const clearButton = document.getElementById('clear');
const resetButton = document.getElementById('reset');

const numpadDot = document.getElementsByClassName('numpad dot');
const plusoumoins = document.getElementById('plusoumoins');

// add style
calcul.style.maxWidth = "400px"
calcul.style.maxHeight = "auto"
calcul.style.margin = "auto"
console.log(calcul.style);  

// change event types
let newtheOperator = [];
for (let i = 0; i < theOperator.length; i++) {
    const element = theOperator[i];
    element.type = "button";
    newtheOperator.push(element);
}


// event function
function myDigit() {
    inputButton.value += this.innerText;
}

function toLabel() {
    calcul.innerText += ' ' + inputButton.value + ' ' + this.innerText;
    inputButton.value = "";
    inputButton.name = "";
}

function clickZero() {
    if (inputButton.value === "") {
        inputButton.value = "";
    }else{
        inputButton.value += this.innerText;
    }
}

function changeSign() {
    let valeur = Array.from(inputButton.value);
   
    if (!inputButton.value) {
        inputButton.value;
    }else if (inputButton.value && valeur.at(0)!=="-"){
        valeur.unshift("-");
        inputButton.value =(valeur.join(""));
    }else if (inputButton.value && valeur.at(0)==="-"){
        valeur.shift();
        inputButton.value=(valeur.join("")) ;
    }else{
        inputButton.value;
    }
}

function reset() {
    calcul.innerText = "";
    inputButton.value = "";
}

function clearInput() {
    inputButton.value = "";
}

//add events

for (let index = 0; index < digits.length; index++) {
    const element = digits[index];
    if (element.innerText === "0") {
        element.addEventListener('click', clickZero);
    }else{
        element.addEventListener('click', myDigit)
    }
}

for (let i = 0; i < theOperator.length; i++) {
    const element = theOperator[i];
    element.addEventListener('click', toLabel);
}

clearButton.addEventListener('click',clearInput);
resetButton.addEventListener('click', reset); 
plusoumoins.addEventListener('click', changeSign);