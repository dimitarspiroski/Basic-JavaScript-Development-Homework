let exArray = [0, 2, 5, 4, 6, 8];
let string = `${exArray[0]}`;
function dashingNum(array) {
  for (let n = 1; n < array.length; n++) {
    if (array[n - 1] % 2 === 0 && array[n] % 2 === 0) {
      string += `-` + array[n];
    } else {
      string += array[n];
    }
  }
  console.log(string);
}

dashingNum(exArray);
