let recipeHeader = document.querySelector("#recipeHeaderDiv")
let ingredientsNum = document.querySelector("#ingredientsNumDiv")
let ingredientsList = document.querySelector("#ingredientsListDiv")

let recipeName = prompt(`What's the name of the recipe?`)
let numOfIngredients = parseInt(prompt(`Please enter the number of ingredients: `))

function printHeader(input) {
    input.innerHTML = "";
    input.innerHTML += `<h1>Recipe Name: ${recipeName}</h1>`;
}

function printNumOfIngredients(input) {
    input.innerHTML = "";
    input.innerHTML += `<h2>Number of Ingredients: ${numOfIngredients}</h2>`;
}

function printListOfIngredients(input) {
    input.innerHTML = "";
    input.innerHTML += `<ul>`;
    for(i = 0; i < numOfIngredients; i++){
        let ingredient = prompt(`Input Ingredient: `)
        input.innerHTML += `<li>${ingredient}</li>`
    }
    input.innerHTML += `</ul>`;
}

printHeader(recipeHeader);
printNumOfIngredients(ingredientsNum);
printListOfIngredients(ingredientsList);