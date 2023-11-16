//* Functions
/*
function helloWorld() {
  console.log("Salam Dünya");
}
helloWorld();
helloWorld();
helloWorld();
helloWorld();
console.clear();

//* Parameters in function
//! Your yourGreetingMessage == Hello
//! Default value : Arqument əgər call  edildiyi anda heç bir dəyər almazssa ona verilən default dəyəri istifadə edir. Əgər call olunduğu zaman dəyər verilsə həmin dəyər istifadə olunur

//! Default value dəyər tövsiyyə olunurki son arqumentdən verilsin
function greeting(yourGreetingMessage = "Anything") {
  console.log(yourGreetingMessage);
}

greeting("Hello"); // ? CTRL + Shift + Space
greeting("Salam"); // ? CTRL + Shift + Space
greeting("Hi"); // ? CTRL + Shift + Space

greeting();
greeting();
greeting();

function greatingGuest(name, greetingMessage = "Hello") {
  console.log(`${greetingMessage} ${name} !`);
}

greatingGuest("Salam", "Yusif");
greatingGuest("Yusif");
greatingGuest("Bruce");

//? DRY = Don't repeat yourself
function checkAge(age) {
  if (typeof age == "number") {
    if (age > 0 && age <= 15) {
      console.log("You are child 👶");
    } else if (age > 15 && age < 35) {
      console.log("You are young 🧒");
    } else if (age > 35 && age < 55) {
      console.log("You are adult 👨");
    } else {
      console.log("You are old  👴");
    }
  } else {
    console.error("Pls , Give a number to age");
  }
}

checkAge(13);
checkAge(23);
checkAge(53);
checkAge(99);
*/
console.clear();

//* Void and Returned functions
/*
//! Function çağırdıqdan sonra həmin function üzərində proqmatik əməliyyatlar edə biləcəyimi functionlar returned function adlanır
function returnedFn(argName) {
  return argName + 10; // 33 + 10 = 43
}

function voidFn(argName) {
  console.warn(argName + 10);
}

if (voidFn(33) > 30) {
  console.log("asdad");
}

const tenOverNumber = returnedFn(33);
console.log(tenOverNumber);

if (tenOverNumber > 10) {
  console.log("asdas");
}

function sum(numberOne, numberTwo) {
  //   console.log(numberOne + numberTwo);
  return numberOne + numberTwo;
}

console.log(sum(10, 20));

const num_1 = 2;
const num_2 = 3;

for (let index = 0; index < sum(num_1, num_2); index++) {
  console.log(index);
}
*/

//* Function expression and Declaration
/*
console.log(sum(10, 20));

const multiply = function (numberOne, numberTwo) {
  return numberOne * numberTwo;
};

function sum(numberOne, numberTwo) {
  //   console.log(numberOne + numberTwo);
  return numberOne + numberTwo;
}

console.log(multiply(10, 20));
//* Arrow function

const divided = (a, b) => a / b;
console.log(divided(10, 2));

//* Functions called other functions

const innerrFn = function () {
  return true;
};

const outerFn = function () {
  if (innerrFn()) {
    console.log("Inner fn is true");
  }
};

outerFn();
*/
// TODO -- Practice
//? Kalkulyator yarad

const sum = (numberOne, numberTwo) => numberOne + numberTwo;
const substract = (numberOne, numberTwo) => numberOne - numberTwo;
const divided = (numberOne, numberTwo) => numberOne / numberTwo;
const multiply = (numberOne, numberTwo) => numberOne * numberTwo;
//------------------------------12---------1
const calcNumber = function (numberOne, numberTwo, operator) {
  switch (operator) {
    case "+": //------------12      1
      console.log(sum(numberOne, numberTwo));
      break;
    case "-":
      console.log(substract(numberOne, numberTwo));
      break;
    case "/":
      console.log(divided(numberOne, numberTwo));
      break;
    case "*":
      console.log(multiply(numberOne, numberTwo));
      break;
    default:
      break;
  }
};

// calcNumber(12, 1, "-");
//? Saygac yarat

// let count = 0;
// const counter = function () {
//   count++;
// };

// counter();
// counter();
// counter();
// counter();
// console.log(count);

//? Array-in içinə iki verilmiş ədədlərin iki qatını verən yeni bir array qayataran  function yaz

const numbers = [1, 2, 3, 4, 5];
const double = (number) => number * 2;

const twiceArrayElement = function (arr) {
  const doubledArray = [];
  for (let index = 0; index < arr.length; index++) {
    // console.log(double();
    doubledArray.push(double(arr[index]));
  }

  return doubledArray;
};

console.log(twiceArrayElement(numbers)); // [2,4,6,8,10]

//? Full Name göstərən function yaz

const getFullName = (firstName, lastName) => `${lastName} ${firstName}`;

console.log(getFullName("Ramzi", "Balakishiyev"));

//? Array içərisindən elementi silən function yaz

const removeElementFromArray = function (arr, itemName) {
  if (arr.includes(itemName)) {
    const removedItemIndex = arr.indexOf(itemName);
    arr.splice(removedItemIndex, 1);
  }
};

const cars = ["BMW", "MERCEDES", "TOYOTO"];

removeElementFromArray(cars, "MERCEDES");
removeElementFromArray(numbers, 3);
console.log(cars);
console.log(numbers);
//? Random ədəd verən function yaz

const getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(getRandomNumber(100, 1000));
console.log(getRandomNumber(1, 15));
console.log(getRandomNumber(45, 50));
