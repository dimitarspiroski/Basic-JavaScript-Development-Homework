let input = prompt(`Please enter a year: `);
let year = parseInt(input);
let chineseZodiac = (year - 4) % 12;

if (chineseZodiac === 0) {
  console.log(`Rat`);
} else if (chineseZodiac === 1) {
  console.log(`Ox`);
} else if (chineseZodiac === 2) {
  console.log(`Tiger`);
} else if (chineseZodiac === 3) {
  console.log(`Rabbit`);
} else if (chineseZodiac === 4) {
  console.log(`Dragon`);
} else if (chineseZodiac === 5) {
  console.log(`Snake`);
} else if (chineseZodiac === 6) {
  console.log(`Horse`);
} else if (chineseZodiac === 7) {
  console.log(`Goat`);
} else if (chineseZodiac === 8) {
  console.log(`Monkey`);
} else if (chineseZodiac === 9) {
  console.log(`Rooster`);
} else if (chineseZodiac === 10) {
  console.log(`Dog`);
} else if (chineseZodiac === 11) {
  console.log(`Pig`);
} else {
  console.log(`Error!`);
}
