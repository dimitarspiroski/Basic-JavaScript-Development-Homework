let input = prompt(`Enter the amount you want to withdraw: `);
let personalAmount = 10000;

function withdrawal(input) {
  let withdraw = parseInt(input);
  if (withdraw <= personalAmount) {
    console.log(
      `Amount of money withdrawn: ${withdraw}, Amount of money left on your account: ${
        personalAmount - withdraw
      }`
    );
  } else {
    console.log(`Not enough money on your account.`);
  }
}
withdrawal(input);
