let exArray = [0, 2, 5, 4, 6, 8];
function dashingNum(array) {
  let string = "";
  for (let n = 0; n < array.length; n++) {
    if (array[n] % 2 === 0 && array[n + 1] % 2 === 0) {
      string += array[n] + `-`;
    } else {
      string += array[n];
    }
  }
  console.log(string);
}

dashingNum(exArray);
