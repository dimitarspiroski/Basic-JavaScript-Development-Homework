let firstNames = ["Dimitar", "Ivo", "Ivan"];
let lastNames = ["Spiroski", "Kostovski", "Lazarevski"];

function fullNames(arrayOne, arrayTwo) {
    let fullName = [];
    for (let n = 0; n < arrayOne.length; n++) {
        fullName.push(arrayOne[n] + " " + arrayTwo[n]);
    }
    console.log(fullName);
}

fullNames(firstNames, lastNames);