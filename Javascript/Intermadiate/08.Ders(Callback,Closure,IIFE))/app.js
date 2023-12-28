//? Callback

const greet = function () {
  console.log("Hello world!");
};

const sayYourName = function () {
  console.log("My name is Ramzi 🧑");
};

const calcYourAge = (dateOfBirth) => {
  return 2023 - dateOfBirth;
};

const showYourAge = (age) => {
  return age.toString();
};

const myInformation = (welcomeFn, ageFn) => {
  welcomeFn();
  console.log(`My age ${ageFn()} years-old`);
};
const dateOfBirth = 0;

if (dateOfBirth) {
  myInformation(greet, () => calcYourAge(dateOfBirth));
} else {
  myInformation(sayYourName, () => showYourAge(23));
}

[1, 2, 3, 4].map((item) => {
  return item * 2;
});

// abc = ['a','b','c']

const firsLetterUpper = function (text) {
  const [firstSymbol, ...otherSymbol] = text;
  return [firstSymbol.toUpperCase(), ...otherSymbol].join("");
};

const capitalCase = function (text) {
  let arrText = text.split(" ");

  return arrText.map(firsLetterUpper).join(" ");
};

firsLetterUpper("bruce");

const manpiluteString = function (text, callFn) {
  if (!text) {
    return;
  }
  return callFn(text);
};

console.log(manpiluteString("bruce Wayne", firsLetterUpper));
console.log(manpiluteString("bruce wayne", capitalCase));

//? Closure

const counter = function () {
  let counter = 0;

  return {
    increment: function () {
      counter++;
      console.log(counter);
    },
    decrement: function () {
      counter--;
      console.log(counter);
    },
  };
};

// const decrement = function () {
//   counter--;
//   console.log(counter);
//   return counter;
// };

// increment();
// increment();
// increment();
// increment();

// decrement();
// decrement();

// decrement();

const increment = counter().increment;
const decrement = counter().decrement;

increment();
increment();
increment();
increment();

decrement();
decrement();

// countInc();
// countInc();
// countInc();

//? IIFE (Immediatey invovoked function expression)

const outsideVar = "Outside variable";

(function () {
  console.log("Hi");

  const insideVar = "Inside Variable";
  console.log(outsideVar);
  console.log(insideVar);
})();

let module = (function () {
  const calcAge = (DOB) => {
    return 2023 - DOB;
  };

  const connectionResult = (type) => {
    return type ? "Connected succesfully" : "Connection failed";
  };

  const YOUR_CONNECTION_KEY = "asdasdsad";

  return {
    calcAge,
    connectionResult,
    connectionString: YOUR_CONNECTION_KEY,
  };
})();

export default module;
