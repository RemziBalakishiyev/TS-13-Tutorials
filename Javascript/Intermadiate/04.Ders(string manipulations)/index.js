let textOne = "I am Boolean Ts - 13 student";
let textTwo = "        I am learning front end           ";
console.log(textTwo);
let programmingLanguage = "Html,Css,Javascript,React";

//* toUpperCase -- Böyük hərflərlə yazılır
console.log(textOne.toUpperCase());
//* toLowerCase -- Kiçik hərflərlə yazılır
console.log(textOne.toLowerCase());

let myText = "booLeAN";
// let enteredText = prompt("Give any text : ");

// if (myText.toLowerCase() == enteredText.toLowerCase()) {
//   alert("Text is correct!");
// }
//*  CharAt

console.log(textTwo.charAt(3));

for (let index = 0; index < textOne.length; index++) {
  if (isFinite(textOne.charAt(index)) && textOne.charAt(index) !== " ") {
    console.log("Bu ifadədə ədəd mövcuddur");
  }
}

//* Concat
let fullTextTwo = textOne.concat(" ", textTwo.trim(), " by Ramzi Balakishiyev");
console.log(fullTextTwo);
//* trim

console.log(textTwo.trim());

//* endsWith

console.log(textOne.endsWith("student"));

//* startWith
console.log(textOne.startsWith("I am"));

//* includes

console.log(textOne.toLowerCase().includes("Boolean-MNS".toLowerCase()));

//* indexOf

console.log(textOne.indexOf("Boolean"));

//* lastIndexOf

console.log(textOne.lastIndexOf("t"));
//* repeat

console.log("Men en yaxşı developer olacam ".repeat(2));

//* slice
const indexing = textOne.indexOf("Boolean") + "Boolean".length;

console.log(textOne.slice(textOne.indexOf("Boolean"), indexing));

//* search

console.log(textOne.search("Boolean"));
//* split

console.log(textOne.split(" "));
console.log(programmingLanguage.split(","));

//* substr

console.log(textOne.substr(5, 7));
