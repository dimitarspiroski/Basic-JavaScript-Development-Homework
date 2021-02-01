let newArray = [];
function createArray(array) {
  for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0 && i % 3 === 0) {
      array.push(i);
    }
  }
  return array;
}

console.log(createArray(newArray));
