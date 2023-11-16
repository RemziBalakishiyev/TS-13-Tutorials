//CONSOLE
// console.log(10);
// console.log("Hello World");

// console.warn("It must be incorrect!");
// console.error("There is some error!");

// const myArray = [
//   {
//     firstName: "Bruce",
//     lastName: "Wayne",
//   },
//   {
//     firstName: "Walter",
//     lastName: "White",
//   },
//   {
//     firstName: "Jamie",
//     lastName: "Lannister",
//   },
// ];

// // CLG
// console.log(myArray);
// console.table(myArray);
// console.clear();

//VARIABLES AND DATA TYPES

let product1 = "Mirror";
let product2 = 10;
let product3 = true;

let firstName = "10"; // Mətinsəl ifadə və ya String
let number = 10;
let hasDiplom = true;

console.log(firstName, number, hasDiplom);
console.log(firstName, typeof firstName);
console.log(number, typeof number);
console.log(hasDiplom, typeof hasDiplom);

//DECLARE VARIABLE
let productName;
console.log(productName);

// ASSIGNMENT
productName = "Iphone 15";
console.log(productName);

productName = "Iphone 12 pro max";
console.log(productName);

productName = null;
console.log(productName);

// let numberOne = 13;
// let numberTwo = 1;

let numberOne = 13,
  numberTwo = 1,
  numberThree;

let numberFour = (numberThree = 12);

let userName = "Walter White";
// VALUE
let walterFirstName = userName;

console.log(walterFirstName);

let anyValue = "Boolean";
console.log(anyValue, typeof anyValue);
anyValue = 12;
console.log(anyValue, typeof anyValue);
console.clear();
//LET, CONST, VAR

//❌
var categoryName = "Phone";
console.log(categoryName);

//🆗
let customerAddress = "Baku, Azerbaijan";
console.log(customerAddress);

const pi = 3.14;
const key = "asdui2n13kdn23kjn4rkj23nk2n4k";
console.clear();

// NAME CONVENTIONS

//Nələr edilməməlidir 👇
// let x = "Remzi"; //Açıqalyıcı olmalıdır❌
// // let 4number =  Dəyişən təyin edərkən sözün əəvvəlindəə ədəd olmamalıdır❌
// let console = 12; //Js öz metod və propertylərini name olaraq istifadə edə bilməzsən❌

//Nələr edilməlidir 👇
//Variable adları camel Case vasitəsi düzəlməlidir
//❌ unknown case
// const userinformationgetkey = "asdui2n13kdn23kjn4rkj23nk2n4k";
//❌ snake case
// const user_information_get_key = "asdui2n13kdn23kjn4rkj23nk2n4k";
//❌ pascale
// const UserInformationGetKey = "asdui2n13kdn23kjn4rkj23nk2n4k";

//Camel Case🆗
// const userInformationGetKey = "asdui2n13kdn23kjn4rkj23nk2n4k";
// BASIC OPERATORS

// console.log(10 + 20 + 30 - 40);
// console.log(6 * 12);
// console.log(14 / 7);
// // QALIQLI BÖLMƏ
// console.log(14 % 10);

// let number1 = 12,
//   number2 = 13;
// let sum = number1 + number2;
// let mult = number1 * number2;
// let divided = number1 / number2;
// let substract = number1 - number2;
// console.log(sum);
let number1 = 12,
  number2 = 13,
  number3;

number3 = number1 + number2; // 25
console.log(number3);

//          25    +   13
number3 = number3 + number2; // 38
console.log(number3);
//         38     + 12     - 13 =
number2 = number3 + number1 - number2; // 37

number2 = 10;
number1 = number2 + number1; //10 + 12 = 22
//          38     + 10     +  22 =70
number3 = number3 + number2 + number1;

console.log(number3);
console.clear();

//PROMPT, CONFIRM , ALERT

// alert(number3);

// let firstValueFromPrompt = prompt();

// console.log(firstValueFromPrompt);

// TEMPLATE LITERALS

// Əgər tərəflərdən ən azı Biri  string olarsa + işarəsi toplama yox birləşdirmə əməliyyatı edir.

// let bookName = prompt("Type Your favorite book name");

// let authorName = prompt("Type this  book Author");

// console.log(authorName + " - " + bookName + "!");

let myName = "Ferid Elizade";
let myLearninPlan = "Front end and Backend";

// My name is Remzi Balakishiyev" and I make plane to learn Front end and Backend
//Cetin formasi
let mySentence1 =
  "My name is " + myName + "and I make plan to learn" + myLearninPlan;
console.log(mySentence1);

// Asan formasi

let mySentence2 = `My name is ${myName} and I make plan to learn ${myLearninPlan} `;

console.log(mySentence2);
