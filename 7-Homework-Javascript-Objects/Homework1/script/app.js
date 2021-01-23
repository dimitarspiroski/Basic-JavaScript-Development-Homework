let dog = {
  name: "Kaia",
  kind: "Akita Inu",
  speak: function (speak) {
    speak = prompt();
    console.log(`The dog says: ${speak}`);
  },
};

dog.speak(prompt);
