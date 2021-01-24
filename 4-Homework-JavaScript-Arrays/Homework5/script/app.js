let exArray = [6, 23, 8, 44, 11, 28, 40, 34, 37, 10];

function sumMaxMin(array) {
  let n = array.length - 1;
  array.sort(function (a, b) {
    return a - b;
  });
  return array[0] + array[n];
}

console.log(sumMaxMin(exArray));
