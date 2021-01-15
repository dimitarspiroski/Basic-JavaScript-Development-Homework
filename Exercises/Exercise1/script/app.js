// FIND NUMBERS IN ARRAY

// function findNumber(number, array) {
//     let occurrences = 0;
//     for (let n of array) {
//         if(n === number) {
//             occurrences++;
//         }
//     }

//     return occurrences;
// }

// let input = parseInt(prompt('Please enter a number:'));
// let numbers = [1, 5, 7, 9, 4, 5, 3, 5, 9, 0, 2, 5];

// console.log(findNumber(input, numbers))

// FILTER ODD/EVEN NUMBERS FUNCTION

// function filterOddEven(array, type) {
//     let result = []

//     if (type === 'even') {
//         for (let number of array) {
//             if (number % 2 === 0) {
//                 result.push(number);
//             }
//         }
//     } else if (type === 'odd'){
//         for (let number of array) {
//             if (number % 2 !== 0) {
//                 result.push(number);
//             }
//         }
//     } else {
//         return null;
//     }

//     return result;
// }

// let input = prompt(`Please enter an odd or an even number:`)
// let numbers = [1, 5, 7, 9, 4, 5, 3, 5, 9, 0, 2, 5];

// console.log(filterOddEven(numbers, input));

// Filter an array
// You have a list of 10 countries. Filter only the countries containing the letter "A" in the name.

// let countriesList = [
//   "Albania",
//   "Brazil",
//   "Brunei",
//   "Chile",
//   "Colombia",
//   "Fiji",
//   "Greece",
//   "Macedonia",
//   "Peru",
//   "Serbia",
// ];

// function filterCountries(countries, letter) {
//   let filteredCountries = [];

//   for (let country of countries) {
//     for (let char of country) {
//       if (char.toLowerCase() === letter.toLowerCase()) {
//         filteredCountries.push(country);
//         break;
//       }
//     }
//   }

//   return filteredCountries;
// }

// let input = prompt("Please enter a letter");

// console.log(filterCountries(countriesList, input));

// SORT NUMBERS ARRAY

let unsortedNumbers = [65, 10, 9, 12, 24, 3, 95, 56, 5];

function sortNumbers(numbers) {
    let sortedNumbers = numbers;
    let done = false;
    while (!done) {
        done = true;
        for (let i = 0; i < sortedNumbers.length; i++) {
            if (sortedNumbers[i - 1] > sortedNumbers[i]) {
                done = false;
                let temp = numbers[i-1];
                sortedNumbers[i - 1] = sortedNumbers[i];
                sortedNumbers[i] = temp;
            }
        }
    }

    return sortedNumbers;
}

console.log(sortNumbers(unsortedNumbers));