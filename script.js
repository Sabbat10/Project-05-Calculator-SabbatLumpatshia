//import { calculate } from './calculator.js';

// TODO: Faire la manipulation du DOM dans ce fich

// seclect elements 
// Sélectionner tous les boutons numériques et leur ajouter un écouteur d'événement
const digitButtons = document.querySelectorAll(".numpad.digit");
digitButtons.forEach((button) => {
  button.addEventListener("click", myDigit);
});

// Sélectionner tous les boutons d'opérateur et leur ajouter un écouteur d'événement
const operatorButtons = document.querySelectorAll("#plus, #minus, #times, #divideby");
operatorButtons.forEach((button) => {
  button.addEventListener("click", toLabel);
});

// Sélectionner le bouton "C" (clear) et lui ajouter un écouteur d'événement
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearInput);

// Sélectionner le bouton "AC" (reset) et lui ajouter un écouteur d'événement
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset);

// Sélectionner le bouton "+/-" (changeSign) et lui ajouter un écouteur d'événement
const plusoumoins = document.getElementById("plusoumoins");
plusoumoins.addEventListener('click', changeSign);

function clickZero() {
    const input = document.getElementById("input");
    input.value += "0";
}

function myDigit(event) {
    const digit = event.target.innerText;
    const input = document.getElementById("input");
    input.value += digit;
}

function toLabel(event) {
    const operator = event.target.innerText;
    const input = document.getElementById("input");
    
    // Vérifier si un opérateur existe déjà dans l'entrée utilisateur
    if (!/[+\-*/]$/.test(input.value)) { 
        // Ajouter seulement si aucun opérateur n'est déjà présent
        input.value += ` ${operator} `;
    }
}

function clearInput() {
    const input = document.getElementById("input");
    input.value = "";
}

function reset() {
    const input = document.getElementById("input");
    const calculationParagraph = document.getElementById("calcul");
  
    input.value = "";
    
    // Remplacer le texte du paragraphe de calcul avec un texte vide
    calculationParagraph.innerText = "";
}

function changeSign() {
    const input = document.getElementById("input");
    if (parseFloat(input.value) !==0) { 
      // Vérifier que l'entrée n'est pas déjà zéro pour éviter les erreurs d'exécution.
      input.value = parseFloat(input.value) * -1;
    }
}