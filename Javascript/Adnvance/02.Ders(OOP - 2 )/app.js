//* 1.step new bizim üçün boş obyekt {}
//* 2.step this = {};
//* 3.step argumentleri this icerisine bu sekilde gondermis oluruq.
//* 4. Yaradilan object prototype baglanilir
//* 5. step bu function geriye this-i qaytarir (return this)
//? ES5
const Person = function (id, firstName, lastName, DOB) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.dateOfBirth = DOB;
}; //* => Constructor

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.calcAge = function () {
  this.age = 2024 - this.dateOfBirth;
  return this.age;
};

const Student = function (firstName, lastName, speacialty, dateOfBirth) {
  Person.call(this, Math.random(), firstName, lastName, dateOfBirth);
  this.speacialty = speacialty;
};
Student.prototype = Object.create(Person.prototype);

const Teacher = function (firstName, lastName, salary, dateOfBirth) {
  Person.call(this, Math.random(), firstName, lastName, dateOfBirth);
  this.salary = salary;
};
Teacher.prototype = Object.create(Person.prototype);

const bruce = new Student("Bruce", "Wayne", "IT", 1980);
const jamie = new Student("Jamie", "Lannister", "CE", 2004);

Teacher.prototype.calcSalary = function () {
  return this.salary / 12;
};

const walter = new Teacher("Walter", "White", 60000, 1997);
const john = new Teacher("John", "Wick", 72000, 2000);

console.log(john.calcSalary());
console.log(jamie.getFullName());
walter.calcAge();
console.log(walter);

//? ES6 - Classes

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  checkEmail() {
    if (this.email.includes("@")) {
      console.log(`The aemail ${this.email} is valid.`);
    } else {
      console.error(`The email ${this.email} is invalid.`);
    }
  }
}
class Authentication extends User {
  constructor(email, password, role) {
    super(email, password);
    this.role = role;
  }

  signIn() {
    console.log(`User ${this.email} signed in`);
  }
}

class UserDetail extends User {
  constructor(email, password, isAuthenticated) {
    super(email, password);
    this.isAuthenticated = isAuthenticated;
  }
}

const account1 = new Authentication("remzi.bboolean.com", "remzi123", "Admin");
const user1 = new UserDetail("remzi.b@boolean.com", "remzi123", "Admin");
console.log(account1.password);
account1.signIn();
account1.checkEmail();
user1.checkEmail();
console.log(account1);

class HelperArr {
  static remove(arr, id) {
    return Array.from(arr).splice(id, 1);
  }
}

// const helper = new HelperArr([1, 2, 4, 5]);
// helper.remove(2);
// console.log(helper.remove());

console.log(HelperArr.remove([1, 2, 4, 5], 1));
