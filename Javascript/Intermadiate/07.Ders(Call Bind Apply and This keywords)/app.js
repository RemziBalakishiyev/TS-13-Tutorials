const addNewTicket = function (items) {
  this.items.push(items);
};

const addNewTicketList = function (items) {
  this.items = [...this.items, ...items];
};

const giveSalary = function (salary, edv) {
  this.salary = salary - (salary * edv) / 100;
};

const calcCountOfTicket = function () {
  console.log(this.items);

  const count = this.items.reduce((total, item) => total + item.quantity, 0);
  console.log(count);
};

const salesTicket = {
  customerName: "Alice",
  items: [
    { name: "Product A", quantity: 2, price: 15 },
    { name: "Product B", quantity: 1, price: 25 },
  ],
  date: new Date(),
  calculateTotalAmount: function () {
    return this.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  },
  displayTicket: function () {
    console.log(`Sales Ticket for ${this.customerName}`);
    console.log("------------------------------------");

    this.items.forEach((item) => {
      console.log(
        `${item.name}\t\t${item.quantity}\t\t$${item.price * item.quantity}`
      );
    });

    console.log("------------------------------------");
    console.log(`Total Amount:\t\t\t$${this.calculateTotalAmount()}`);
    console.log(`Date:\t\t\t\t${this.date.toLocaleString()}`);
  },

  displayThis() {},
};

const introduce = function () {
  console.log(this);
  console.log(
    `Hello, I'm ${this.firstName} ${this.lastName}, and I am ${this.age} years old.`
  );
};
const john = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,

  getRegularFn: function () {
    console.log(this);
  },

  getArrowFn: () => {
    console.log(this);
  },
};

const bruce = {
  firstName: "Bruce",
  lastName: "Wayne",
  age: 40,
  isStudent: true,
};

//? this keyword

console.log(this); // Window objectini verir

//? this keyword in Objects
salesTicket.displayThis();
salesTicket.displayTicket();

//? Arrow functions and Regular Functions difference

// person.getRegularFn();

// person.getArrowFn();
const input = document.querySelector("#simpleInp");
console.log(input);

// input.addEventListener("keypress", () => {
//   console.log(this.value);
// });

//? Call, Bind , Apply

//* Call, Bind , Apply metodlari Js-de this keywordu manipulation etmek ucundru

introduce.call(bruce);

introduce.call(john);

addNewTicket.call(salesTicket, { name: "Product C", quantity: 4, price: 25 });

addNewTicketList.call(salesTicket, [
  { name: "Product C", quantity: 4, price: 25 },
]);

console.log(salesTicket.items);

giveSalary.call(john, 1000, 20);
giveSalary.apply(bruce, [2000, 10]);
console.log(john.salary);
console.log(bruce.salary);

// calcCountOfTicket.call(salesTicket);
const countTicketFn = calcCountOfTicket.bind(salesTicket);
countTicketFn();
//? Object method - Object.assign()

let person = {
  name: "Walter",
};

// person = {
//   ...person,
//   name: "Jamie",
//   age: 43,
// };
person.age = 23;
const newObj = {
  ...john,
  ...salesTicket,
  ...person,
};
console.log(newObj);
//? Object method - Object.defineProperty()

Object.defineProperty(person, "surname", {
  value: "White",
  writable: true,
});
person.surname = "Lannister";

//? Object.freeze()

Object.freeze(person);
person.name = "Jamie";

delete person.name;

console.log(person);
//? Object method - Object.entries()

console.log();

for (const iterator of Object.entries(john)) {
  console.log(iterator);
}

//? Object method - Object.values()

console.log(Object.values(john));

for (const iterator of Object.values(john)) {
  console.log(iterator);
}

//? Object method - Object.keys()

console.log(Object.keys(john));

import module from "../08.Ders(Callback,Closure,IIFE))/app.js";

console.log(module.connectionString);
