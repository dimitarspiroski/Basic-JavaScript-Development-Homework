let numbersArrayDiv = document.querySelector("#numbersArray");
let sumNumbersDiv = document.querySelector("#sumNumbers");
let mathEquationDiv = document.querySelector("#bonus");

let numbersArray = [6, 25, 4, 5];

function printList(array) {
  numbersArrayDiv.innerHTML = "";
  numbersArrayDiv.innerHTML += "<ul>";
  for (let i = 0; i < array.length; i++) {
    numbersArrayDiv.innerHTML += `<li>${array[i]}</li>`;
  }
  numbersArrayDiv.innerHTML += "</ul>";
}

function sumNumbers(array) {
  let sum = array.reduce(function (a, b) {
    return a + b;
  }, 0);
  sumNumbersDiv.innerHTML = "";
  sumNumbersDiv.innerHTML += `<p>The sum is: ${sum}</p>`;
  return sum;
}

function mathEquation(array) {
  // let arrayString = [];
  mathEquationDiv.innerHTML = "";
  mathEquationDiv.innerHTML += "<p>";
  mathEquationDiv.innerHTML += array.join("+") + `=${sumNumbers(array)}`;
  mathEquationDiv.innerHTML += "</p>";
}

printList(numbersArray);
sumNumbers(numbersArray);
mathEquation(numbersArray);
