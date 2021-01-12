let array = [2, 5, 7, 10, 20];

function sum(array) {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += Number(array[i]);
    }
    return total;
}



console.log(sum(array));
