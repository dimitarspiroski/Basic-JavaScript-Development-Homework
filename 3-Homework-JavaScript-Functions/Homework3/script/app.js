let input = prompt(`Enter the amount you want to withdraw: `);
let atmAmount = 30000;
let personalAmount = 45000;
let withdraw = parseInt(input);
function withdrawal(personalAmount, withdraw) {
    personalAmount -= withdraw;
    }
if(withdraw <= atmAmount) {
    function withdrawal(personalAmount, withdraw){
        return personalAmount -= withdraw;
    }
    console.log(`Amount of money withdrawn: `,withdraw,`, Amount of money left on your account: `,withdrawal(personalAmount, withdraw));
}
else {
    console.log(`The ATM doesn't enough money for the transaction.`)
}