// Array and index

// let city1 = "Baku";
// let city2 = "Paris";
// let city3 = "Ankara";

// let cities = ["Baku", "Paris", "Ankara"];

// console.log(cities[2]);

// let customers = [
//   "Remzi",
//   "Bruce",
//   "Walter",
//   1,
//   13,
//   24,
//   true,
//   ["Jamie", false, 25],
// ];
// console.log(customers[7]);

// let multiDimensionalArr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   ["Hello world", 8, 9],
// ];
// console.log(multiDimensionalArr[1][1]);
// console.log(multiDimensionalArr[2][0]);
// let users = [];

// users[0] = "Bruce Wayne";
// users[1] = "Walter White";
// users[3] = "Jamie Lannister";

// console.log(users.length);
// console.log(customers.length);
// console.log(cities.length);

// // Arrayin en sonuncu elementi

// console.log(customers[customers.length - 1]);

// //Array and Loops

// console.log(customers);

// //8
// for (let cus = 0; cus < customers.length; cus++) {
//   console.log(typeof customers[cus]);
// }

// // 1- den 100 - e qeder eded olan bir array teyin et

// let numbers = [];
// console.log(numbers);
// for (let index = 1; index < 100; index++) {
//   numbers[index - 1] = index; // numbers[1] = 2
// }
// console.log(numbers);

// let userNames = [];
// for (let index = 0; index < 5; index++) {
//   userNames[index] = prompt("User Name : ");
// }

// console.log(userNames);]
console.clear();
//Array methods indexOf , shift, unshift ,pop, push, join, concat, splice, slice

// let books = [
//   "1984",
//   "Porte of Dorian Grey",
//   "Qraf Monte Cristo",
//   "1984",
//   "Martin Eden",
// ];
// // -- IndexOf
// console.log(` Index of : ${books.indexOf("asdas")}`);
// console.log(` Index of : ${books.indexOf("1984")}`);
// console.clear();

// //Includes
// console.log(` Includes : ${books.includes("Porte of Dorian")}`);
// console.clear();
// // Arrayin ilk elementini silmek üçün istifadə olunur.
// // books.shift();
// // books.shift();
// // console.log(books);
// console.clear();

// // Arrayin sonuncu elementini silmek üçün istifadə olunur.
// // books.pop();
// // console.log(books);
// console.clear();
// //Arrayin sonuna element elave edir
// books.push("Crime and Punishment");
// console.log(books);
// console.clear();

// books.unshift("Farm of animal");
// console.log(books);
// console.clear();

// console.log(Array.of(1, 2, 4));

// let authors = ["George Orwel", "Dostoyevski", "Alexandr Duma", "Jack London"];

// // authors.fill("d", 1, 2);
// console.log(authors.concat(books));
// console.log(authors.join(" "));

// console.log(authors.splice(authors.indexOf("Jack London"), 1));
// console.log(authors);
// console.log(authors.slice(2));
// console.log(books.splice(0, 3));
// console.log(books)

// Istifadəçidən phoneNames = deyerler al ve elindeki cari arrray-a onları elave et. Və əgər aldığın dəyər sənin arrayın içərisində varsa əlave etmə

// let phones = ["Iphone 13", "Samsing Galaxy S 20", "Redmi Note 10"];

// for (let index = 0; index < 3; index++) {
//   let phoneNames = prompt("Give Phone Name");

//   if (!phones.includes(phoneNames)) {
//     phones.push(phoneNames);
//   }
// }
//console.log(phones);
let mixArr = [
  "Remzi",
  "Bruce",
  "Walter",
  1,
  13,
  24,
  true,
  ["Jamie", false, 25],
];

let onlyNumbers = [];
let onlyStrings = [];

for (let index = 0; index < mixArr.length; index++) {
  const element = mixArr[index];

  if (typeof element == "string") {
    onlyStrings.push(element);
  } else if (typeof element == "number") {
    onlyNumbers.push(element);
  }
}

console.log(onlyNumbers);
console.log(onlyStrings);

const deletedElement = prompt("Deleted Element name");

if (mixArr.includes(deletedElement)) {
  mixArr.splice(mixArr.indexOf(deletedElement), 1);
}

console.log(mixArr);
