const books = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isBestselller: false,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isBestselller: false,
  },
  { title: "1984", author: "George Orwell", isBestselller: true },
  { title: "Animal Farms", author: "George Orwell", isBestselller: true },
];

const temperaturesInFahrenheit = [32, 68, 104, 212];

const numbers = [1, 2, 3, 4, 5];
const numbers2 = [-2021, 40, 0, 111, 20, 333];

const employes = [
  {
    id: 1,
    Department: "IT",
    firstName: "Bruce",
    lastName: "Wayne",
    salaryOfYear: 60000,
  },
  {
    id: 2,
    Department: "IT",
    firstName: "John",
    lastName: "Wick",
    salaryOfYear: 18000,
  },
  {
    id: 3,
    Department: "HR",
    firstName: "Walter",
    lastName: "White",
    salaryOfYear: 10000,
  },
  {
    id: 2,
    Department: "IT",
    firstName: "Jamie",
    lastName: "Lanniste",
    salaryOfYear: 70000,
  },
];

//? map -- Arrayin elementlerini deyisib geriye yeni bir array qaytarir

// const twiceNumber = numbers.map((number) => number * 2);

// console.log(twiceNumber);
// const temperaturesInCelsius = temperaturesInFahrenheit.map(function (f) {
//   return (f - 32) * (5 / 9);
// });

// console.log(temperaturesInCelsius);
// //* Practice

// const author = books.map((book) => book.author);
// console.log(author);

// const fullNameOfEmployees = employes.map(
//   (emp) => `${emp.firstName} ${emp.lastName}`
// );

// console.log(fullNameOfEmployees);
console.clear();

//? filter --  Arrayin icerisindeki elementlerin deyerin verilmis şərt üzrə yoxlayıb true olanları qaytarır.

// const evenNumber = numbers.filter(function (num) {
//   return num % 2 == 0; // True olarsa arrayin elementini qaytaracaqdir
// });

// console.log(evenNumber);

// // const positiveNumbers = [];

// // for (const num2 of numbers2) {
// //   if (num2 > 0) {
// //     positiveNumbers.push(num2);
// //   }
// // }

// const positiveNumbers = numbers2.filter((num2) => num2 < 0);

// console.log(positiveNumbers);

// const booksOfBestsellers = books.filter((book) => !book.isBestselller);
// console.log(booksOfBestsellers);

// const highSalaryMonthlyWorkers = employes.filter(
//   (emp) => emp.salaryOfYear / 12 > 2500
// );

// console.log(highSalaryMonthlyWorkers);
console.clear();

//? reduce

const sumOfNumbers = numbers.reduce(function (accumulator, currentValue) {
  return currentValue + accumulator;
});

console.log(sumOfNumbers);
console.clear();
//? Combine Data transformation methods
//* Bestseller olmayan kitablarin yazıçılarından ibarət array versin
// const nonBestSellerAuthors = books.filter((book) => !book.isBestselller);

// console.log(nonBestSellerAuthors);

// const nonBestSellerAuthorsFullNames = nonBestSellerAuthors.map(
//   (nonBook) => nonBook.author
// ); ❌

const nonBestSellerAuthorsFullNames = books
  .filter((book) => !book.isBestselller)
  .map((book) => book.author);

console.log(nonBestSellerAuthorsFullNames);

const sumOfItWorkerSalary = employes
  .filter((emp) => emp.Department == "IT")
  .map((emp) => emp.salaryOfYear)
  .reduce((acc, currVal) => acc + currVal);

console.log(sumOfItWorkerSalary);

//? Some

// const hasBestsellerBook = () => {
//   for (const book of books) {
//     if (book.isBestselller) {
//       return true;
//     }
//   }
//   return false;
// };❌

const hasBestsellerBook = books.some((book) => book.isBestselller);

console.log(hasBestsellerBook);

const hasItWorker = employes.some((emp) => emp.Department == "Payrol");

console.log(hasItWorker);
//? every

const hasOnlyItWorkers = employes.every((emp) => emp.Department == "IT");

console.log(hasOnlyItWorkers);

//? Find
// let searchedObj = {};
// for (let book of books) {
//   if ((book.title = "1984")) {
//     searchedObj = book;
//   }
// } ❌

const searchedObj = books.find((book) => book.author == "George Orwell");
const searchedObj2 = books.filter((book) => book.author == "George Orwell");

const getEmployeeById = (id) => {
  return employes.find((emp) => emp.id == id);
};
console.log(searchedObj);
console.log(searchedObj2);

console.log(getEmployeeById(2));
console.log(getEmployeeById(1));

//? sort

console.log(numbers2.sort((a, b) => b - a));

console.log(employes.sort((a, b) => b.salaryOfYear - a.salaryOfYear));
