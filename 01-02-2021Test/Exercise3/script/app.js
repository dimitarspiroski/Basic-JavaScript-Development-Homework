let coins = [50, 20, 10, 5, 1];
let input = prompt("Insert a coin:");

function changeCalculator(number) {
  let result = [];
  for (let coin of coins) {
    if (number % coin === 0) {
      for (let i = 0; i < number / coin; i++) {
        result.push(coin);
      }
      break;
    } else {
      for (let n = 0; n < (number - (number % coin)) / coin; n++) {
        result.push(coin);
      }
      number = number % coin;
    }
  }
  return result;
}

console.log(changeCalculator(input));
