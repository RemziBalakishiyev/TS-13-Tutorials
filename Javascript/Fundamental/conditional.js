//!======== Block scope !========

// let mySurname = "Balakishiyev";
// {
//   let myName = "Remzi";
//   console.log(`${myName} in Scope`);
//   console.log(`${mySurname} in Scope`);

//   {
//     let myAge = 13;
//     console.log(myAge);
//     console.log(myName);
//   }
// }

// console.log(myName);
// console.log(`${mySurname} in global scope`);
console.clear();
//!======== If statement !========

//Note: If(şərt) əgər doğru olarsa həmin if altında olan scope içerisindəki kodlar çalışmağa başllayacaqdır

// if (false) {
//   console.log("Şərt doğrudur");
// }

// let age = 19;
// let studentText = "Bu şəxs tələbə ola bilməz";
// if (age > 18) {
//   studentText = "Bu şəxs tələbə ola bilər";
// }

// console.log(studentText);

// let hasFinishDriver = false;
// let isDriver = age > 18 && !hasFinishDriver;

// if (isDriver) {
//   console.log("Bu şəxsə sürücülük vəsiqəsi verilsin");
// }

// let zero = 0;

// if (!zero) {
//   console.log("Bu eded sifirdir");
// }

// let numberOne = 11;
// // if (!(numberOne == 10)) {
// //   console.log("Bu eded 10-a beraber deyildir");
// // }

// if (numberOne != 10) {
//   console.log("Bu eded 10-a beraber deyildir");
// }
console.clear();
////!======== Else and Else If statement !========

// let hasFinishDriver = false;

// if (hasFinishDriver) {
//   console.log("Bu şəxs sürücülük vəsiqəsi ala bilər🚗");
// } else {
//   console.log("Sürücülük vəsiqəsi üçün kursa getməlisiniz 🚌");
// }

// let userName = "boolean";

// if (userName == "remzi") {
//   console.log("Rəmzi Balakişiyev 🧒");
// }
// //  boolean  == boolean -> true
// if (userName == "boolean") {
//   console.log("Boolean Teach 📱");
// }

// if (userName == "course") {
//   console.log("Boolean Teach Academy 👨‍🏫");
// }

// if (userName == "programmer") {
//   console.log("Developer for Front end 👨‍💻");
// }

// if (userName == "remzi") {
//   console.log("Rəmzi Balakişiyev 🧒");
// } else if (userName == "boolean") {
//   console.log("Boolean Teach 📱");
// } else if (userName == "course") {
//   console.log("Boolean Teach Academy 👨‍🏫");
// } else if (userName == "programmer") {
//   console.log("Developer for Front end 👨‍💻");
// } else {
//   console.log("Page not found ❌");
// }

// ////!======== Logical "AND OR" in Codnitional Statement !========
// let numberOne = 45;
// //      true             false
// if (numberOne > 0 && numberOne <= 15) {
//   console.log("eded 0 ve 15 arasinda  ededdir");
// } else if (numberOne > 15 && numberOne <= 30) {
//   console.log("eded 15 ve 30 arasinda  ededdir");
// } else if (numberOne > 30 && numberOne <= 50) {
//   console.log("eded 30 ve 50 arasinda  ededdir");
// } else if (numberOne > 50) {
//   console.log("eded 50 -den boyukdur");
// } else {
//   console.log("eded menfidir");
// }

// let numberTwo = 25; // 23 % 2 == 0

// if (numberTwo % 2 == 0) {
//   console.log("Bu eded cütdür");
// } else {
//   console.log("Bu eded təkdir");
// }
console.clear();
////!======== Practice !========

//1. Tempratura görə buzun əriyib əriməməsini tapın
//KISS - Kepp it simple stupid
// let temprature = 20;
// let startMelt = "";
// if (temprature > 0) {
//   startMelt = "Buz erimeye basladi";
// } else {
//   startMelt = "Buz erimir";
// }
// console.log(startMelt);
// //2. Heftenin ikinci günü kitab oxuyağımla bağlı , 5 ci günü filme baxacağımla bağlı , bazar günü kod yazacağımla bağlı bildiriş göndersin

// let dayOfWeek = 7;
// let notificationMessage = "";

// if (dayOfWeek == 2) {
//   notificationMessage = "Read a book 🧐";
// } else if (dayOfWeek == 5) {
//   notificationMessage = "Watch a movie 🍿";
// } else if (dayOfWeek == 7) {
//   notificationMessage = "Write a code 👩‍💻";
// } else if (
//   dayOfWeek == 1 ||
//   dayOfWeek == 3 ||
//   dayOfWeek == 4 ||
//   dayOfWeek == 6
// ) {
//   notificationMessage = "Do it anything 🗡";
// } else {
//   notificationMessage = "Week has not this day ❌";
// }
// console.log(notificationMessage);
// // alert(notificationMessage);

// //3. Istifadəçidən gələn ədədin həm 5-ə həmdə 3 bölünməsini tapın.

// const numberFromPrompt = parseInt(prompt("Give a number 🔢"));

// // if (numberFromPrompt % 3 == 0 && numberFromPrompt % 5 == 0) {
// //   alert("Bu eded 3 ve 5- bolunur");
// // } else {
// //   alert("Bu eded 3 ve 5- bolunmur");
// // }

// //4. Istifadəçidən gələn ədədin həm 5-ə və ya 3 bölünməsini tapın.
// if (numberFromPrompt % 3 == 0 || numberFromPrompt % 5 == 0) {
//   alert("Bu eded 3 ve ya 5- bolunur");
// } else {
//   alert("Bu eded 3 ve ya 5- bolunmur");
// }
console.clear();
//!======== Math object !========

// let numberOne = 5;
// let numberTwo = 16;
// let numberThree = 3.9;
// console.log(Math.pow(numberOne, 5));

// console.log(Math.sqrt(numberTwo));

// console.log(Math.pow(numberTwo, 1.0 / 4));

// console.log(Math.round(numberThree));
// console.log(Math.ceil(numberThree));
// console.log(Math.floor(numberThree));

// console.log(Math.floor(Math.random() * 10));

// const min = 10;
// const max = 20;
// const rand = Math.random();
// console.log(rand);
// const randomNumber = Math.floor(rand * (max - min) + min);

// console.log(randomNumber);
// const min = 10;
// const max = 20;
// const randomNumber = Math.floor(Math.random() * (max - min) + min);

// if (randomNumber % 2 == 0) {
//   console.log(`Bu ədəd cütdür ədəd = ${randomNumber}`);
// } else {
//   console.log(`Bu ədəd təkdir ədəd = ${randomNumber}`);
// }
console.clear();
//!======== Nested If  !========
// const min = 1;
// const max = 30;
// const randomNumber = Math.floor(Math.random() * (max - min) + min);

// const userRole = "admin";
// const userAge = randomNumber;
// console.log(userAge);
// if (userRole == "admin") {
//   if (userAge >= 1 && userAge <= 15) {
//     console.log("Bu istifadəçi sistemə daxil ola bilməz ❌");
//   } else if (userAge > 15 && userAge <= 18) {
//     console.log("Bu istifadəçi admin kimi sistemə daxil ola bilməz ❎");
//   } else {
//     console.log("Bu istifadəçi sistemə daxil ola bilər 🆗");
//   }
// } else {
//   console.log("Sisteme admin kimi daxil olmalisiniz");
// }
console.clear();
//!======== Switch Case   !========

// const grade = "B";

// Dəyişənin birbaşa qiymətə bərabər olması şərtlərində biz switch case statement-dən istifadə edə bilərik

// if (grade == "A") {
//   console.log("Good Job 💯");
// } else if (grade == "B") {
//   console.log("You Can do better 💪");
// } else {
//   console.log("Pleas study harder 🦥");
// } 🔽

// switch (grade) {
//   case "A":
//     console.log("Good Job 💯");
//     break;
//   case "B":
//     console.log("You Can do better 💪");
//     break;
//   case "C":
//     console.log("Please study harder 🦥");
//     break;
//   default:
//     console.log("You gonna loose your certificate");
//     break;
// }

// if (grade == "A" || grade == "B") {
//   console.log("Good Job 💯");
// }  else {
//   console.log("Pleas study harder 🦥");
// } 🔽

// switch (grade) {
//   case "A":
//   case "B":
//     console.log("Good Job 💯");
//     break;
//   case "C":
//     console.log("Please study harder 🦥");
//     break;
//   default:
//     console.log("You gonna loose your certificate");
//     break;
// }
console.clear();
//!======== Ternary Operator   !========

// let textDriverLicense;
// let age = 13;
// //STATEMENT
// if (age >= 18) {
//   console.log("Can you get driver license 🚘");
// } else {
//   console.log("You have to next years 🌠");
// }

// age >= 18 /// True olarsa birinci false olarsa ikinci
//   ? console.log() //If
//   : console.log(); //Else

// textDriverLicense =
//   age >= 18 ? "Can you get driver license 🚘" : "You have to next years 🌠";

// console.log(textDriverLicense);

// let hasDriverLicense = age >= 18;
// if (hasDriverLicense) {
// }
// console.log(
//   `Remzi Balakishiyev ${hasDriverLicense ? "congretulation" : "Sorry"}`
// );

console.clear();

//1. Çevrənin sahəsini tapan proqram
const min = 1;
const max = 50;
const randomNumber = Math.floor(Math.random() * (max - min) + min);
const radius = randomNumber;

const area = Math.floor(Math.PI * Math.pow(radius, 2));
const height = Math.floor(Math.PI * 2 * radius);

console.log(`Area : ${area} , Height : ${height} , Radius : ${radius}`);
//1. Həftənin günlərinə görə praktika edən proqram
let practiceSomething;
let dayOfWeek = randomNumber;
if (dayOfWeek > 0 && dayOfWeek <= 7) {
  switch (dayOfWeek) {
    case 1:
    case 3:
      practiceSomething = "Go to Gym ⛹️‍♀️";
      break;
    case 2:
    case 4:
      practiceSomething = "Read a book 📖";
      break;
    case 5:
    case 6:
      practiceSomething = "You must learn coding 👩‍💻";
      break;
    default:
      practiceSomething = "You can go to watch movie 🎥";
      break;
  }
} else {
  practiceSomething = "There is not this day";
}

console.log(practiceSomething);

//2. İstifadecinin sisteme daxil  olub olmamasini yoxladiqdan sonra rolllarini görə yoxllama et

const isAuthenticated = true;
const roleName = "admin";

if (isAuthenticated) {
  if (roleName == "admin") {
    console.log("Admin enter to system");
  } else if (roleName == "user") {
    console.info("User enter to system");
  }
} else {
  console.warn("You can't enter this system");
}
//3. İstifadəçinin qadın ya kişi olmasını yoxlayın -- Ternary operator
let gender = false;
let textForGender;
textForGender = gender ? "User is male 👨" : "User is Female 🚺";
console.log(textForGender);
//4. İstifadəçinin yaşına görə və aylıq qazancına görə kredit alıb almamasını yoxlasın

let age = randomNumber;

let monthlySalary = 10 * randomNumber;
if (age > 18) {
  if (monthlySalary > 10 && monthlySalary <= 150) {
    console.error(
      "Bu istifədəçinin aylıq gəlirinə görə kredit veriləə bilməz ❌"
    );
  } else if (monthlySalary > 150 && monthlySalary <= 350) {
    console.log("Siz 3400$ kredit əldə edəə bilərsiniz");
  } else {
    console.log("Siz 5000$ kredit əldə edəə bilərsiniz");
  }
} else {
  console.warn("Yaşınıza görə kredit verə bilmərik");
}
