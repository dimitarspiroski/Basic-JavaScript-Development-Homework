let gameOne = "Valorant";
let gameTwo = "Path of Exile";
let gameThree = "League of Legends"
function rng(a, b) {
let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1) {
        console.log(gameOne);
    }   
    else if(randomNumber === 2){
        console.log(gameTwo);
    }
    else if(randomNumber === 3) {
        console.log(gameThree);
    }
    else {
        console.log(`There has been an error!`);
    }
}

rng (gameOne, gameTwo);
