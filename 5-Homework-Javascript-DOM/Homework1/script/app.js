let myTitleOne = document.getElementById("myTitle");
let myTitleThree = document.querySelector("h3")
let myTitleTwo = myTitleThree.previousElementSibling;
let paragraphOne = document.querySelector("p.paragraph")
let paragraphTwo = document.querySelector("p.paragraph-second")

myTitleOne.innerText = `I feel really bad about changing this...`

myTitleTwo.innerText = `I changed this one too, just because I can.
...And because you asked me so politely...`

myTitleThree.innerText = `Now is the perfect time to tell you a secret.
...
...
...
I was just building up suspense...!`

paragraphOne.innerText = "Hello there!"
paragraphTwo.innerText = "I just hope I didn't miss any headers or paragraphs..."