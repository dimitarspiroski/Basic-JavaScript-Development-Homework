
function myFunc(element){
    console.log(typeof element);
    }

const testobject = {name: "object"}

myFunc(testobject);
myFunc("Dimitar");
myFunc(300);
myFunc(undefined);
myFunc(true);

