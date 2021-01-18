let gameOne = "Valorant";
let gameTwo = "Path of Exile";
function rng(a, b) {
let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1) {
        console.log(gameOne);
    }   
    else {
        console.log(gameTwo);
    }
}

rng (gameOne, gameTwo);
