//* Introducing to Object

//const ramzi = ["Remzi", "Balakishiyev", 2023 - 2000, "Backend developer"];

// const ramzi = {
//   firstName: "Ramzi",
//   lastName: "Balakishiyev",
//   speaciality: "Backend developer",
//   role: "admin",
//   works: ["Teacher", "Developer", "Consultant"],
//   location: {
//     country: "Azerbaijan",
//     city: "Baku",
//     street: "Subhi Salayev",
//   },
// };

// console.log(ramzi.location.city);

// //* Bracket and Dot
// const nameKeyword = "Name";
// console.log(ramzi.lastName);
// console.log(ramzi["last" + nameKeyword]);
// console.log(ramzi["first" + nameKeyword]);
// console.log(ramzi.works[2]);
// ramzi.works.push("Project Manager");

// for (let index = 0; index < ramzi.works.length; index++) {
//   const element = ramzi.works[index];
//   console.log(element);
// }

// // if (ramzi.role == "admin") {
// //   alert("You can enter to system");
// // }
// //* Object in Array

// const users = [
//   {
//     username: "ramzibalakishiyev",
//     email: "ramzib@boolean.com",
//   },
//   {
//     username: "brucewayne",
//     email: "brucew@boolean.com",
//   },
//   {
//     username: "walterwhite",
//     email: "walterw@boolean.com",
//   },
// ];

// const johnWickUser = {
//   username: "johnwick",
//   email: "johnw@boolean.com",
// };

// users.push(johnWickUser);

// console.log(users);

// const getMessage = function () {
//   return { messageText: "Success response", messageCode: "500" };
// };

// console.log(getMessage().messageText);

//* Nested Object

//* Object methods

const ramzi2 = {
  firstName: "Ramzi",
  lastName: "Balakishiyev",
  speaciality: "Backend developer",
  role: "admin",
  dateOfBirth: 2000,
  works: ["Teacher", "Developer", "Consultant"],
  location: {
    country: "Azerbaijan",
    city: "Baku",
    street: "Subhi Salayev",
  },

  getThis() {
    //? this == current object --> this == ramzi2
    console.log(this);
  },

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  calcAge(currentYear) {
    this.age = currentYear - this.dateOfBirth;
    return currentYear - this.dateOfBirth;
  },

  setCountOfWork() {
    this.countOfWork = this.works.length;
  },

  getHasDriverLicense() {
    this.hasDriverLicense = this.calcAge(2023) > 18;
  },
};

const userMessage = {
  errorMessage: "Any error happened",
  erroCode: 404,
  succesMessage: "Succes",
  succesCode: 200,

  getErrorMessage: function () {
    return `${userMessage.erroCode} ${userMessage.errorMessage}`;
  },
  getSuccesMessage() {
    return `${userMessage.succesCode} ${userMessage.succesMessage}`;
  },
  getThis() {
    //? this == current object
    console.log(this);
  },
};

ramzi2.getThis();
userMessage.getThis();
console.log(ramzi2.getFullName());
console.log(userMessage.getErrorMessage());

console.log([1, 2, 3]);
//* Create object property outer of Object

ramzi2.mail = "remzibalakisiyev2211@gmail.com";
ramzi2["instagram"] = "@remzibalakishiyev";

// ramzi2.countOfWork = ramzi2.works.length;

// ramzi2["age"] = ramzi2.calcAge(2023);
ramzi2.calcAge(2023);
ramzi2.setCountOfWork();
ramzi2.getHasDriverLicense();
console.log(ramzi2);

//* Object.Methods

console.log(Object.keys(ramzi2));
console.log(Object.entries(ramzi2));

for (const key in ramzi2) {
  console.log(ramzi2[key]);
}
