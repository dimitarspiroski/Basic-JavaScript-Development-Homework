let numbersArray = [2, 5, 7, 10, 20];
let numbersArray2 = [10, 25, "East", 50, 75];
function sum(numbersArray) {
  let total = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    total += Number(numbersArray[i]);
  }
  return total;
}

function validateNumber(numbersArray2) {
  for (let num of numbersArray2) {
    if (!Number.isNaN(num)) {
      console.log(`Array #2 is invalid`);
      return `Array #2 is invalid`;
    }
  }
}

console.log(sum(numbersArray));
validateNumber(numbersArray2);
