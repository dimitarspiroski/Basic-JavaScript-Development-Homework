function Animal(name, kind, speak) {
  this.name = function () {
    name = prompt("Please enter the name of the animal:");
  };
  this.kind = function () {
    kind = prompt("Please enter the type of the animal:");
  };
  this.speak = function () {
    speak = prompt();
    console.log(`${name}, the ${kind} says: ${speak}`);
  };
}

let animal = new Animal();

animal.name(prompt);
animal.kind(prompt);
animal.speak(prompt);
