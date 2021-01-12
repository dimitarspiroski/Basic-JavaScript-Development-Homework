let input = prompt(`Enter the age of the human: `);
let humanAge = parseInt(input);
let dogAge;

function dog(dogAge, humanAge) {
    dogAge = humanAge * 7;
    return dogAge;
}

console.log("The age of the dog is: ",dog(dogAge, humanAge))

humanAge = dog(dogAge, humanAge) / 7;

console.log("The age of the human is:",humanAge);