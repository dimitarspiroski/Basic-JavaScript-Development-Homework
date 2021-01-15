let myArray = ["Hello", "there", "students", "of", "SEDC!"];

function mainString(array) {
        let bigString;
        bigString = array.join(" ");
        return bigString;
    }

 console.log(mainString(myArray));