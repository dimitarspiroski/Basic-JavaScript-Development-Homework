let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
parseInt(myArray);

function writeNum(array) {
    for (let num of myArray) {
        console.log(num);
        if (num % 2 === 0) {
            console.log("\n");
        }
    }
}
writeNum(myArray);