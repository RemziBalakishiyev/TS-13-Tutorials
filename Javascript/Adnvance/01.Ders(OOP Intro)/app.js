// const building = {
//   countOfRoom: 12,
//   price: 290000,
//   adress: "Merdekan",
//   area: 140,
// };

// const building2 = {
//   countOfRoom: 12,
//   price: 14000,
//   adress: "Novxani",
//   area: 90,
// };

const Building = function (countOfRoom, price, address, area) {
  this.countOfRoom = countOfRoom;
  this.price = price;
  this.address = address;
  this.area = area;
};

const novxaniBuild = new Building(12, 140000, "Novxani", 900);
const merdakanBuild = new Building(2, 200000, "Merdekan", 140);

//* 1.step new bizim üçün boş obyekt {}
//* 2.step this = {};
//* 3.step argumentleri this icerisine bu sekilde gondermis oluruq.

//* 4. step bu function geriye this-i qaytarir (return this)

console.log(novxaniBuild.countOfRoom);
console.log(merdakanBuild.address);

//? 1 -  Inheritance

//* Inheritance bir classin basqa bir classsdan miras almasıdır.

const Person = function (id, firstName, lastName) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
};

const Student = function (firstName, lastName, speacialty) {
  Person.call(this, Math.random(), firstName, lastName);
  this.speacialty = speacialty;
};

const Teacher = function (firstName, lastName, salary) {
  Person.call(this, Math.random(), firstName, lastName);
  this.salary = salary;
};

const bruce = new Student("", "Wayne", "Computer Engineering");
const walter = new Teacher("Walter", "White", 4000);

console.log(bruce);
console.log(walter);

//? 2  - Abstraction

//* Abstraction - Bizim arxa planda metodlarin necə işləməsini və ya dəyərli necə dəyişməsinə görmemiz ehtiyac deyildir

document.querySelector();

//? Encapsulation
//* Encapsulation - Bizim Functionlar içərisində istifadə etdiyimiz dataları görmeyimi və ya onları dəyişdirməyimiz yaxud onları nizamlı formada dəyişdirməyimizə kömək edir.

//? Polymorphism
//* Polymorphism - Bizim bir functionu bir neçə formada işlədə bilməyimizdir.
